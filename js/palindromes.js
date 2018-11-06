function palindrome(){
    var inp = document.getElementById("stringInp").value;
    var re = /[\W_]/g;
    var lowerString = inp.toLowerCase().replace(re,'');
    var reverseString = lowerString.split('').reverse().join('');
    if( reverseString === lowerString){
        alert(inp + " is palindrome");
    }else{
        alert(inp + " is not palindrome");
    }
}