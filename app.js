// let person = prompt ("On a scale of 1-10, how much do you like cute animals") 

//let message;
    //function greet() {
//let username = prompt("Hi, what is your name?");
//document.write("Hello, " + username);
//}

//function askFood() {
    //let food = prompt("How many bananas do you want to feed the panda's? (0-10)");
        //let message;

    //if (food > 5) {
     //message = "Boooooo";
    //} else if (food < 5) {
     //message = "More please!";
    //} else if (food <= 10) {
        //message = "Thanks, these will not go on my pizza";
    //} else {
       //message = "You better not be putting these on a pizza!";
//}

//document.write(message);
//}

// Loop working. I want to apply CSS to diplay the resulting images in a nicer way.
function getBananna() {
    let feeding = prompt("How many banannas 1-10?");

    while (feeding < 0 || feeding >= 10) {
        feeding = prompt("Please enter 10 or lower!")
     document.write("<img src='pizzapanda.png'/>")
    }
    //for (let i = 0; i < feeding; i++) {
        //document.write("<img src='pizzapanda.png'/>")
    }
    
