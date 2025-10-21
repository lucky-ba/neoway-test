export function saveToLocalStorage<D>(key: string, data: D): boolean {
  try {
    const stringData = typeof data === "string" ? data : JSON.stringify(data);
    localStorage.setItem(key, stringData);
    return true;
  } catch (error) {
    console.error("Error saving to localStorage:", error);
    return false;
  }
}

export function getFromLocalStorage<D>(key: string): D | null {
  try {
    const data = localStorage.getItem(key);
    if (!data) return null;
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading from localStorage:", error);
    return null;
  }
}
