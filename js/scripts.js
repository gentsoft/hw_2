//задание 1

let first_name,
    age,
    city,
    phone,
    company;

first_name = prompt ('ваше имя');
age = prompt ('ваш возраст');
city = prompt ('ваш город проживания');
phone = prompt ('ваш номер телефона');
company = prompt ('ваше место работы');

document.write ('задание 1',
                '<br/>Меня зовут ',first_name,
                '<br/>мне ',age,' лет',
                '<br/>Я проживаю в городе ',city,
                '<br/>и работаю в компании ',company,
                '<br/>Мои контактные донные: ', phone, '<br/><br/>');

//задание 2

let age_year = 2022 - age;

document.write ('задание 2',
                '<br/>', first_name,
                '<br/>родился ',age_year);


//задание 3

let sixDigit;

sixDigit = '123322';

if ((Number(sixDigit[0]) + Number(sixDigit[1]) + Number(sixDigit[2])) == (Number(sixDigit[3]) + Number(sixDigit[4]) + Number(sixDigit[5])))
    {
    console.log('да')
    }else
    {
    console.log('нет')
    }

//задание 4

let a;

a = -3;

if (a > 0)
    {
    console.log('верно')
    }else
    {
    console.log('неверно')
    }

//задание 5

let b;

a = 10;
b = 2;

console.log('сумма', (a + b));
console.log('разность',(a - b));
console.log('произведение', (a * b));
console.log('частное', (a / b));
if ((a + b) > 1)
    {
    console.log('сумма в квадрате', Math.pow((a + b), 2))
    }

//задание 6

if ((a > 2 && a < 11) || (b >= 6 && b < 14))
    {
    console.log('верно')
    }else
    {
    console.log('неверно')
    }
    
//задание 7

let n;

n = 46;

switch (true)
    {
    case (n > 0 && n <=15):
        console.log('1-я четверть чяса');
    break;
    
    case (n > 15 && n <= 30):
        console.log('2-я четверть чяса');
    break;

    case (n > 30 && n <= 45):
        console.log('3-я четверть чяса');
    break;

    case (n > 45 && n < 60):
        console.log('4-я четверть чяса');
    break;
    }

//задание 8

let day;

day = 31;

switch (true)
    {
    case (day >= 1 && day <=10):
        console.log('1-я декада');
    break;
    
    case (day >= 11 && day <= 20):
        console.log('2-я декада');
    break;

    case (day >= 21 && day <= 31):
        console.log('3-я декада');
    break;
    }

//задание 9

let month,
    week,
    hour,
    minute,
    second;

day = 100;

if (day >= 365)
    {
    console.log('в годах: ', (day / 365) )
    }else
    {
    console.log('Меньше года')
    }
    
if (day >= 31)
    {
    console.log('в месяцах: ', (day / 31) )
    }else
    {
    console.log('Меньше месяца')
    }

if (day >= 7)
    {
    console.log('в неделях: ', (day / 7) )
    }else
    {
    console.log('Меньше недели')
    }

if (day > (1 / 24))
    {
    console.log('в часах: ', (day * 24) )
    }else
    {
    console.log('Меньше часа')
    }

    if (day > (1 / (24 * 60)))
    {
    console.log('в минутах: ', (day * 24 * 60) )
    }else
    {
    console.log('Меньше минуты')
    }

if (day > (1 / (24 * 60 * 60)))
    {
    console.log('в секундах: ', (day * 24 * 60 * 60) )
    }else
    {
    console.log('Меньше секунды')
    }

    //задание 10

    day = 333;

switch (true)
    {
    case ((day >= 1 && day <=62) || (day >=325  && day <=356)):
        console.log('зима');
    break;
    
    case (day >= 63 && day <= 151):
        console.log('весна');
    break;

    case (day >= 152 && day <= 244):
        console.log('лето');
    break;

    case (day >= 245 && day <= 324):
        console.log('осень');
    break;
    }

switch (true)
    {
        
    case (day >=325  && day <=356):
        console.log('12-й месяц года');
    break;

    case (day >= 1 && day <=31):
        console.log('1-й месяц года');
    break;

    case (day >= 32 && day <=62):
        console.log('2-й месяц года');
    break;

    case (day >= 63 && day <=94):
        console.log('3-й месяц года');
    break;

    case (day >= 95 && day <=126):
        console.log('4-й месяц года');
    break;

    case (day >=127  && day <=151):
        console.log('5-й месяц года');
    break;

    case (day >= 152 && day <=183):
        console.log('6-й месяц года');
    break;

    case (day >= 184 && day <=212):
        console.log('7-й месяц года');
    break;

    case (day >=213  && day <=244):
        console.log('8-й месяц года');
    break;

    case (day >= 245 && day <=273):
        console.log('9-й месяц года');
    break;

    case (day >= 274 && day <=257):
        console.log('10-й месяц года');
    break;

    case (day >=258  && day <=325):
        console.log('11-й месяц года');
    break;

    default:
        console.log('не в этом году')
    }