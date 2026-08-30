export type CardState = {
  status: "idle" | "open" | "minimize";
};

declare global {
  interface HTMLElementEventMap {
    "project:status": CustomEvent<CardState>;
  }
}
export {};
