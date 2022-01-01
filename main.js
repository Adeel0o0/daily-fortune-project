let fortunes = ["Its amazing how much good you can do if you dont care who gets the credit.",
  "You already know the answer to the questions lingering inside your head.",
  "A new voyage will fill your life with untold memories.",
  "A smile is your personal welcome mat.",
  "All your hard work will soon pay off."
  "You will travel to many exotic places in your lifetime.",
]

let button = document.getElementById('fortuneButton');
let fortune = document.getElementById('fortune');

function fortuneSelector(){
  let randomFortune = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomFortune];
}

function showFortune(){
  fortune.innerHTML = fortuneSelector();
  button.innerHTML = "Come back tomorrow!";
  button.style.cursor = "default";

}

button.addEventListener('click', showFortune);