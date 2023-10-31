/*
  1. object properties reassign
  2. object entries delete
  3. object in keyword
  4. question resolving
*/

// for lecture
/*
  - everything about Array

  - everything about Date contractor

  - what is function
  - what is parameters in function
  - what is return keyword in function
  - how to call a function
  - how to give arguments to a function

  //////////////////////////////////- everything about switch statement

  - while loop
  - do while loop
  //////////////////////////////////////////- for of loop

  - what is scop
  - what scop lookup
  - what is hoisting (logic behind it)
  - hoisting things
  - difference in var let const

  - what is DOM
  - get elements from DOM 
  - add elements in DOM 
  - remove elements from DOM 
  - what is eventlistener 
  - add or remove classes for DOM elements 

  ////////////////////////////////////////////////////// ! mandatory
  1- what is object     
  2- object syntax
  3- object key
  4- object values
  5- object entries
  6- object methods
  7- object methods syntax
  8- object keys reassign
  9- object delete entries
  10- object access keys dynamically
........................................................................*/
                                 /*  i done this topics 

- what is object
Q1  what is object =  There is only one type of  ( non premitive ) data type is called object .
Q2= object syntax is let name = { property1 :"value "} ///// property name may be an identifier .
    
  
Q3 =  IN  objest we set  2 value property  / each object value must have a key.  
Q4 =  IN  objest we set  1 key       key/property   is property name identifer  .

Q5 object entries =  when we combine key and value both are called entries .*/
 //Q6 Object Method  = koi bhi function jo j.s ma object ky sath connect ho usy hm function kahy gy  



//Q7 object methods =
/*  let example = { 
  student_name : "Mustafa",
  hello : function(){
   console.log( `how are you ${this.student_name}`);
}
}
example.hello(  )

*/


// Q8 object key reasign 

/*  example.student_name = "mustafa pervaiz"


example.hello(  )   */
// 9  object delete entries

/* let dltentry = {
  student_name : "Mustafa pervaiz",
  Teacher_name : "Mustafa pervaiz",
  Batch : "Batch 9",
  Institute_branch :"Bahadurabad Main Campus",
}
delete dltentry.Batch

*/

//  10- object access keys dynamically

//                                                    Loops 
   
// for loop most comon use  

let num = 4 
for(let i = 1 ; i <= 10 ; i++){ //first hm var declare 2 step condition 3 step is increase or decrease value
console.log(`${num} * ${i} = ${num*i}`);
} 

// while loop 
let nums = 1
let tab = 5
while( nums <= 10){ // var bhr declare hoga round bracket ma just condition lgy gi increament bad ma hoga 
console.log(`${tab} * ${nums} = ${tab*nums}`);
nums++
}

// do while   ya pahly chalta hy first time phir statement check krta hy 


let o = 10
let d = 1
do{console.log(`${o} * ${d} = ${o*d}`)
d++
} while(d <=10)
