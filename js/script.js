/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// starting variables

let html = "";
let printHTML = "";
let red = "";
let green = "";
let blue = "";
let randomColor = "";


// Array of objects containing quotes

let quotes = [
  {
    quote: 'No one can make you feel inferior without your consent.',
    source: 'Eleanor Roosevelt',
    citation: 'This is My Story',
    year: 1937,
    tag: 'inspirational',
  },
  {
    quote: 'The only mystery in life is why the kamikaze pilots wore helmets.',
    source: 'Al McGuire',
    tag: 'humor',
  },
  {
    quote: 'C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do, it blows away your whole leg.',
    source: 'Bjarne Stroustrup',
    year: 1986,
    tag: 'technology',
  },
  {
    quote: 'Your ability to generate power is directly proportionate to your ability to relax.',
    source: 'David Allen',
    citation: 'Getting Things Done: The Art of Stress-Free Productivity',
    year: 2015,
    tag: 'productivity',
  },
  {
    quote: 'To the well-organized mind, death is but the next great adventure.',
    source: 'J.K. Rowling',
    citation: 'Harry Potter and the Sorcerer\'s Stone',
    year: 1997,
    tag: 'inspirational',
  },
  {
    quote: 'Never forget what you are, for surely the world will not. Make it your strength. Then it can never be your weakness. Armour yourself in it, and it will never be used to hurt you.',
    source: 'George R.R. Martin',
    citation: 'A Song of Ice and Fire: Game of Thrones',
    year: 1996,
    tag: 'wisdom',
  },
  {
    quote: 'I am and always will be the optimist. The hoper of far-flung hopes and the dreamer of improbable dreams.',
    source: 'The Doctor',
    citation: 'Doctor Who',
    year: 2011,
    tag: 'inspirational',
  },
  {
    quote: 'It\'s OK that I\'m swearing. One, because, you know I\'m lucky enough to live in a country where I\'m allowed to do that, and two, and much more importantly, I am British and it just sounds adorable coming out of my mouth.',
    source: 'John Oliver',
    tag: 'humor',
  },
  {
    quote: 'In a time of deceit telling the truth is a revolutionary act.',
    source: 'George Orwell',
    citation: '1984',
    year: 1949,
    tag: 'politics',
  },
  {
    quote: 'The loneliest moment in someone\'s life is when they are watching their whole world fall apart, and all they can do is stare blankly.',
    source: 'F. Scott Fitzgerald',
    citation: 'The Great Gatsby',
    year: 1925,
    tag: 'wisdom',
  },
];


// Function to select random object from array to display in viewport

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

//console.log(getRandomQuote());


// random color generator for background

function randomRGB() {
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random()* 256);
  randomColor = "rgb(" + red + ", " + green + ", " + blue + ")";
  console.log(randomColor);
  document.body.style.background = randomColor;
}


// Function to change quote and background color when button is clicked

function printQuote() {
  let quoteResults = getRandomQuote();
  printHTML = '<p class="quote">' + quoteResults.quote + '</p>' + '<p class="source">' + quoteResults.source + ' ';
    if (quoteResults.citation !== undefined) {
      printHTML += '<span class="citation">' + quoteResults.citation + '</span>';
    } if (quoteResults.year !== undefined) {
      printHTML += '<span class="year">' + quoteResults.year + ', </span>';
    } if (quoteResults.tag !== undefined) {
      printHTML += '<span class="tag">' + quoteResults.tag + ' </span>';
    }
    printHTML += ' </p>'
    document.getElementById('quote-box').innerHTML = printHTML;
    randomRGB();
    setTimeout(printQuote, 8000);
}


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
