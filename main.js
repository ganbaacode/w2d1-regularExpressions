window.onload = () => {
    "use strict";
    mainFunc();
  };


function mainFunc() {
    "use strict";
    const form = document.getElementById("form");
    const password = document.getElementById("psw");
  
    const pwdErrMsg = document.getElementById("password-error-msg");
    const urlErrMsg = document.getElementById("url-error-msg");
  
    /*Regular Expression*/
    const passwordMatch = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{10,}$/;
  
    form.addEventListener("submit", checkValidation);
  
    function checkValidation(e) {
      e.preventDefault();
      let currentPwd = password.value;
  
      if (!currentPwd.match(passwordMatch)) {
        alert('Not Match')
      }

      if(currentPwd.match(passwordMatch)){
        alert("YESS ITS MATCH");
      }

      email.value = "";
      password.value = "";
      url.value = "";
      checkbox.checked = false;
    }
  }