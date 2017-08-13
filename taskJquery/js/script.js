$(document).ready(function() {
    var isEven = false;
    $('#number').on('input',function () {
       $('.block').html('');
       var count = $(this).val();       
       for (i = 1; i <= count; i++) {
          $('.block').append('<div>' + i + '</div>');
       }
    });
    $('#color').on('change',function(){
       var color = $(this).val();
       if(!isEven) {
          $('.block div').filter(':even').css('background',color);
          isEven = true;
       }
       else {
          $('.block div').filter(':odd').css('background',color);
          isEven = false;
       }
    });
});