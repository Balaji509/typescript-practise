type combinable = string | number;

type stringLiteral = 'as-number' | 'as-text';

type rollDice = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice(): rollDice  {
    return (Math.floor(Math.random() * 6) + 1) as rollDice;
  }

function addValues(variable1 : combinable, 
    variable2: combinable,
    resultConversion: stringLiteral ) {

    let results;

    if(typeof variable1 === 'number' && typeof variable2 === 'number' 
       || resultConversion === 'as-number') {

        results = +variable1 + +variable2;
    } else {
        results = variable1.toString() + variable2.toString();
    }

 }
 
 console.log(addValues(2,3,'as-number'));
 
 console.log(addValues('test','test2','as-string'));