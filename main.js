function madLib() {
    var nounOneInput = document.getElementById('noun-1');
    var nounTwoInput = document.getElementById('noun-2');
    var numberInput = document.getElementById('number');
    var verbInput = document.getElementById('verb');

    var nounOne = nounOneInput.value;
    var nounTwo = nounTwoInput.value;
    var number = numberInput.value;
    var verb = verbInput.value;

    var greeting = `When bootcamp is over, I'm going to have fun at ${nounOne}. What do you think I should have for a ${nounTwo}? How many ${number} do you think will ${verb}?`;

    var greeter = document.getElementById('greeter');
    greeter.textContent = greeting;
    
    console.log(greeting);
}