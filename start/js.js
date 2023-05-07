const firstName = prompt("Напишите первое имя");
const secondName = prompt("Введите второе имя");
const randonName = Math.floor(Math.random() * 100);

if(randonName < 30 && firstName != null && secondName != null && firstName != "" && secondName != "") {
 alert(`Результат совместимости имен ${firstName} и ${secondName}: ${randonName}. Вы не подходите друг другу`)   
}else if(randonName >= 30 && randonName < 50 && firstName != null && secondName != null && firstName != "" && secondName != "") {
    alert(`Результат совместимости имен ${firstName} и ${secondName}: ${randonName} средний, шанса мало`)  
}else if(randonName >= 50 && randonName < 75 && firstName != null && secondName != null && firstName != "" && secondName != "") {
    alert(`Результат совместимости имен ${firstName} и ${secondName}: ${randonName}. Хорошая совместимость`) 
}else if(randonName >= 75 && firstName != null && secondName != null && firstName != "" && secondName != ""){
    alert(`Результат совместимости имен ${firstName} и ${secondName}: ${randonName}. Вы подходите друг другу`) 
}else{
    alert(`Что-то пошло не так`) 
}

