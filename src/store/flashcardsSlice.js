// flashcardsSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const flashcardsSlice = createSlice({
    name: "flashcards",
    initialState: {
        flashcards: [],
    },
    reducers: {
        addFlashcard: (state, action) => {
            const { title, description, terms, termsLength} = action.payload;
            const newFlashcard = {
                id: nanoid(), // Generate unique ID
                title: title,
                description: description,
                terms: [], // Initialize terms array
                termsLength: termsLength,
            };
            state.flashcards.push(newFlashcard);
        },
        removeFlashcard: (state, action) => {
            state.flashcards = state.flashcards.filter((flashcard) => flashcard.id !== action.payload);
        },
        // Other reducers for updating flashcards
    },
});

export const { addFlashcard, removeFlashcard } = flashcardsSlice.actions;
export default flashcardsSlice.reducer;
