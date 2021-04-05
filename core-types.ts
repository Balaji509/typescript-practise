function addCore(n1:number, n2:number,result:boolean, phrase:string){

    const addResult = n1+n2;

    if(result) {
        console.log(phrase+addResult);
    } else {
        return n1+n2;
    }

}



let num1 = 3;
const num2 = 2.8;

if(10000){
    console.log( num1 > num2);
}



const result = true;
const resultPhrase = "result is .....";

addCore(num1,num2,result,resultPhrase);

