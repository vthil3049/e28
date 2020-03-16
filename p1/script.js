let app = new Vue({
   el: '#app',
   data: {
      challengeCount: 0,
      numbersShown: [],
      numbersGuessed: [],
      currentNumber: '',
      canShow: false,
      countdown: 5,
      timing: null,
      guessString: '',
      timesUp: false

   },
   methods: {
      getRandomIntInclusive: function (min, max) {
         min = Math.ceil(min);
         max = Math.floor(max);
         return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
      },
      submitNumber: function (event) {
         console.log(event);
         this.numbersGuessed.push(currentNumber);
      },
      getChallengeNumbers: function () {
         //first empty the previous array
         this.numbersShown = [];
         if (this.challengeCount > 0) {
            for (let i = 0; i < this.challengeCount; i++) {
               let rDigit = this.getRandomIntInclusive(0, 9);
               this.numbersShown.push(rDigit);
            }
            this.canShow = true;
            this.countDownNumbers();
         }
      },
      checkEntry: function () {
         //compare numbers shown to current guess
      },
      canShowNumbers: function () {
         return (this.numbersShown.length > 0 && this.canShow);
      },
      countDownNumbers: function () {
         // Set the date we're counting down to
         var startTime = new Date().getTime();
         var currSeconds = 0;

         // Update the count down every 1 second
         var x = setInterval(function () {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = now - startTime;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element 
            let elapsed = days + "d " + hours + "h "
               + minutes + "m " + seconds + "s ";
            currSeconds++;
            console.log(currSeconds);
            app.timing = currSeconds;

            // If the count down is finished, write some text
            if (currSeconds >= 5) {
               console.log("done");
               app.canShow = false;
               app.timesUp = true;
               clearInterval(x);
            }
         }, 1000);

      }

   }

})