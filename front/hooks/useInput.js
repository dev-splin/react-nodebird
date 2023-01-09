import {useCallback, useState} from "react";

/**
 * input을 위한 커스텀 훅
 * @param initialValue
 * @returns {[unknown,((function(*): void)|*)]}
 */
export default (initialValue = null) => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, handler];
}