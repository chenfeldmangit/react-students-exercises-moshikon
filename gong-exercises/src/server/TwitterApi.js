import React, { useState } from 'react';

export function useLocalStorage(key) {

    function handleLocalStorageObject(tweets) {
        localStorage.setItem(key, JSON.stringify(tweets));
        setLocalStorageObject(tweets);
    }

    function geJsonFromLocalStorage() {
        let item = localStorage.getItem(key);
        return item ? JSON.parse(item) : item;
    }

    const [localStorageObject, setLocalStorageObject] = useState(geJsonFromLocalStorage());

    return [localStorageObject, handleLocalStorageObject];
}