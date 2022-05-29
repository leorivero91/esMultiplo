let num1 : number = prompt ("Ingrese el primer numero"));
let num2 : number = prompt ("Ingrese el segundo numero"));

function esMultiplo(num1: number,num2:number): boolean {
  return ((num1 % num2) ==0);
};

if(esMultiplo(num1,num2)){
  console.log(num1, "Es multiplo de :" , num2);
  } else {
   console.log(num1, "No es multiplo de :", num2);
  };
//Esta muy bien tu solucion
