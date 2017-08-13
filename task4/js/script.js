document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('#button');
    button.addEventListener('click',function() {
        var input = document.querySelector('#input').value;
        var result = [];
        var inputArray = input.split(',');
        inputArray.forEach(function(elem){
          if (isEvenChecker(elem.trim())) {
              result.push(elem.trim());
          }  
        });
        console.log(result);
    });
});
function isEvenChecker(number) {
   if (!(+(number) % 2)) return true;
   else return false;
}
