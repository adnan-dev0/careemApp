import * as KeyStore from "expo-secure-store"

async function setItem(key: string, value: string) {
    return await KeyStore.setItemAsync(key, value)
}

async function removeItem(key: string) {
    return await KeyStore.deleteItemAsync(key)
}

async function getItem(key: string) {
    return await KeyStore.getItemAsync(key);
}

export const SecureStore = {
    getItem,
    setItem,
    removeItem,
}