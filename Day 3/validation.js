document.querySelector("button").addEventListener("click", function () {
  var mobile = document.getElementById("x1").value;
  var pin = document.getElementById("x2").value;
  var pan = document.getElementById("x3").value;

  var regepincode = /^[1-9][0-9][0-9][0-9][0-9][0-9]$/;
  var regmobile = /^[1-9][0-9]{9}$/;
  var regpan = /^([a-zA-z]){5}([0-9]{4})([a-zA-z])$/;

  if (!regmobile.test(mobile)) {
    document.querySelector("p").innerText = "Invalid Mobile Number ";
    document.querySelector("p").className = "alert alert-danger";
  } else if (!regepincode.test(pin)) {
    document.querySelector("p").innerText = "Invalid Pincode ";
    document.querySelector("p").className = "alert alert-danger";
  } else if (!regpan.test(pan)) {
    document.querySelector("p").innerText = "Invalid Pan Card Number ";
    document.querySelector("p").className = "alert alert-danger";
  } else {
    document.querySelector("p").innerText = "Valid";
    document.querySelector("p").className = "alert alert-success";
  }
});

/**
 *  /  / --> delimiter
 *  ^ --> Used to identify the fist char
 *  $ --> Used to identify the fist char
 *  1 char --> /^[]$/
 *  {9} --> Range
 *  () --> Stands for groups
 * */
