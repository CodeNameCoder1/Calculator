let numberone = [];
let numbertwo = [];
let operation = 0;
let operationsymbol = '';
let triger = 0;
let equals = 0;

/*Отключить возможность нажания на кнопки операций*/
function disabledOperations(){
    document.getElementById("plus").disabled = true;
    document.getElementById("qua").disabled = true;
    document.getElementById("sqrt").disabled = true;
    document.getElementById("minus").disabled = true;
    document.getElementById("mul").disabled = true;
    document.getElementById("div").disabled = true;
    document.getElementById("plus").disabled = true;
}

/*Включить возможность нажания на кнопки операций*/
function enabledOperations(){
    document.getElementById("plus").disabled = false;
    document.getElementById("qua").disabled = false;
    document.getElementById("sqrt").disabled = false;
    document.getElementById("minus").disabled = false;
    document.getElementById("mul").disabled = false;
    document.getElementById("div").disabled = false;
    document.getElementById("plus").disabled = false;
}

/*-Функции чисел-*/

/*Один*/
function one(){
    switch (triger) {
        case 0:
            numberone.push("1");
            console.log(numberone);
            document.getElementById("field").innerHTML = numberone.join('');
            break;
        case 1:
            numbertwo.push("1");
            console.log(numbertwo);
            document.getElementById("field").innerHTML = `${numberone.join('')} ${operationsymbol} ${numbertwo.join('')}`;
            break;
    }

}

/*Два*/
function two(){
    switch (triger) {
        case 0:
            numberone.push("2");
            console.log(numberone);
            document.getElementById("field").innerHTML = numberone.join('');
            break;
        case 1:
            numbertwo.push("2");
            console.log(numbertwo);
            document.getElementById("field").innerHTML = `${numberone.join('')} ${operationsymbol} ${numbertwo.join('')}`;
            break;
    }

}

/*Три*/
function three(){
    switch (triger) {
        case 0:
            numberone.push("3");
            console.log(numberone);
            document.getElementById("field").innerHTML = numberone.join('');
            break;
        case 1:
            numbertwo.push("3");
            console.log(numbertwo);
            document.getElementById("field").innerHTML = `${numberone.join('')} ${operationsymbol} ${numbertwo.join('')}`;
            break;
    }

}

/*Четыре*/
function four(){
    switch (triger) {
        case 0:
            numberone.push("4");
            console.log(numberone);
            document.getElementById("field").innerHTML = numberone.join('');
            break;
        case 1:
            numbertwo.push("4");
            console.log(numbertwo);
            document.getElementById("field").innerHTML = `${numberone.join('')} ${operationsymbol} ${numbertwo.join('')}`;
            break;
    }

}

/*Пять*/
function five(){
    switch (triger) {
        case 0:
            numberone.push("5");
            console.log(numberone);
            document.getElementById("field").innerHTML = numberone.join('');
            break;
        case 1:
            numbertwo.push("5");
            console.log(numbertwo);
            document.getElementById("field").innerHTML = `${numberone.join('')} ${operationsymbol} ${numbertwo.join('')}`;
            break;
    }

}

/*Шесть*/
function six(){
    switch (triger) {
        case 0:
            numberone.push("6");
            console.log(numberone);
            document.getElementById("field").innerHTML = numberone.join('');
            break;
        case 1:
            numbertwo.push("6");
            console.log(numbertwo);
            document.getElementById("field").innerHTML = `${numberone.join('')} ${operationsymbol} ${numbertwo.join('')}`;
            break;
    }

}

/*Семь*/
function seven(){
    switch (triger) {
        case 0:
            numberone.push("7");
            console.log(numberone);
            document.getElementById("field").innerHTML = numberone.join('');
            break;
        case 1:
            numbertwo.push("7");
            console.log(numbertwo);
            document.getElementById("field").innerHTML = `${numberone.join('')} ${operationsymbol} ${numbertwo.join('')}`;
            break;
    }

}

/*Восемь*/
function eight(){
    switch (triger) {
        case 0:
            numberone.push("8");
            console.log(numberone);
            document.getElementById("field").innerHTML = numberone.join('');
            break;
        case 1:
            numbertwo.push("8");
            console.log(numbertwo);
            document.getElementById("field").innerHTML = `${numberone.join('')} ${operationsymbol} ${numbertwo.join('')}`;
            break;
    }

}

/*Девять*/
function nine(){
    switch (triger) {
        case 0:
            numberone.push("9");
            console.log(numberone);
            document.getElementById("field").innerHTML = numberone.join('');
            break;
        case 1:
            numbertwo.push("9");
            console.log(numbertwo);
            document.getElementById("field").innerHTML = `${numberone.join('')} ${operationsymbol} ${numbertwo.join('')}`;
            break;
    }

}

