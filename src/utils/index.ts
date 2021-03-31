export class LocalStorage {
  static get(key: string) {
    return localStorage.getItem(key);
  }
  static set(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  static remove(key: string) {
    localStorage.removeItem(key);
  }
}
