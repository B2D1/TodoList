export const setStorage = (key: string, value: string) => {
  return new Promise((resolve) => {
    window.localStorage.setItem(key, value);
    resolve(true);
  });
};

export const removeStorage = (key: string) => {
  return new Promise((resolve) => {
    window.localStorage.removeItem(key);
    resolve(true);
  });
};
