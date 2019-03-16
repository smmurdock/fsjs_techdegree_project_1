/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// starting variables

let html = "";
let red = ;
let green = ;
let blue = ;
let rgbColor = ;

/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

let quotes = [
  {
    quote: "No one can make you feel inferior without your consent.",
    source: "Eleanor Roosevelt",
    citation: "This is My Story",
    year: 1937,
    tag: "inspirational",
  },
  {
    quote: "The only mystery in life is why the kamikaze pilots wore helmets.",
    source: "Al McGuire",
    tag: "humor",
  },
  {
    quote: "C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do, it blows away your whole leg.",
    source: "Bjarne Stroustrup",
    year: 1986,
    tag: "technology",
  },
  {
    quote: "Your ability to generate power is directly proportionate to your ability to relax.",
    source: "David Allen",
    citation: "Getting Things Done: The Art of Stress-Free Productivity",
    year: 2015,
    tag: "productivity",
  },
  {
    quote: "To the well-organized mind, death is but the next great adventure.",
    source: "J.K. Rowling",
    citation: "Harry Potter and the Sorcerer's Stone",
    year: 1997,
    tag: "inspirational",
  },
  {
    quote: "Never forget what you are, for surely the world will not. Make it your strength. Then it can never be your weakness. Armour yourself in it, and it will never be used to hurt you.",
    source: "George R.R. Martin",
    citation: "A Song of Ice and Fire: Game of Thrones",
    year: 1996,
    tag: "wisdom",
  },
  {
    quote: "I am and always will be the optimist. The hoper of far-flung hopes and the dreamer of improbable dreams.",
    source: "The Doctor",
    citation: "Doctor Who",
    year: 2011,
    tag: "inspirational",
  },
  {
    quote: "It's OK that I'm swearing. One, because, you know I'm lucky enough to live in a country where I'm allowed to do that, and two, and much more importantly, I am British and it just sounds adorable coming out of my mouth.",
    source: "John Oliver",
    tag: "humor",
  },
  {
    quote: "In a time of deceit telling the truth is a revolutionary act.",
    source: "George Orwell",
    citation: "1984",
    year: 1949,
    tag: "politics",
  },
  {
    quote: "The loneliest moment in someone’s life is when they are watching their whole world fall apart, and all they can do is stare blankly.",
    source: "F. Scott Fitzgerald",
    citation: "The Great Gatsby",
    year: 1925,
    tag: "wisdom",
  },
];


/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

console.log(getRandomQuote());

/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/

function printQuote() {
  return getRandomQuote()
}


/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.

function randomRGB() {
  return Math.floor(Math.random() * 256);
}

red = randomRGB();
green = randomRGB();
blue = randomRGB();
rgbColor = 'rgb(' + red + ", " + green + ", " + blue + ")";
html = "<div style=\"background-color:\">" + rgbColor + "\"</div>";
