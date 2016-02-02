//////// VARIABLES LIST
var foodButtonImage = document.getElementById("foodButtonImage");


//////// OBJECT OF FOOD OPTIONS
var foodOptions = {
    pasta: function pastaa() {
        return ({title: "Pasta!", text: "Mamma mia, bon appetit!", imageUrl: "icons/pasta.png"});
    },
    hamburger: function hamburgerr() {
        return ({title: "Hamburger!", text: "'Murica!", imageUrl: "icons/hamburger.png"});
    },
    hotdog: function hotdogg() {
        return ({title: "Hot Dog!", text: "The classic ballpark snack, you might want to get two of these at least.", imageUrl: "icons/hotdog.png"});
    },
    pizza: function pizzaa() {
        return ({title: "Pizza!", text: "I'm tired of eating pizza... SAID NO ONE EVER", imageUrl: "icons/pizza.png"});
    },
    taco: function tacoo() {
        return ({title: "Taco!", text: "Arriba arriba andale arriba!", imageUrl: "icons/taco.png"});
    },
    sandwich: function sandwichh() {
        return ({title: "Sandwich!", text: "Eat healthy once in a while... or not. Whatever.", imageUrl: "icons/sandwich.png"});
    },
    sushi: function sushii() {
        return ({title: "Sushi!", text: "Itadakimasu!. I swear, I didn't learn this from watching anime.", imageUrl: "icons/sushi.png"});
    },
    seafood: function seafoodd() {
        return ({title: "Seafood!", text: "If you don't like seafood just roll again... don't get crazy though.", imageUrl: "icons/seafood.png"});
    },
    meat: function meatt() {
        return ({title: "Meat!", text: "Wallet breaker!", imageUrl: "icons/meat.png"});
    },
    soup: function soupp() {
        return ({title: "Soup...", text: "This is just sad... do us a favor and roll it again.", imageUrl: "icons/soup.png"});
    },
    chicken: function chickenn() {
        return ({title: "Chicken!", text: "The most balanced choice: healthy, tasty, and definitely not a wallet destroyer.", imageUrl: "icons/chicken.png"});
    },
    paella: function paellaa() {
        return ({title: "Paella!", text: "Good luck finding a place... You'll definitely need it.", imageUrl: "icons/paella.png"});
    },
};  


//////// ARRAY TO ACCESS THE FOOD OPTIONS
var whatToEat = [foodOptions.pasta(), foodOptions.hamburger(), foodOptions.hotdog(), foodOptions.pizza(), foodOptions.taco(), foodOptions.sandwich(), foodOptions.sushi(), foodOptions.seafood(), foodOptions.meat(), foodOptions.soup(), foodOptions.chicken(), foodOptions.paella()];



//////// RANDOM FOOD CHOICE
// **** need to research how to swap the values of the a given variable, check: http://stackoverflow.com/questions/16201656/how-to-swap-two-variables-in-javascript
foodButtonImage.onclick = function () {
    var msg = swal(whatToEat[Math.floor((Math.random() * 11))]);   
};













