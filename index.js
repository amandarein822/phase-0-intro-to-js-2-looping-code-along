const names = ["Guadalupe", "Ollie", "Aki"];
const eventName = ["surprise"];

function writeCards(names, eventName) {
    let thankCards = [];
    for (let i = 0; i < names.length; i++) {
        thankCards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }

    return thankCards;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}