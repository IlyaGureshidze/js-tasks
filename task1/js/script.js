document.addEventListener('DOMContentLoaded',function(){
    var button = document.querySelector('button');
    var vowels = ['а','е','ё','и','о','у','ы','э','ю','я','a','e','i','o','q','u','y'];//Русские и латинские гласные
    var result = "";
    
    button.addEventListener('click',function(){
       var input = document.getElementById('string').value;
        result = "";
        for (i = 0; i < input.length; i++){
            var symbol = input.charAt(i).toLowerCase();
            if(vowels.indexOf(symbol) !== -1){
                result += input.charAt(i);
            }
        }
        console.log(result); 
    });
});