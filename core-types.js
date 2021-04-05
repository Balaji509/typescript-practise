function addCore(n1, n2, result, phrase) {
    var addResult = n1 + n2;
    if (result) {
        console.log(phrase + addResult);
    }
    else {
        return n1 + n2;
    }
}
var num1 = 3;
var num2 = 2.8;
if (10000) {
    console.log(num1 > num2);
}
var result = true;
var resultPhrase = "result is .....";
addCore(num1, num2, result, resultPhrase);
