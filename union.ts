function additional(variable1 : string|number, variable2: string|number) {
   let result;

   if(typeof variable1 === "number" && typeof variable2 === "number"){
      result = variable1 + variable2;
   } else {
      result = variable1.toString() + variable2.toString();
   }

   return result;
}



console.log(additional(2,3));

console.log(additional('test',2));