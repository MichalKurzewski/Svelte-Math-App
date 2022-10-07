import { writable } from "svelte/store"

const itemName = "storedAnswers"
const retrieved = localStorage.getItem(itemName)
const parsed = JSON.parse(retrieved)
export const storedAnswers = writable(parsed === null ? [] : parsed)

storedAnswers.subscribe(value =>
  localStorage.setItem(itemName, JSON.stringify(value))
)
