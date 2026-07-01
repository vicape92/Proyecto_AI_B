export type NewsletterSubscriptionStatus = "success" | "already" | "error";

export type NewsletterSubscriptionRequest = {
  email: string;
};

export type NewsletterSubscriptionResult = {
  status: NewsletterSubscriptionStatus;
  message: string;
};

export async function subscribeToNewsletter({
  email,
}: NewsletterSubscriptionRequest): Promise<NewsletterSubscriptionResult> {
  // TODO(mailchimp): sustituir este stub por una llamada segura a backend/serverless.
  await new Promise((resolve) => window.setTimeout(resolve, 650));

  const normalizedEmail = email.trim().toLowerCase();
  if (normalizedEmail.includes("ya@") || normalizedEmail.includes("existente")) {
    return {
      status: "already",
      message: "Este correo ya está suscrito.",
    };
  }

  if (normalizedEmail.includes("error@")) {
    return {
      status: "error",
      message: "La conexión con la newsletter ha fallado. Inténtalo de nuevo en unos segundos.",
    };
  }

  return {
    status: "success",
    message: "Alta iniciada. Falta confirmar el doble opt-in.",
  };
}
