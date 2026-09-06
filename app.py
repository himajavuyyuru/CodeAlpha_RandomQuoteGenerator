from flask import Flask, render_template
import random

app = Flask(__name__)

# List of quotes
quotes = [
    {
        "text": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs"
    },
    {
        "text": "Believe you can and you're halfway there.",
        "author": "Theodore Roosevelt"
    },
    {
        "text": "It always seems impossible until it's done.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Success is not final, failure is not fatal.",
        "author": "Winston Churchill"
    },
    {
        "text": "The future depends on what you do today.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "The best way to predict the future is to create it.",
        "author": "Peter Drucker"
    },
    {
        "text": "Don't watch the clock; do what it does. Keep going.",
        "author": "Sam Levenson"
    },
    {
        "text": "The secret of getting ahead is getting started.",
        "author": "Mark Twain"
    },
    {
        "text": "Dream big and dare to fail.",
        "author": "Norman Vaughan"
    },
    {
        "text": "Great things are done by a series of small things brought together.",
        "author": "Vincent van Gogh"
    }
]


@app.route("/")
def home():
    # Select a random quote
    quote = random.choice(quotes)

    # Send the quote to index.html
    return render_template("index.html", quote=quote)


if __name__ == "__main__":
    app.run(debug=True)

