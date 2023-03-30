import mitt from 'mitt';
import type { Handler } from 'mitt';

const eventBus = mitt();

let bridageValue: unknown;

export default function useEventBus() {
  const busOn = (shareKey: string, handlerShareValue: Handler) => {
    eventBus.on(shareKey, handlerShareValue as Handler);
    handlerShareValue(bridageValue);
  };
  const busEmit = (shareKey: string, sharyValue: unknown) => {
    eventBus.emit(shareKey, sharyValue);
    bridageValue = sharyValue;
  };
  const busOff = (shareKey: string) => {
    eventBus.off(shareKey);
  };
  return {
    busOn,
    busEmit,
    busOff,
  };
}
