export function getDyadEngineBaseUrl(): string {
  // HH-Builder: Dyad Pro engine disabled
  return process.env.DYAD_ENGINE_URL ?? "";
}
