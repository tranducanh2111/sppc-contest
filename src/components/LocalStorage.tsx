import { useState, useEffect } from 'react';

// Custom hook to safely use localStorage
function useLocalStorage(key, initialValue) {
  // Check if localStorage is available
  const isLocalStorageAvailable = typeof localStorage !== 'undefined';

  // Get the initial value from localStorage if available, or use the provided initial value
  const [storedValue, setStoredValue] = useState(() => {
    if (isLocalStorageAvailable) {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } else {
      return initialValue;
    }
  });

  // Update localStorage when the state changes
  const setValue = (value) => {
    setStoredValue(value);
    if (isLocalStorageAvailable) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
