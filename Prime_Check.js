function checkPrime(question){

let count=0;
for  (let i = 1 ; i <= question ; i++ ){
    if (question%I===0){
        count++;
    }
}

if (count===2){
    console.log(question, "Is a Prime Number");
}else {
 console.log(question, " Is not a prime Number")   
}
}

checkPrime(19);