function madLib() {
    var nounOneInput = document.getElementById('noun-1');
    // var nounTwoInput = document.getElementById('noun-2');
    // var numberInput = document.getElementById('number');
    // var verbInput = document.getElementById('verb');

    var nounOne = nounOneInput.value;
    // var nounTwo = nounTwoInput.value;
    // var number = numberInput.value;
    // var verb = verbInput.value;

    // nounOne.className = 'input';
    // var bool = nounOne.hasAttribute('class');
    // console.log(bool);

    // var greeting = 'When bootcamp is over, I am going to have fun at ' + '<span class="input">' + nounOne + '</span>' + '. What do you think I should have for a ' + nounTwo + '? How many ' + number + ' do you think will ' + verb + '?';
    
    // var greeting = `When bootcamp is over, I am going to have fun at <span class="input"> ${nounOne} </span>`;

    var greeter = document.getElementById('greeter');
    // greeter.textContent = greeting;
    greeter.innerHTML = 'the cow jumped over the <strong>' + nounOne + '</strong>.';

    // `When bootcamp is over, I am going to have fun at <span class="input"> ${nounOne} </span>`;
    
}