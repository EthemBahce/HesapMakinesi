window.onload = function(){

  


 const numbers = document.querySelectorAll('.num');
 let selectedOperator = ''; 
 let leftPart='';
 let rightPart = '';

 console.log(leftPart);

 for (let i = 0; i<numbers.length; i++){
     numbers[i].addEventListener("click",function(){
         

    document.getElementById('resultInner').innerHTML = document.getElementById('resultInner').innerHTML + this.value;
    if(selectedOperator == ''){

        leftPart = leftPart + numbers[i].value;
        
    }
    

    if (selectedOperator != '') {

        rightPart = rightPart + numbers[i].value;
        
    }


     },false)
 }

 const operators = document.querySelectorAll('.operator');
 for (let i = 0; i<operators.length; i++){

    operators[i].addEventListener("click",function(){

        document.getElementById('resultInner').innerHTML = document.getElementById('resultInner').innerHTML + operators[i].value;
        selectedOperator = operators[i].value;
        
    },false)
}




 document.getElementById("equation").addEventListener("click", function(){

    if (selectedOperator == '+') {
        
        document.getElementById('resultInner').innerHTML = parseInt(leftPart) + parseInt(rightPart);
    }
    else if (selectedOperator == '-') {
        document.getElementById('resultInner').innerHTML = parseInt(leftPart)- parseInt(rightPart);
    }
    else if (selectedOperator == '*') {
        document.getElementById('resultInner').innerHTML = parseInt(leftPart) * parseInt(rightPart);
    }
    else if (selectedOperator == '/') {
        document.getElementById('resultInner').innerHTML = parseInt(leftPart) / parseInt(rightPart);
    }

        
    
    

 },false);





 document.getElementById("delete").addEventListener("click", function(){

    
     selectedOperator = ''; 
     leftPart='';
     rightPart = '';
     document.getElementById('resultInner').innerHTML = '';
     
 },false);


}