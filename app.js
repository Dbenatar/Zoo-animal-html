// let person = prompt ("On a scale of 1-10, how much do you like cute animals") 

let message;
function greet() {
let username = prompt("Hi, what is your name?");
document.write("Hello, " + username);
}

function askFood() {
    let food = prompt("How many bananas do you want to feed the panda's? (0-10)");
        let message;

    if (food > 5) {
     message = "Boooooo";
    } else if (food < 5) {
     message = "More please!";
    } else if (food <= 10) {
        message = "Thanks, these will not go on my pizza";
    } else {
       message = "You better not be putting these on a pizza!";
}

document.write(message);
}