import { useState, ChangeEvent, useEffect } from "react";
import { isString } from "~/utils/isString";

type InputChangeEvent = ChangeEvent<HTMLInputElement>;
let timeoutId: NodeJS.Timeout;

function getIntervalInMilliseconds<InputType>(value: InputType) {
  const DEFAULT_TIME_INTERVAL = 300;

  const LONG_TIME_INTERVAL = 900;
  const MAX_LENGTH_FOR_LONG_TIME_INTERVAL = 3;

  const length = isString(value) ? value.length : 1;

  if (length === 0) return 0;

  if (length < MAX_LENGTH_FOR_LONG_TIME_INTERVAL) return LONG_TIME_INTERVAL;

  return DEFAULT_TIME_INTERVAL;
}

export function useDebouncedInput<InputType>(initialValue: InputType) {
  const [value, setValue] = useState<InputType>(initialValue);
  const [debouncedValue, setDebouncedValue] = useState(initialValue);

  useEffect(() => {
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(
      () => setDebouncedValue(value),
      getIntervalInMilliseconds(value)
    );
  }, [value]);

  const onChange = (event: InputChangeEvent) =>
    setValue(event.currentTarget.value as unknown as InputType);

  return {
    debouncedValue,
    bind: { onChange, value },
  };
}
