// Concatenate Some Strings.....
document.getElementById("ConcatenateString").onclick = function () {
    let message = "Have A Nice Day";
    let firstname = prompt("Enter Your First Name");
    let lastname = prompt("Enter Your Last Name");
    let banger = "!";
    let fullname = message + " " + firstname + " " + lastname + " " + banger;
    alert(fullname);
    let Statement = ' let message = "Have A Nice Day" <br>   let firstname = prompt("Enter Your First Name") <br>  let lastname = prompt("Enter Your Last Name") <br> let banger = "!" <br>  let Fullname = message + " " +  firstname  + " " + lastname + " " + banger'

    document.getElementById("Statement").innerHTML = Statement
    document.getElementById("Output").innerHTML = fullname
}


// Ask Name From User......
document.getElementById("UserName").onclick = function () {
    let Name = prompt("Enter Your Full Name");
    alert(Name);
    let Statement = ' let Name = prompt("Enter Your Full Name")'
    document.getElementById("Statement").innerHTML = Statement
    document.getElementById("Output").innerHTML = Name
}


// Comparison Operators......
document.getElementById("ComOprat").onclick = function () {
    let num1 = +prompt("Enter Any Number to check comparison betweet Values!");
    let num2 = +prompt("Enter The Second Value to check comparison betweet Them...");
    let answer;
    if (num1 == num2) {
        answer = "The Given Values Are Equal"
    } else if (num1 > num2) {
        answer = " is greater than"
    } else if (num1 < num2) {
        answer = "is less than"
    } else {
        answer = "Please Your Values Again"
    }
    let ans = '' + num1 + " " + answer + " " + num2 + '';
    alert(ans)
    let statment = 'let num1 = +prompt("Enter Any Number to check comparison betweet Values!") <br>  num1 = ' + num1 + ' <br> let num2 = +prompt("Enter The Second Value to check comparison betweet Them...")  <br> num1 = ' + num2 + ' '
    document.getElementById("Statement").innerHTML = statment
    document.getElementById("Output").innerHTML = ans
}


// if else if....
document.getElementById("ifelse").onclick = function () {
    let Mobile = prompt("Enter Your Favorite Mobile").toLowerCase();
    let message;
    if (Mobile == "iphone") {
        message = "Excellent choice! iphone is always a favorite."
    } else if (Mobile == "Vivo") {
        message = "Vivo is Nice Mobile!"
    } else if (Mobile == "oppo") {
        message = "oppo is  a classic Phone!Best For Good Camera Lover."
    } else {
        message = "That sounds interesting! There are so many Mobiles to explore."
    }
    let statment = 'let Mobile = prompt("Enter Your Favorite Mobile").toUpperCase(); <br> Mobile = ' + Mobile + ''
    document.getElementById("Statement").innerHTML = statment;
    alert(message);
    document.getElementById("Output").innerHTML = message;
}


// Testing Sets Of Conditions
document.getElementById("Test").onclick = function () {
    let age = +prompt("Enter Your Age");
    let weight = +prompt("Enter Your weight");
    let health;
    if (age >= 20 && weight <= 70) {
        health = "You are a smart Gentleman.";
    } else if (age >= 18 && weight > 69) {
        health = "You are a fat boy.";
    } else if (age < 18 && weight > 50) {
        health = "You Are A motaa bhai"
    } else {
        health = "You are a baby boy.";
    }
    let statment = ' let age = +prompt("Enter Your Age") <br>  age = ' + age + ' <br> let weight = +prompt("Enter Your weight"); <br> weight = ' + weight + ' '
    document.getElementById("Statement").innerHTML = statment;
    alert(health);
    document.getElementById("Output").innerHTML = health;
}


// if Statement Nested
document.getElementById("ifstatement").onclick = function () {
    let age = +prompt("Enter your Age to check are you eligible to borrow a Car.");
    let massage;
    if (age >= 18) {
        massage = "You are old enough to borrow Car";
        // Check membership code.
        let isMember = +prompt("Enter you Five digit membership code.");

        if (isMember >= 100) {
            massage = "You are a member."
            // check Car name
            let CarAvailable = prompt("Enter the Car name buggatti , BMW , rollsroyes").toLowerCase();
            if (CarAvailable === "buggatti") {
                massage = "The buggatti Car is available. You can borrow it."
            } else if (CarAvailable === "BMW") {
                massage = "The BMW Caris available. You can borrow it."
            } else {
                massage = "Sorry, the Car is not available."
            }
        } else {
            massage = "You are not a member. Please sign up to borrow Car"
        }
    } else {
        massage = "You must be at least 18 years old to borrow Car."
    }
    alert(massage);
    document.getElementById("Output").innerHTML = massage;
    let statment = `Enter your Age to check are you eligible to borrow the Car or not.<br> Enter you Five digit membership code.  <br> Enter the Car name buggatti , BMW , rollsroyes `
    document.getElementById("Statement").innerHTML = statment;
}


// login
document.getElementById("login").onclick = function () {
    document.getElementById("Statement").innerHTML = "";
    document.getElementById("Output").innerHTML = "";
    let username = prompt("Enter Your username.")
    let loginusername = username;
    let massage
    if (loginusername !== "" && loginusername !== " " && username === loginusername) {
        let password = +prompt("Enter password (at least 8 characters):")
        if (password >= 99999) {
            massage = "You are authorized to access this page."
        } else {
            massage = "Please enter your password."
        }
    } else {
        massage = "Invalid username. Please enter your username again."
    }
    alert(massage)
    document.getElementById("Output").innerHTML = massage;
    let statment = 'Enter Your username <br> Enter password (at least 8 characters):'
    document.getElementById("Statement").innerHTML = statment;
}



// Clear Statement
document.getElementById("Clear-statment").onclick = function () {
    document.getElementById("Statement").innerHTML = "";
}
// Clear Output
document.getElementById("Clear-Output").onclick = function () {
    document.getElementById("Output").innerHTML = "";
}


