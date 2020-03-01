var money = prompt("Ваш бюджет на месяц?");
var date = 'Введите дату в формате YYYY-MM-DD';
var appDate = {
    money:Number.parseInt(money),
    date: date,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings:false
};


let questionOne = prompt("Введите обязательную статью расходов в этом месяце");
let questionTwo = prompt("Во сколько обойдется?");

console.log (questionOne);
console.log (questionTwo);

appDate.expenses[questionOne] = Number.parseInt(questionTwo);
console.log(appDate);

let budget=(appDate.money-appDate.expenses[questionOne])/30;
alert("Бюджет на один день" +  budget);