// import { useState } from 'react';

// // Define the types for key and initialValue
// type KeyType = string;
// type InitialValueType = any;

// // Custom hook to safely use localStorage
// function useLocalStorage(key: KeyType, initialValue: InitialValueType): [InitialValueType, (value: InitialValueType) => void] {
//   // Check if localStorage is available
//   const isLocalStorageAvailable = typeof localStorage !== 'undefined';

//   // Get the initial value from localStorage if available, or use the provided initial value
//   const [storedValue, setStoredValue] = useState<InitialValueType>(() => {
//     if (isLocalStorageAvailable) {
//       const item = localStorage.getItem(key);
//       return item ? JSON.parse(item) : initialValue;
//     } else {
//       return initialValue;
//     }
//   });

//   // Update localStorage when the state changes
//   const setValue = (newValue: InitialValueType) => {
//     setStoredValue(newValue);
//     if (isLocalStorageAvailable) {
//       localStorage.setItem(key, JSON.stringify(newValue));
//     }
//   };

//   return [storedValue, setValue];
// }

// export default useLocalStorage;