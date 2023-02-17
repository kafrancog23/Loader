function showPw() {
    let input = document.getElementById("input");
    let inputType = input.type;
    let inputValue = input.value;
    if (inputType == "password") {
      input.type = "text";
      input.value = inputValue;
    } else {
      input.type = "password";
      input.value = "";
    }
  }
  
