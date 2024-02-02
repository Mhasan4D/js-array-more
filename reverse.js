//  reverse   shortcut method
const numbers=[1,2,3,4,5,6,7,]
  
//  console.log(numbers);

//  numbers.reverse()
//  console.log(numbers);



// menual method e reverse by---- for of 
const rev_numbers=[];

for(const num of numbers){

    rev_numbers.unshift(num);
}

//   console.log(rev_numbers);



// for loop--------->
const revered_numbers=[];

for(let i=0;i<numbers.length;i++){

    const num = numbers[i];
    revered_numbers.unshift(num);

}
// console.log(revered_numbers);





//  Optionnal method 
const rev_rev_numbers=[];
for(let i= numbers.length-1; i>=0; i--){

     const num = numbers[i];
     console.log(num);
     rev_rev_numbers.push(num);

     
}

console.log(rev_rev_numbers);

