/*FIXIT: Реакция на отмену в prompt
Увеличить количество ответов на prompt(через toLowCase())
Добавить возможность проверки на ожирение и болезненную худобу
*/
let result = {};

function SJ(){
  alert("Здравствуйте, данное дополнение поможет Вам подсчить дневную норму ккал по формуле Сан - Жеора!");
  alert("Для этого, введите пожалуйста данные, в соответствии с запрашиваемыми");
  let sex = prompt("Вы мужчина или женщина?");
  if (sex == "Мужчина") {
    result.sumResult = true;
    Male();
   }
  else {result.sumResult = false;
    Female();
  };
}

function Male(){
  let weigth = prompt("Ваш вес в килограммах(например 65)", );
  let heigth = prompt("Ваш рост в сантиметрах(Например 170)", );
  let age = prompt("Ваш возраст в годах(Например 30)");
  var endMale = (10*weigth)+ (6.25*heigth)-(5*age)+5;
  result.maleResult = endMale;
  alert(`Таким образом, для нормального функционирования организма в состоянии покоя Вам потребуется ${endMale} калл`);
  Activity();
  
}

function Female(){
  let weigth = prompt("Ваш вес в килограммах(например 65)", );
  let heigth = prompt("Ваш рост в сантиметрах(Например 170)", );
  let age = prompt("Ваш возраст в годах(Например 30)");
  let end = (10*weigth)+ (6.25*heigth)-(5*age)-161;
  result.femaleResult = end;
  alert(`Таким образом, для нормального функционирования организма в состоянии покоя Вам потребуется ${end} калл`);
 Activity();
  
}

function Activity(){
  alert("Выберите пожалуйста степень Вашей активности:");
  let activity = prompt(`Если у вас нет физических нагрузок и сидячая работа, умножьте полученный результат на 1,2.
  Если вы совершаете небольшие пробежки или делаете легкую гимнастику 1–3 раза в неделю, умножьте на 1,375.
  Если вы занимаетесь спортом со средними нагрузками 3–5 раз в неделю, умножьте количество калорий на 1,55.
  Если вы полноценно тренируетесь 6–7 раз в неделю, то вам необходимо умножить результат на 1,725.
  И наконец, если ваша работа связана с физическим трудом, вы тренируетесь 2 раза в день и включаете в программу тренировок силовые упражнения, ваш коэффициент будет равен 1,9.`, "Введите Ваш коэффициент");
  let sum;
  if(result.sumResult == true) sum = activity * result.maleResult;
  else { sum = activity * result.femaleResult};
  alert(`С учетом всего, Вам требуется ${Math.round(sum)} ккал для поддержания своего веса.
  Если же Вы желаете похудеть медленно и безопасно - ${Math.round(sum - 250)} ккал.
  В случае необходимости в быстрой потере веса - ${Math.round(sum - 500)} ккал.
  Надеемся, Вы остались довольны работы нашей программы!`);
  let question = prompt("Желаете ли еще раз воспользоваться формулой Миффлина Сан-Жеора прямо сейчас?", "Да или нет");
  if (question == "Да") SJ();
}

SJ();