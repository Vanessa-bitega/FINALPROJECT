
function printCompany() {
 document.getElementById('outputCompany').innerHTML=  inputCompany.value + ' Company';

}


function printMessage() {
    var companyMessage = document.getElementById('inputMessage').value;
    document.getElementById('outputMessage').innerHTML= companyMessage;

}
function borderRadius() {
    var Shape = document.getElementById('border-radius').value;
    document.getElementById('card').style.borderRadius=Shape;

}
function backgroundColor() {
    var mycolor = document.getElementById('inputBackground').value;
    document.getElementById('card').style.backgroundColor=mycolor;

}
function TextColor() {
    var mcolor = document.getElementById('inputtext').value;
    document.getElementById('card').style.color=mcolor;

}
function textAlign3() {
    var myText = document.getElementById('btn3').value;
    document.getElementById('card').style.textAlign=myText;

}
function textAlign1() {
    var myText = document.getElementById('btn1').value;
    document.getElementById('card').style.textAlign=myText;

}
function textAlign2() {
    var myText = document.getElementById('btn2').value;
    document.getElementById('card').style.textAlign=myText;

}

function printJob() {
    var Job = document.getElementById('inputJobTitle').value;
    document.getElementById('outputJob').innerHTML= 'Job Title: ' + Job;

}
function printName() {
    var Name = document.getElementById('inputName').value;
    document.getElementById('outputName').innerHTML= Name;

}

function printPhone() {
    var Phone = document.getElementById('inputPhone').value;
    document.getElementById('outputPhone').innerHTML='Tel: '+ Phone;

}
function printEmail() {
    var Email = document.getElementById('inputEmail').value;
    document.getElementById('outputEmail').innerHTML= 'Email: '+ Email;

}
function printCard(){
    window.print();
}
function changeBorderRadius(evt){
    console.log(evt);
    const value = evt.target.value;
    const maxRadius = 50;
    const radius = maxRadius * value/100;

    document.getElementById('card').style.borderRadius= `${radius}px`;
    console.log(value);
}
function formReset(){
    window.location.reload();
}