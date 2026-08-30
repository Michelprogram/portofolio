import { isAbsent } from "./optional";

type Events = {
  "experience:update": { progress: number };
  "project:status": { status: "idle" | "open" | "minimize" };
};

type EventCallback = (payload: never) => void;

type Bus = {
  id: string;
  cb: EventCallback;
};

const store = new Map<keyof Events, Bus[]>();

export const useEventBus = () => {
  const subscribe = <K extends keyof Events>(
    event: K,
    cb: (payload: Events[K]) => void,
  ) => {
    const item: Bus = {
      id: crypto.randomUUID(),
      cb,
    };

    const callbacks = store.getOrInsert(event, []);

    callbacks.push(item);

    return {
      unsubscribe: () => {
        const callbacks = store.get(event);
        const filtered = callbacks?.filter((i) => i.id !== item.id) ?? [];
        store.set(event, filtered);
      },
    };
  };

  const publish = <K extends keyof Events>(event: K, payload: Events[K]) => {
    const callbacks = store.get(event);
    if (isAbsent(callbacks)) return;
    callbacks.forEach(({ cb }) =>
      (cb as (payload: Events[K]) => void)(payload),
    );
  };

  return {
    subscribe,
    publish,
  };
};
