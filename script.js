//script file to use after body tag
var displayValue=(num)=>result.value+=num
// function displayValue(num){
//     // let result=document.querySelector("#result")
//     result.value+=num;
// }
var clearBox=()=>result.value=""
// function clearBox(){
//     result.value="0"
//     // document.querySelector("#result").value="0";
// }
var evaluateExpression=()=>result.value=eval(result.value)
// function evaluateExpression(){
//     // let res=document.querySelector("#result")
//     // let curent_value=res.value
//     // let result=eval(curent_value)
//     // res.value=result
//    // result.value=eval(result.value)
// }
var backSpace=()=>result.value=result.value.slice(0,-1)
// function backSpace(){
//     let res=document.querySelector("#result")
//     let curent_value=res.value
//     let result=curent_value.slice(0,-1)
//     res.value=result
// }