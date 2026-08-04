"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "hongding-inquiry";
const CHANGE_EVENT = "hongding-inquiry-change";
const EMPTY_INQUIRY = "[]";

function getSnapshot() {
  return window.localStorage.getItem(STORAGE_KEY) ?? EMPTY_INQUIRY;
}

function getServerSnapshot() {
  return EMPTY_INQUIRY;
}

function subscribe(onStoreChange: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) onStoreChange();
  };

  window.addEventListener("storage", handleStorage);
  window.addEventListener(CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(CHANGE_EVENT, onStoreChange);
  };
}

function parseInquiryIds(value: string): string[] {
  try {
    const parsed: unknown = JSON.parse(value);
    return Array.isArray(parsed)
      ? parsed.filter((item): item is string => typeof item === "string")
      : [];
  } catch {
    return [];
  }
}

export function useInquiryIds() {
  return parseInquiryIds(
    useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot),
  );
}

export function saveInquiryIds(ids: string[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  window.dispatchEvent(new Event(CHANGE_EVENT));
}
