document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('#button');
    button.addEventListener('click',function() {
        var input = document.querySelector('#input').value;
        fileNameChecker(input);
    });
});
function fileNameChecker(url) {
    if (url !== "" && url !== ".html") {
        if (url.indexOf('.html') !== -1) {
            console.log(true);
            return true;
        }
        else {
           console.log(false);
            return false; 
        }
    }
    else {
        console.log("Вы не ввели адрес файла или неправильно указали его имя!");
    }
}
