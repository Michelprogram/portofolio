import { isAbsent, isPresent } from "./optional";

type Events = {
  "experience:update": { progress: number };
  "project:status": { status: "idle" | "open" | "minimize" };
};

type Bus<K extends keyof Events> = {
  id: string;
  cb: (payload: Events[K]) => void;
};

const store = new Map<
  keyof Events,
  Array<{ id: string; cb: (payload: any) => void }>
>();

export const useEventBus = () => {
  const subscribe = <K extends keyof Events>(
    event: K,
    cb: (payload: Events[K]) => void,
  ) => {
    const item: Bus<K> = {
      id: crypto.randomUUID(),
      cb,
    };

    const callbacks = store.getOrInsert(event, new Array());

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
    callbacks.forEach(({ cb }) => cb(payload));
  };

  return {
    subscribe,
    publish,
  };
};
