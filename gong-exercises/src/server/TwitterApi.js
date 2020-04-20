import { useState } from 'react';

export function useLocalStorage(key) {

    function handleLocalStorageObject(data) {
        console.log("handleLocalStorageObject");
        localStorage.setItem(key, JSON.stringify(data));
        setLocalStorageObject(data);
    }

    function geJsonFromLocalStorage() {
        console.log("geJsonFromLocalStorage");
        let item = localStorage.getItem(key);
        return item ? JSON.parse(item) : item;
    }

    const [localStorageObject, setLocalStorageObject] = useState(geJsonFromLocalStorage());

    return [localStorageObject, handleLocalStorageObject];
}