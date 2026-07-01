import { useId, useState } from "react";
import { trackEvent } from "../../integrations/analytics";
import { subscribeToNewsletter } from "../../integrations/newsletter";
import "./NewsletterForm.css";

type NewsletterStatus = "idle" | "invalid" | "submitting" | "success" | "already" | "error";

type NewsletterFormProps = {
  compact?: boolean;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function NewsletterForm({ compact = false }: NewsletterFormProps) {
  const baseId = useId();
  const emailId = `${baseId}-email`;
  const consentId = `${baseId}-consent`;
  const helpId = `${baseId}-help`;
  const messageId = `${baseId}-message`;
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<NewsletterStatus>("idle");
  const [message, setMessage] = useState("");

  const isEmailInvalid = status === "invalid" && !EMAIL_PATTERN.test(email.trim());
  const isConsentInvalid = status === "invalid" && EMAIL_PATTERN.test(email.trim()) && !consent;
  const isSubmitting = status === "submitting";
  const showInlineMessage = status === "invalid" && message;
  const emailDescription = [compact ? undefined : helpId, showInlineMessage ? messageId : undefined]
    .filter(Boolean)
    .join(" ");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedEmail = email.trim();
    if (!EMAIL_PATTERN.test(normalizedEmail)) {
      setStatus("invalid");
      setMessage("Introduce un correo válido para continuar.");
      return;
    }

    if (!consent) {
      setStatus("invalid");
      setMessage("Debes aceptar la política de privacidad para unirte a la newsletter.");
      return;
    }

    setEmail(normalizedEmail);
    setStatus("submitting");
    setMessage("");
    trackEvent({
      name: "newsletter_submit",
      payload: { source: "future" },
    });

    const result = await subscribeToNewsletter({ email: normalizedEmail });

    setStatus(result.status);
    if (result.status === "error") {
      setMessage(result.message);
    }
    trackEvent({
      name: "newsletter_result",
      payload: { source: "future", status: result.status },
    });
  };

  const handleRetry = () => {
    setStatus("idle");
    setMessage("");
  };

  if (status === "success") {
    return (
      <div className="tr-newsletter tr-newsletter--panel" data-compact={compact}>
        <StatusPanel
          status="success"
          title="Revisa tu correo"
          message="Te hemos enviado el primer mensaje de la expedición. Confirma tu alta para completar el doble opt-in."
        />
      </div>
    );
  }

  if (status === "already") {
    return (
      <div className="tr-newsletter tr-newsletter--panel" data-compact={compact}>
        <StatusPanel
          status="already"
          title="Ya formas parte de la aventura"
          message="Ese correo ya estaba en la lista. Cuando haya novedades confirmadas, recibirás las pistas en tu bandeja."
        />
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="tr-newsletter tr-newsletter--panel" data-compact={compact}>
        <StatusPanel
          status="error"
          title="No se ha podido enviar"
          message={message || "La conexión con la newsletter ha fallado. Inténtalo de nuevo en unos segundos."}
          action={
            <button className="tr-newsletter__retry" type="button" onClick={handleRetry}>
              Reintentar
            </button>
          }
        />
      </div>
    );
  }

  return (
    <form
      className="tr-newsletter"
      data-compact={compact}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="tr-newsletter__row">
        <label className="tr-newsletter__label" htmlFor={emailId}>
          Correo electrónico
        </label>
        <input
          id={emailId}
          className="tr-newsletter__input"
          type="email"
          inputMode="email"
          autoComplete="email"
          value={email}
          placeholder="tu@email.com"
          disabled={isSubmitting}
          aria-invalid={isEmailInvalid}
          aria-describedby={emailDescription || undefined}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status === "invalid") {
              setStatus("idle");
              setMessage("");
            }
          }}
        />
        <button className="tr-newsletter__submit" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Unirme"}
        </button>
      </div>

      {!compact ? (
        <p id={helpId} className="tr-newsletter__help">
          Solo enviaremos noticias relevantes sobre el futuro de Tomb Raider.
        </p>
      ) : null}

      <label className="tr-newsletter__consent" htmlFor={consentId}>
        <input
          id={consentId}
          type="checkbox"
          checked={consent}
          disabled={isSubmitting}
          aria-invalid={isConsentInvalid}
          aria-describedby={showInlineMessage ? messageId : undefined}
          onChange={(event) => {
            setConsent(event.target.checked);
            if (status === "invalid") {
              setStatus("idle");
              setMessage("");
            }
          }}
        />
        <span>
          Acepto recibir comunicaciones y he leído la{" "}
          <a href="#tr-footer-privacy">política de privacidad</a>.
        </span>
      </label>

      {showInlineMessage ? (
        <p id={messageId} className="tr-newsletter__message" role="alert">
          {message}
        </p>
      ) : null}
    </form>
  );
}

type StatusPanelProps = {
  status: "success" | "already" | "error";
  title: string;
  message: string;
  action?: React.ReactNode;
};

function StatusPanel({ status, title, message, action }: StatusPanelProps) {
  const role = status === "error" ? "alert" : "status";

  return (
    <div className="tr-newsletter__status" data-status={status} role={role}>
      <span className="tr-newsletter__status-icon" aria-hidden="true">
        {status === "error" ? "!" : "▲"}
      </span>
      <div className="tr-newsletter__status-copy">
        <strong>{title}</strong>
        <p>{message}</p>
        {action}
      </div>
    </div>
  );
}
