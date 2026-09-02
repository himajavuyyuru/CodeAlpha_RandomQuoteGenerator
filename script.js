const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "Get busy living, or get busy dying.", author: "Stephen King" },
  { text: "Many of life's failures are people who did not realize how close they were to success when they gave up.", author: "Thomas A. Edison" },
  { text: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
  { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
  { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
  { text: "You will face many defeats in life, but never let yourself be defeated.", author: "Maya Angelou" },
  { text: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" },
  { text: "Whoever is happy will make others happy too.", author: "Anne Frank" },
  { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" }
];

const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const copyBtn = document.getElementById('copyBtn');
const tweetBtn = document.getElementById('tweetBtn');
const status = document.getElementById('status');

let lastIndex = -1;

// Picks a random quote index, re-rolling if it matches the last one shown
// so the same quote never appears twice in a row.
function pickIndex() {
  if (quotes.length === 1) return 0;
  let i;
  do {
    i = Math.floor(Math.random() * quotes.length);
  } while (i === lastIndex);
  return i;
}

// Renders a quote into the DOM. When animate is true, fades the old
// text out before swapping in the new text and fading it back in.
function renderQuote(index, animate) {
  const q = quotes[index];
  if (animate) {
    quoteText.classList.add('is-swapping');
    quoteAuthor.classList.add('is-swapping');
    setTimeout(() => {
      quoteText.textContent = q.text;
      quoteAuthor.textContent = '\u2014 ' + q.author;
      quoteText.classList.remove('is-swapping');
      quoteAuthor.classList.remove('is-swapping');
    }, 180);
  } else {
    quoteText.textContent = q.text;
    quoteAuthor.textContent = '\u2014 ' + q.author;
  }
  lastIndex = index;
}

function showNewQuote() {
  renderQuote(pickIndex(), true);
}

async function copyQuote() {
  const q = quotes[lastIndex];
  const line = `"${q.text}" \u2014 ${q.author}`;
  try {
    await navigator.clipboard.writeText(line);
  } catch (e) {
    // Clipboard API unavailable; fail silently.
  }
  status.classList.add('visible');
  setTimeout(() => status.classList.remove('visible'), 1200);
}

function tweetQuote() {
  const q = quotes[lastIndex];
  const text = encodeURIComponent(`"${q.text}" \u2014 ${q.author}`);
  window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank', 'noopener');
}

newQuoteBtn.addEventListener('click', showNewQuote);
copyBtn.addEventListener('click', copyQuote);
tweetBtn.addEventListener('click', tweetQuote);

// Show a quote as soon as the app loads (no animation on first render).
renderQuote(pickIndex(), false);
