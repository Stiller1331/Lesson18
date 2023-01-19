var firstMonth = prompt("Enter first month selary", '1');
var secondMonth = prompt("Enter second month selary", '2');
var twoMonth = +firstMonth + +secondMonth;
alert(`Your selary for 2 manth is: ${twoMonth}$ ` );
let bonus = twoMonth;
bonus++;
alert(`You have extra bonus! Your total selary was: ${twoMonth}$ It's increase for 1$ and now it is: ${bonus}$`);
var selary = (bonus >= 2000);
alert(`Will you work next? ${selary}`);
var firstMonth1 = prompt("Enter first month selary", '1');
var secondMonth1 = prompt("Enter second month selary", '2');
var twoMonth1 = +firstMonth1 + +secondMonth1;
alert(`Your selary for 2 manth is: ${twoMonth1}$ ` );
let bonusTwo = twoMonth1;
bonusTwo++;
alert(`You have extra bonus! Your total selary was: ${twoMonth1}$ It's increase for 1$ and now it is: ${bonusTwo}$`);
var selary1 = (bonusTwo >= 2000 || bonusTwo <  2000);
bonusTwo >= 2000 ? (
    alert("I'm ready to work") ) : 
    (
        bonusTwo <  2000,
        alert("I'm out") 

    );



