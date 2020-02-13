window.onload = function () {
   let showNumberBtn = document.querySelector('#showNumber');
   let numDigitsSpan = document.querySelector('#numDigits');
   let toRemember = document.querySelector('#toRemember');
   let numSeconds = document.querySelector('#numSeconds');

   let digitsArray = [];


   showNumberBtn.addEventListener('click', showTheNumbers);

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
      }, 5000)


   }
   /* // All the elements on the page we'll work with
   let flipBtn = document.querySelector('#flipBtn');
   let results = document.querySelector('#results');
   let flipMessage = document.querySelector('#flipMessage');
   let winMessage = document.querySelector('#winMessage');
   let loseMessage = document.querySelector('#loseMessage');
   
   
   flipBtn.addEventListener('click', flip);
   
   function flip() {
   
      // Which radio to the player choose - heads or tails?
      let playerChoice = document.querySelector('input[name="choice"]:checked').value;
   
      // The computer randomly chooses ("flips") heads or tails
      let sides = ['heads', 'tails'];
      let random = Math.floor(Math.random() * 2);
      let flip = sides[random];
   
      // Player wins if their choice matches the flip
      let win = playerChoice == flip;
   
      // Update the page
      flipMessage.innerHTML = flip;
   
      // Briefly hide and then show the results again
      // This way when the results are the same as the previous round
      // It doesn't look like nothing happens when the button is clicked
      results.style.display = 'none';
      setTimeout(function () {
         results.style.display = 'block';
      }, 100);
   
      // Show the appropriate win or lose message
      if (win) {
         winMessage.style.display = 'block';
         loseMessage.style.display = 'none';
      } else {
         winMessage.style.display = 'none';
         loseMessage.style.display = 'block';
      }
   } */

}


