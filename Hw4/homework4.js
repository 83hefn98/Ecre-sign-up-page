/*
Name: Saul Garcia
Name of file: homework4.js 
Date Created: 2/3/2023 
Date last edited: 5/7/2023
Description: This javascript file is to handle returning user inputted data from the form when clicking the review button,
             validating user inputted data on the fly, and preventing submission of form until all fields are valid.
             Additionally, handles cookies for the name of returning users.
*/

var user_flag = 1;
var pssw_flag = 1;
var confpass_flag = 1;

var email_flag = 1;
var fname_flag = 1;
var mname_flag = 0;
var lname_flag = 1;

var ssn_flag = 1;
var date_flag = 1;
var state_flag = 1;
var city_flag = 1;
var zip_flag = 1;
var addr1_flag = 1;
var addr2_flag = 0;

var cookie_flag = 0;

function getform() {
    var formcontents = document.getElementById("signup");
    var formoutput;
    var dtype;
    var i;

    for (i = 0; i < formcontents.length; i++) {
        if (formcontents.elements[i].value !="") {
            if (i==0) {
                formoutput = " <h3 align='center'>Please review the information you entered below:</h3><br> <table class='returndata' align='center' width='300' height='250'><th>Field</th><th>Value</th>";
            }
            dtype = formcontents.elements[i].type;
            
            switch (dtype) {
                case "checkbox":
                    if (formcontents.elements[i].checked) {
                        formoutput = formoutput + "<tr><td align='center'>"+ formcontents.elements[i].name +"</td>";
                        formoutput = formoutput + "<td align='center'>Y</td></tr>";
                    }
                break;
                case "radio":
                    if (formcontents.elements[i].checked) {
                        formoutput = formoutput + "<tr><td align='center'>"+ formcontents.elements[i].name +"</td>";
                        formoutput = formoutput + "<td align='center'>"+ formcontents.elements[i].value +"</td></tr>";
                    }
                break;
                case "button": break;
                case "submit": break;
                case "reset": break;
                default:
                    formoutput = formoutput + "<tr><td align='center'>"+ formcontents.elements[i].name +"</td>";
                    formoutput = formoutput + "<td align='center'>"+ formcontents.elements[i].value +"</td></tr>";
            }
        }
    }
    if (formoutput.length >0) { 
        formoutput = formoutput + "</table>";
        document.getElementById("returndata").innerHTML = formoutput;
    }
}

function resetdata() {
    document.getElementById("returndata").innerHTML = "";  
}


// JAVASCRIPT FUNCTIONS FOR ON-THE-FLY FIELD VALIDATION 

function user_valid() {
    var user = document.getElementById("user");
    var user_text = document.getElementById("user_text");
    var pattern = /^[a-zA-Z0-9_-]{5,}$/g 

    if(user.value.match(pattern)) {  
        user_text.classList.remove("invalid");
        user_text.classList.add("valid");
        user_flag =0;
      } 
      else {
        user_text.classList.remove("valid");
        user_text.classList.add("invalid");
        user_flag =1;
      }
      checkstate();
      console.log(checkstate());
}

function pass_valid() {
    var passw = document.getElementById("pass");
    var pass_text = document.getElementById("pass_text");
    var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}/g 

    if(passw.value.match(pattern)) {  
        pass_text.classList.remove("invalid");
        pass_text.classList.add("valid");
        pssw_flag =0;
      } 
      else {
        pass_text.classList.remove("valid");
        pass_text.classList.add("invalid");
        pssw_flag =1;
      }
      pass_match();
      checkstate();
      console.log(checkstate());
}

function pass_match() {
    var passw = document.getElementById("pass");
    var confpass = document.getElementById("confpass");
    var confpass_text = document.getElementById("confpass_text");

    if(passw.value == confpass.value) {
        confpass_text.classList.remove("invalid");
        confpass_text.classList.add("valid");
        confpass_flag =0;
    } 
    else {
        confpass_text.classList.remove("valid");
        confpass_text.classList.add("invalid");
        confpass_flag =1;
    } 
    checkstate();
    console.log(checkstate());
}

