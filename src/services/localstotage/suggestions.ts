import { saveToLocalStorage, getFromLocalStorage } from "./localstorage";

export interface Suggestion {
  id: string;
  label: string;
  value: string;
}

export function saveSuggestionToLocalStorage(data: Suggestion): boolean {
  try {
    const suggestions = getSuggestionsFromLocalStorage();
    if (suggestions !== null) {
      const index = suggestions.findIndex((s) => s.id === data.id);
      if (index > -1) {
        suggestions.splice(index, 1);
      }
      if (suggestions.length > 3) suggestions.pop();
      console.log("sugest", suggestions);

      const saveToLocal = [data, ...suggestions];
      saveToLocalStorage<Suggestion[] | null>("suggestions", saveToLocal);
    } else {
      saveToLocalStorage<Suggestion[] | null>("suggestions", [data]);
    }
    return true;
  } catch (error) {
    console.error("Error saving to localStorage:", error);
    return false;
  }
}

export function getSuggestionsFromLocalStorage(): Suggestion[] | null {
  try {
    return getFromLocalStorage<Suggestion[]>("suggestions");
  } catch (error) {
    console.error("Error reading suggestions from localStorage:", error);
    return null;
  }
}
