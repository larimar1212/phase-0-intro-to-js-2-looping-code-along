// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }

//     return gifts;
// }

// wrapGifts(gifts);

// make function name writeCards
// accets two qarguments, array of string names and an event 
// make a for looop that initalize at 0 thtat increments
// at the end of the loop , it stops at the end
// f the lenghth of the array
// make new array with a custom message for each name in the
// loop. return the array at the enf of the function

















let messageArray = [] // creating new message array that return 

const cards = ['Guadalupe', 'Ollie', 'Aki'] 
function writeCards(cards , event) {
    for (let i = 0; i < cards.length; i++) {
    messageArray.push( `Thank you, ${cards[i]}, for the wonderful ${event} gift!`)
    }
    return messageArray

}

writeCards(cards, event)
console.log(messageArray) 


