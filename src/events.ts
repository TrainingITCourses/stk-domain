// With Window API

export function dispatchEvent(type: string, payload: any) {
  const event = new CustomEvent(type, { detail: payload });
  window.dispatchEvent(event);
}

export function addEventListener(type: string, listener: EventListenerOrEventListenerObject) {
  window.addEventListener(type, listener);
}
