// let person = prompt ("On a scale of 1-10, how much do you like cute animals") 

let message;
function greet() {
let username = prompt("Hi, what is your name?");
//console.log("Hello " + username);
document.write("Hello " + username);
}

function askFood() {
    let food = prompt("How many bananas? (0-20)");
        let message;
    if (food <= 10) {
        message = "Boooooo";
    } else if (food <= 15) {
        message = "More please!";
    } else if (food < 15) {
        message = "Thanks, these will not go on my pizza";
    }
}

document.write(message);

message = "Hello " + username + "." ;
