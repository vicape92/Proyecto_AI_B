export type AnalyticsEvent = {
  name: string;
  payload?: Record<string, string | number | boolean | undefined>;
};

export function trackEvent(_event: AnalyticsEvent) {
  // TODO(analytics): conectar con la herramienta y naming final cuando se decida.
}
