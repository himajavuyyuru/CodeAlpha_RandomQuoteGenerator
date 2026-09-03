# Random Quote Generator

A clean, minimal web app that displays a random quote on load and shows a new one on every click.
Built for the **CodeAlpha App Development Internship — Task 2**.

## Features

- Displays a random quote when the app loads
- "New Quote" button shows a different quote on every click (never repeats the current one twice in a row)
- Each quote shows the quote text and author clearly
- "Copy" button copies the quote + author to the clipboard
- "Post to X" button opens a pre-filled tweet with the quote
- Responsive layout, keyboard-accessible, respects reduced-motion preferences

## Tech Stack

- HTML5
- CSS3 (custom properties, no framework)
- Vanilla JavaScript (no dependencies)

## Project Structure

```
CodeAlpha_RandomQuoteGenerator/
├── index.html      # page structure
├── style.css       # styling
├── script.js       # quote data + app logic
└── README.md
```

## Running Locally

No build step or dependencies required.

1. Clone the repo
2. Open `index.html` in a browser (or serve the folder with any static server, e.g. `npx serve .`)

## Customizing

- **Add or edit quotes:** edit the `quotes` array at the top of `script.js` — each entry is `{ text, author }`.
- **Change the look:** edit the CSS custom properties in the `:root` block at the top of `style.css`.

