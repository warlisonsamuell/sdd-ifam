import { CONFIG } from "./config.js";

export function loadRecord() {
  try {
    const storedRecord = Number(localStorage.getItem(CONFIG.recordStorageKey));
    return Number.isInteger(storedRecord) && storedRecord >= 0 ? storedRecord : 0;
  } catch {
    return 0;
  }
}

export function saveRecord(score, currentRecord) {
  const record = Math.max(score, currentRecord);

  if (score > currentRecord) {
    try {
      localStorage.setItem(CONFIG.recordStorageKey, String(record));
    } catch {
      return record;
    }
  }

  return record;
}