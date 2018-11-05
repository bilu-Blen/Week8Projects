function fizzBuzz(n){
    while(isNaN(n))
    n= parseInt(prompt("Enter a number"))
    for(var i= 1; i<=n; i++){
        if(i%3 == 0 && i % 5== 0){
            document.write("FizzBuzz" + "<br />");
            // console.log("FizzBuzz");
        }else if(i%3==0){
            document.write("Fizz" + "<br />");
            // console.log("Fizz");
        }else if(i%5==0){
            document.write("Buzz" + "<br />");
            // console.log("Buzz");
        }else{
            document.write(i + "<br />");

            // console.log(i);
        }
    }
}