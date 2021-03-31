var  tempResultScreen = document.getElementById('temp-result-container');
var resultScreen = document.getElementById('result-container');

const numOpNum= new RegExp('^[0-9]+[\\*||\\/||\\+||\\-]{1}[0-9]*$');
const numOpOp= new RegExp('^[0-9]+[\\*||\\/||\\+||\\-||\\=]{2}$');

function equal(){
    var tempResult=getTempResultStr();
    var result=resultLoop(tempResult);
    resultScreen.innerText = result;
}
function appendNumberToScreen(number){
    tempResultScreen.innerText = getTempResultStr() + number;
}
function appendOperatorToScreen(operator){
    var tempResult=getTempResultStr();
    if(doubleOperatorHandler(tempResult,operator)=="error"){
        return;
    }
    if(numberOperatorNumberHandler(tempResult)){
        var result=resultLoop(tempResult);
        tempResultScreen.innerText = result+''+operator;
        // clear result screen 
        resultScreen.innerText="";
        return;
    }
    tempResultScreen.innerText = tempResult + operator;
}
function clearScreen(){
    tempResultScreen.innerText='';
    resultScreen.innerText='';
}
function backSpace(){
    var tempResultScreenTxt=getTempResultStr();
    var newResult= tempResultScreenTxt.slice(0,tempResultScreenTxt.length-1);
    tempResultScreen.innerText=newResult;
}
// helper functions
function getTempResultStr(){
    return tempResultScreen.innerText;
}
// operator helper functions
function numberOperatorNumberHandler(str){
    return numOpNum.test(str);
}
function doubleOperatorHandler(tempResult,operator){
    var tempStr=tempResult+''+operator;
    if(numOpOp.test(tempStr)){
        return 'error';
    }
}
function resultLoop(tempResult){   
    if(tempResult.includes('*')){
        var tempArr=tempResult.split('*');
        // console.log(tempArr);
        var result= parseInt(tempArr[0]) * parseInt(tempArr[1]);
    }
    else if(tempResult.includes('/')){
        var tempArr=tempResult.split('/');
        // console.log(tempArr);
        var result= parseInt(tempArr[0]) / parseInt(tempArr[1]);
    }
    else if(tempResult.includes('+')){
        var tempArr=tempResult.split('+');
        // console.log(tempArr);
        var result= parseInt(tempArr[0]) + parseInt(tempArr[1]);
    }
    else if(tempResult.includes('-')){
        var tempArr=tempResult.split('-');
        // console.log(tempArr);
        var result= parseInt(tempArr[0]) - parseInt(tempArr[1]);
    }
    return result;
}
//////////////////////////////////////////////////////////////////////////