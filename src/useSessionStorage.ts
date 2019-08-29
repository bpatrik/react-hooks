import { JSONValue } from './types';
import useStorage from './useStorage';

/**
 * Stores a key/value pair statefully in [`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage).
 *
 * @see [`useState` hook](https://reactjs.org/docs/hooks-reference.html#usestate), which exposes a similar interface
 *
 * @param key Identifier to associate the stored value with.
 * @param initialValue Value used when no item exists with the given key. Lazy initialization is available by using a function which returns the desired value.
 * @param errorCallback Method to execute in case of an error, e.g. when the storage quota has been exceeded or the user has denied permission to persist data.
 * @returns A statefully stored value, and a function to update it.
 *
 * @example
 * const Example = () => {
 *   const [name, setName] = useSessionStorage<string>('name', 'Anonymous');
 *   // ...
 * };
 */
export default function useSessionStorage<T extends JSONValue>(
  key: string,
  initialValue: T | (() => T) | null = null,
  errorCallback?: (error: DOMException) => void,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  return useStorage(() => sessionStorage, key, initialValue, errorCallback);
}
