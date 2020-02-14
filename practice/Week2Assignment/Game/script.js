window.onload = function () {
  let showNumberBtn = document.querySelector('#showNumber');
  let numDigitsSpan = document.querySelector('#numDigits');
  let toRemember = document.querySelector('#toRemember');
  let numSeconds = document.querySelector('#numSeconds');
  let entryTextbox=document.querySelector('#entryTextbox');
  let submitBtn=document.querySelector('#submit');


  let digitsArray = [];


  showNumberBtn.addEventListener('click', showTheNumbers);
  submitBtn.addEventListener('click', checkTheValues);

  //THe function below is from the MDN site
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }

  function showTheNumbers() {
    let count = document.querySelector('#count').value;
    console.log("Count is ", count);
    numDigitsSpan.innerHTML = count.toString();
    for (let i = 0; i < count; i++) {
      let rDigit = getRandomIntInclusive(0, 9);
      digitsArray.push(rDigit);
    }

    console.log(digitsArray.toString());
    toRemember.innerHTML = digitsArray.toString();
    let seconds = 5;
    var myVar = setInterval(decrementTime, 1000);
    function decrementTime() {
      seconds--;
      numSeconds.innerHTML = seconds.toString();
      if (seconds == 0) {
        clearInterval(myVar);
      }

    }
    setTimeout(() => {
      toRemember.innerHTML = "";
      entryTextbox.disabled="";
    }, 5000)
  }

  function checkTheValues(){
    let enteredString=entryTextbox.value;
    entryTextbox.disabled='disabled';
    let count= document.querySelector('#count').value;
    if (enteredString == digitsArray.toString()){
      alert("You remembered all "+count+" of them! Yayy!");
    }
    else{
      alert("You made a mistake, please try again");
    }
    digitsArray =[];
    entryTextbox.value='';
  }

}
