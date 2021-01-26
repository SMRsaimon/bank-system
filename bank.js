//  $ means quary selector

function $(selector) {
    return document.querySelector(selector);
}


// login validation 

$("#logInButton").addEventListener('click', function() {

    let email = $("#email").value;
    let password = $("#password").value;
    if (email == "" && password == "") {
        alert("Please Enter your Email and password : ")
    } else {

        let login = $("#loginArea");
        login.style.display = "none";

        let user = $("#userArea");
        user.style.display = "block";

    };
});



// clint site calculaton deposite 

$("#depositeBtn").addEventListener('click', function() {



    let previous = $("#depositeValue").innerText;
    previous = parseFloat(previous);
    let diposit = $("#depositeEnter").value;
    diposit = parseFloat(diposit);

    if (isNaN(diposit) || diposit == "") {
        alert("please enter Number Value only ")

    } else {
        let total = diposit + previous;
        $("#depositeValue").innerText = total;


        let mainBalance = $("#mainBalance").innerText;
        mainBalance = parseFloat(mainBalance);
        $("#mainBalance").innerText = diposit + mainBalance;
    }

    document.getElementById("depositeEnter").value = "";


})


// clint site calculaton withdro

$("#widrowBtn").addEventListener("click", function() {



    let previousWidrow = $("#previousWidrow").innerText;
    previousWidrow = parseFloat(previousWidrow)
    let widrow = $("#withdraw").value;
    widrow = parseFloat(widrow);

    if (isNaN(widrow) || widrow == "") {
        alert("please enter Number Value only ")
    } else {

        let totalWidrow = previousWidrow + widrow;
        $("#previousWidrow").innerText = totalWidrow;


        let mainBalance = $("#mainBalance").innerText;
        mainBalance = parseFloat(mainBalance)
        $("#mainBalance").innerText = mainBalance - widrow;

    }


    $("#withdraw").value = "";

})