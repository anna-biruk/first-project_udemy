 let money, date;

 function start() {
     money = prompt("Ваш бюджет на месяц?", '');
     date = prompt('Введите дату в формате YYYY-MM-DD', "");

     while (isNaN(money) || money == "" || money == null) {
         money = prompt("Ваш бюджет на месяц?", '');
     }
 }
 start();
 var appDate = {
     budget: money,
     date: date,
     expenses: {},
     optionalExpenses: {},
     income: [],
     savings: true
 };


 //let questionOne = prompt("Введите обязательную статью расходов в этом месяце");
 //let questionTwo = prompt("Во сколько обойдется?");



 /*appDate.expenses[questionOne] = Number.parseInt(questionTwo);
 console.log(appDate);

 let budget=(appDate.money-appDate.expenses[questionOne])/30;
 alert("Бюджет на один день" +  budget);*/
 function ChooseExpenses() {
     for (let i = 0; i < 2; i++) {
         let questionOne = prompt("Введите обязательную статью расходов в этом месяце");
         let questionTwo = prompt("Во сколько обойдется?");


         if ((typeof (questionOne) == 'string') && (typeof (questionOne)) != null && (typeof (questionTwo)) != null &&
             questionOne != "" && questionTwo != "" && questionOne.length < 50) {
             console.log("done");
             appDate.expenses[questionOne] = questionTwo;
         } else {
             i = i - 1;
         }
     }
 }
 ChooseExpenses();

 function detectDayBudget() {
     appDate.MoneyPerDay = (appDate.budget / 30).toFixed();
     alert("Бюджет на один день " + appDate.MoneyPerDay);
 }
 detectDayBudget();

 function detectLevel() {
     if (appDate.MoneyPerDay < 100) {
         console.log("Минимальный бюджет");

     } else if (appDate.MoneyPerDay > 100 && appDate.MoneyPerDay < 2000) {
         console.log('Средний уровень достатка');

     } else if (appDate.MoneyPerDay > 2000) {
         console.log('Высокий уровень достатка');
     } else {
         console.log("Произошла ошибка");
     }
 }
 detectLevel();


 function checkSavings() {
     if (appDate.savings == true) {
         let save = +prompt('Какова сумма накоплений?'),
             percent = +prompt('Под какой процент?');

         appDate.monthIncome = save / 100 / 12 * percent;
         alert('Доход в месяц свашего депозита: ' + appDate.monthIncome);
     }
 }
 checkSavings();

 function chooseOptExpenses() {
     for (let i = 1; i <= 3; i++) {
         let quest = prompt("Статья необязательных расходов?",'');
         appDate.optionalExpenses[i] = quest;

     }

 }
 chooseOptExpenses();
 console.log(appDate);