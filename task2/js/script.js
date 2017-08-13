document.addEventListener('DOMContentLoaded',function(){
    var users = [
        {
         name: 'Александр Друзь',
         salary: 5000000
        },
        {
         name: 'Джейме Ланистер',
         salary: 500
        },
        {
         name: 'Илья Гурешидзе',
         salary: 2500
        },
        {
         name: 'Наруто',
         salary: 1500
        }
    ];
    findRichDaddy(users,1000);
});
function findRichDaddy(array,salary){
    var result = [];
    array.forEach(function(elem){
        if(elem.salary > salary){
            result.push(elem.name);
        }
    });
    console.log(result);
    return result;
}