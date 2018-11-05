function palindrome(){
    var inp = document.getElementById("stringInp");
    var re = /[\W]_g;
    var lowerString = inp.toLowerCase().replace(re, '');
    var reverseString = lowerString.split('').reverse().join('');
    if( reverseString === lowerString){
        alert(inp + " is palindrome");
    }else{
        alert(inp + " is not palindrome");
    }
}