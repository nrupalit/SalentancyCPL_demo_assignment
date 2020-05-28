
validateForm = () => {  
    let num = document.getElementById("phoneNumber").value; 
    let firstName = document.getElementById("firstName").value; 
    let lastNames = document.getElementById("lastName").value; 
    let city = document.getElementById("city").value; 
    let email = document.getElementById("email").value; 
    let zip = document.getElementById("zip").value; 
    let regex = {
        phoneNum: /^[0-9]{10}$/,
        name: /^[A-Za-z]+$/,
        email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/,
        zip: /^\d{6}$/
    }
    if (regex.phoneNum.test(num) == false || num == null || num == "" ){
        document.getElementById("errPhoneNumber").innerHTML = "Invalid Phone Number type 10 digit number"
        document.getElementById("errPhoneNumber").style.color ="#FF6347";
    } else {
        document.getElementById("errPhoneNumber").innerHTML = "Valid Number";
        document.getElementById("errPhoneNumber").style.color ="#008000";
    }
    if (regex.name.test(firstName) == false || firstName == null || firstName == "" ){
        document.getElementById("errFirstName").innerHTML ="Invalid Name type in charater";
        document.getElementById("errFirstName").style.color ="#FF6347";
    } else {
        document.getElementById("errFirstName").innerHTML ="Valid Name";
        document.getElementById("errFirstName").style.color ="#008000";
    }
    if (regex.name.test(lastNames) == false || lastNames == null || lastNames == "" ){
        document.getElementById("errLastName").innerHTML ="Invalid Last Name type in charater";
        document.getElementById("errLastName").style.color ="#FF6347";
    } else {
        document.getElementById("errLastName").innerHTML ="Valid Last Name";
        document.getElementById("errLastName").style.color ="#008000";
    }
    if (regex.name.test(city) == false || city == null || city == "" ){
        document.getElementById("errCity").innerHTML ="Invalid City Name type in charater";
        document.getElementById("errCity").style.color ="#FF6347";
    } else {
        document.getElementById("errCity").innerHTML ="Valid City";
        document.getElementById("errCity").style.color ="#008000";
    }
    if (regex.email.test(email) == false || email == null || email == "" ){
        document.getElementById("errEmail").innerHTML ="Invalid Email";
        document.getElementById("errEmail").style.color ="#FF6347";
    } else {
        document.getElementById("errEmail").innerHTML ="Valid Email";
        document.getElementById("errEmail").style.color ="#008000";
    }
    if (regex.zip.test(zip) == false || zip == null || zip == "" ){
        document.getElementById("errZIP").innerHTML ="Invalid Zip";
        document.getElementById("errZIP").style.color ="#FF6347";
    } else {
        document.getElementById("errZIP").innerHTML ="Valid Zip";
        document.getElementById("errZIP").style.color ="#008000";
    }


} 