function email_valid() {
    var email = document.getElementById("email");
    var email_text = document.getElementById("email_text");
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

    if(email.value.match(pattern)){
        email_text.classList.remove("invalid");
        email_text.classList.add("valid");
        email_flag =0;
    }
    else{
        email_text.classList.remove("valid");
        email_text.classList.add("invalid");
        email_flag =1;
    } 
    checkstate();
    console.log(checkstate());
}


function fname_valid() {
    var fname = document.getElementById("fname");
    var fname_text = document.getElementById("fname_text");
    var pattern = /^[a-zA-Z'-]{1,}$/g;

    if(fname.value.match(pattern)){
        fname_text.classList.remove("invalid");
        fname_text.classList.add("valid");
        fname_flag = 0;
    }
    else{
        fname_text.classList.remove("valid");
        fname_text.classList.add("invalid");
        fname_flag =1;
    }
    checkstate();
    console.log(checkstate());
}

function mname_valid() {
    var mname = document.getElementById("mname");
    var mname_text = document.getElementById("mname_text");
    var pattern = /^[a-zA-Z]{1,1}$/g;
    if(mname.value != ''){
        if(mname.value.match(pattern)){
            mname_text.classList.remove("invalid");
            mname_text.classList.add("valid");
            mname_flag =0;
        }
        else{
            mname_text.classList.remove("valid");
            mname_text.classList.add("invalid");
            mname_flag =1;
        } 
    }
    else{
        mname_text.classList.remove("valid");
        mname_text.classList.remove("invalid");
        mname_flag =0;
    }
    checkstate();
    console.log(checkstate());
}

function lname_valid() {
    var lname = document.getElementById("lname");
    var lname_text = document.getElementById("lname_text");
    var pattern = /^[a-zA-Z2-5'-]{1,}$/g;

    if(lname.value.match(pattern)){
        lname_text.classList.remove("invalid");
        lname_text.classList.add("valid");
        lname_flag = 0;
    }
    else{
        lname_text.classList.remove("valid");
        lname_text.classList.add("invalid");
        lname_flag =1;
    }
    checkstate();
    console.log(checkstate());
}

function ssn_valid() {
    var ssn = document.getElementById("ssn");
    var ssn_text = document.getElementById("ssn_text");
    var pattern = /^[0-9]{9,}$/g;

    if(ssn.value.match(pattern)){
        ssn_text.classList.remove("invalid");
        ssn_text.classList.add("valid");
        ssn_flag =0;
    }
    else{
        ssn_text.classList.remove("valid");
        ssn_text.classList.add("invalid");
        ssn_flag =1;
    }
    checkstate();
    console.log(checkstate());
}

function date_valid() {
    var date = document.getElementById("dob");
    var date_text = document.getElementById("date_text");
    var pattern = /((0[1-9]|1[0-2])\/((0|1)[0-9]|2[0-9]|3[0-1])\/((19|20)\d\d))$/g;

    if(date.value.match(pattern)){
        date_text.classList.remove("invalid");
        date_text.classList.add("valid");
        date_flag = 0;
    }
    else{
        date_text.classList.remove("valid");
        date_text.classList.add("invalid");
        date_flag =1;
    }
    checkstate();
    console.log(checkstate());
}

function state_valid() {
    var state = document.getElementById("state");
    var state_text = document.getElementById("state_text");

    if(state.value != ""){
        state_text.classList.remove("invalid");
        state_text.classList.add("valid");
        state_flag =0;
    }
    else{
        state_text.classList.remove("valid");
        state_text.classList.add("invalid");
        state_flag =1;
    }
    checkstate();
    console.log(checkstate());
}
   
function city_valid() {
    var city = document.getElementById("city");
    var city_text = document.getElementById("city_text");
    var pattern = /^[a-zA-Z]{2,}$/g;

    if(city.value.match(pattern)){
        city_text.classList.remove("invalid");
        city_text.classList.add("valid");
        city_flag =0;
    }
    else{
        city_text.classList.remove("valid");
        city_text.classList.add("invalid");
        city_flag =1;
    }
    checkstate();
    console.log(checkstate());
}

function zip_valid() {
    var zip = document.getElementById("zip");
    var zip_text = document.getElementById("zip_text");
    var pattern = /^[0-9-]{5,}$/g;

    if(zip.value.match(pattern)){
        zip_text.classList.remove("invalid");
        zip_text.classList.add("valid");
        zip_flag =0;
    }
    else{
        zip_text.classList.remove("valid");
        zip_text.classList.add("invalid");
        zip_flag =1;
    }
    checkstate();
    console.log(checkstate());
}

function addr1_valid() {
    var addr1 = document.getElementById("addr1");
    var addr1_text = document.getElementById("addr1_text");
    var pattern = /^[a-zA-Z0-9 ]{2,}$/g;

    if(addr1.value.match(pattern)){
        addr1_text.classList.remove("invalid");
        addr1_text.classList.add("valid");
        addr1_flag =0;
    }
    else{
        addr1_text.classList.remove("valid");
        addr1_text.classList.add("invalid");
        addr1_flag =1;
    }
    checkstate();
    console.log(checkstate());
}

function addr2_valid() {
    var addr2 = document.getElementById("addr2");
    var addr2_text = document.getElementById("addr2_text");
    var pattern = /^[a-zA-Z0-9 ]{2,}$/g;

    if(addr2.value !=''){
        if(addr2.value.match(pattern)){
            addr2_text.classList.remove("invalid");
            addr2_text.classList.add("valid");
            addr2_flag =0;
        }
        else{
            addr2_text.classList.remove("valid");
            addr2_text.classList.add("invalid");
            addr2_flag =1;
        }   
    }
    else{
        addr2_text.classList.remove("valid");
        addr2_text.classList.remove("invalid");
        addr2_flag =0;
    }
    checkstate();
    console.log(checkstate());
}


// TEST FOR ALLOWING SUBMISSION AFTER CHECKING EACH FIELD 

function checkstate(){
    if(user_flag+pssw_flag+confpass_flag+email_flag+fname_flag+mname_flag+lname_flag+ssn_flag+date_flag+state_flag+city_flag+zip_flag+addr1_flag+addr2_flag == 0){
        document.getElementById("submit").disabled = false;
    }
    else {
        document.getElementById("submit").disabled = true;
    }

}

// ALL OF NEXT SECTION FOR HANDLING COOKIES

function setCookie(cname, cvalue, time) {
    const d = new Date();
    d.setTime(d.getTime() + time);
    let expires = "expires"+ d.toUTCString();
    document.cookie = cname+ "=" +cvalue+ ";" +expires;

}

function getCookie(cname) {
    let name = cname+ "=";
    let ca = document.cookie.split(';');
    for (let i=0; i< ca.length; i++) {
        let c= ca[i];
        while (c.charAt(0)==' ') {
            c= c.substring(1);
        }
        if (c.indexOf(name)==0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


// check cookie IF ALLOWED
function checkCookie() {
    let username = getCookie('name');
    if (username != ""){
        document.getElementById("welcometxt").innerHTML= "<br> Welcome back: "+ username + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <a href='homework4.html' onclick='killCookie()'><small>not " +username+ "?<small></a>";
    }
}

// on confirm submit -- create cookie IF ALLOWED
function createCookie() {
    if (cookie_flag ==1) {     //only if clicked "Allow" at beginning
        setCookie('name', document.getElementById('fname').value, 3*24*60*60*1000);    //cookie will expire in 3 days
    }
}

// FUNCTIONS PERTAINING TO MODAL BOX AND COOKIE CONSENT
function consentCookie() {
    var modal = document.getElementById("myModal");  // bring up modal box
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("myModal"); // if clicked "Dont allow / X"
    modal.style.display = "none";
}

function killCookie() {
    setCookie('name', "", 0); 
}


function allowCookie() {
    var modal = document.getElementById("myModal");  // if clicked "Allow"
    let username = getCookie('name');

    cookie_flag = 1;
    checkCookie();
    document.getElementById("fname").value = username;
    
    modal.style.display = "none"
}