/*Ноль*/
function zero(){
    switch (triger) {
        case 0:
            numberone.push("0");
            console.log(numberone);
            document.getElementById("field").innerHTML = numberone.join('');
            break;
        case 1:
            numbertwo.push("0");
            console.log(numbertwo);
            document.getElementById("field").innerHTML = `${numberone.join('')} ${operationsymbol} ${numbertwo.join('')}`;
            break;
    }

}

/*-Кнопки операций-*/

/*Запятая*/
function com(){
    switch (triger) {
        case 0:
            numberone.push(".");
            console.log(numberone);
            document.getElementById("field").innerHTML = numberone.join('');
            break;
        case 1:
            numbertwo.push(".");
            console.log(numbertwo);
            document.getElementById("field").innerHTML = `${numberone.join('')} ${operationsymbol} ${numbertwo.join('')}`;
            break;
    }

}

/*Смена знака*/
function pom(){
    switch (triger) {
        case 0:
            if(Number(numberone.join('')) > 0){
            numberone.unshift("-");
            console.log(numberone);
            document.getElementById("field").innerHTML = numberone.join('');
        } else {
            numberone.splice(0,1);
            console.log(numberone);
            document.getElementById("field").innerHTML = numberone.join('');
        }
            break;
        case 1:
            if(Number(numbertwo.join('')) > 0){
                numbertwo.unshift("-");
                console.log(numbertwo);
                document.getElementById("field").innerHTML = `${numberone.join('')} ${operationsymbol} ( ${numbertwo.join('')})`;
            } else {
                numbertwo.splice(0,1);
                console.log(numbertwo);
                document.getElementById("field").innerHTML = `${numberone.join('')} ${operationsymbol} ${numbertwo.join('')}`;
            }
    }

}

/*Очистить поле ввода*/
function del(){
    numbertwo =[];
    numberone = [];
    triger=0;
    document.getElementById("field").innerHTML = 0;
    enabledOperations();
}

/*Плюс*/
function plus(){
            operationsymbol = '+';
            document.getElementById("field").innerHTML = `${numberone.join('')} ${operationsymbol}`;
            operation = 1;
            triger = 1;
            disabledOperations();
}

/*Минус*/
function minus(){
    operationsymbol = '-';
    document.getElementById("field").innerHTML = `${numberone.join('')} ${operationsymbol}`;
    operation = 2;
    triger = 1;
    disabledOperations();
}

/*Умножение*/
function mul(){
    operationsymbol = '*';
    document.getElementById("field").innerHTML = `${numberone.join('')} ${operationsymbol}`;
    operation = 3;
    triger = 1;
    disabledOperations();
}

/*Деление*/
function div(){
    operationsymbol = '/';
    document.getElementById("field").innerHTML = `${numberone.join('')} ${operationsymbol}`;
    operation = 4;
    triger = 1;
    disabledOperations();
}

/*Корень*/
function sqrt(){
            numberone = numberone.join('');
            equals = Math.sqrt(Number(numberone));
            numberone = [];
            numberone.push(equals);
            triger = 0;
            document.getElementById("field").innerHTML = numberone;
            enabledOperations()
}

/*Квадрат*/
function qua(){
    numberone = numberone.join('');
    equals = Math.pow(Number(numberone), 2);
    numberone = [];
    numberone.push(equals);
    triger = 0;
    document.getElementById("field").innerHTML = numberone;
    enabledOperations()
}

/*Равно*/
function equ(){
    switch (operation) {
        case 1:
            numberone = numberone.join('');
            numbertwo = numbertwo.join('');
            equals = Number(numberone) + Number(numbertwo);
            numberone = [];
            numbertwo = [];
            numberone.push(equals);
            triger = 0;
            document.getElementById("field").innerHTML = numberone;
            enabledOperations()
            break;

        case 2:
            numberone = numberone.join('');
            numbertwo = numbertwo.join('');
            equals = Number(numberone) - Number(numbertwo);
            numberone = [];
            numbertwo = [];
            numberone.push(equals);
            triger = 0;
            document.getElementById("field").innerHTML = numberone;
            enabledOperations()
            break;

        case 3:
            numberone = numberone.join('');
            numbertwo = numbertwo.join('');
            equals = Number(numberone) * Number(numbertwo);
            numberone = [];
            numbertwo = [];
            numberone.push(equals);
            triger = 0;
            document.getElementById("field").innerHTML = numberone;
            enabledOperations()
            break;
        case 4:
            numberone = numberone.join('');
            numbertwo = numbertwo.join('');
            equals = Number(numberone) / Number(numbertwo);
            numberone = [];
            numbertwo = [];
            numberone.push(equals);
            triger = 0;
            document.getElementById("field").innerHTML = numberone;
            enabledOperations()
            break;
            
}
}