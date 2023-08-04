function setLocalStorage(key: string, value: any) {
  try {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  } catch (e) {
    console.log("hata" + e);
  }
}

function getLocalStorage(key: string, initialValue?: any) {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  } catch (e) {
    // if error, return initial value
    return initialValue;
  }
}

function removeLocalStorage(key: string, initialValue: any) {
  try {
    const value = window.localStorage.removeItem(key);
  } catch (e) {
    // if error, return initial value
    return initialValue;
  }
}

export { setLocalStorage, getLocalStorage, removeLocalStorage };
