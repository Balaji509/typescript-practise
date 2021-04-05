const button = document.querySelector('button')!;
const input1 = document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById('num2')! as HTMLInputElement;

function addFun(num1:number ,num2:number){
    return num1 + num2
}

button.addEventListener("click", function(){
    console.log(addFun(+input1.value,+input2.value));
    console.log(input1.type);
});

