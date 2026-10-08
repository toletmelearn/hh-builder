// HH-Builder: PostHog disabled - no-op stub
const posthog = {
  capture: () => {},
  identify: () => {},
  reset: () => {},
  init: () => {},
  register: () => {},
  unregister: () => {},
  opt_in_capturing: () => {},
  opt_out_capturing: () => {},
  isFeatureEnabled: () => false,
  getFeatureFlag: () => undefined,
  onFeatureFlags: () => {},
  people: { set: () => {}, set_once: () => {} },
};

export function usePostHog() {
  return posthog;
}

export function PostHogProvider({ children }) {
  return children;
}

export default posthog;
