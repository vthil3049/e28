let app = new Vue({
    el: '#app',
    data: {
        name: '',
        playerName: '',
        scrambledWord: '',
        correctWord: '',
        wordHint: '',
        guessWord: '',
        feedback: '',
        correct: null,
        words: [
            ['apple', 'Sometimes red, sometimes delicious'],
            ['washington', 'Rushmore’s left edge'],
            ['pumpkin', 'Halloween’s favorite fruit'],
            ['football', 'Play with your hands or feet, depending on your location']
        ]


    },
    methods: {
        resetGame: function () {
            //this.playerName = '';
        },
        getRandomIntInclusive: function (min, max) {
            //THe function below is from the MDN site
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
        },
        scrambleWord: function (inword) {
            let tempWord = inword;
            let outword = '';
            let len = inword.length;
            //take 1 char at a time from tempWord and add it to outword until no more chars are lef
            while (outword.length < len) {
                if (tempWord.length == 1) {
                    outword += tempWord;
                    continue;
                }
                let i = this.getRandomIntInclusive(0, tempWord.length - 1);
                let ch = tempWord.charAt(i);
                outword += ch;
                //get a new tempWord by removing the ch
                let leftStr = tempWord.slice(0, i);
                let rightStr = tempWord.slice(i + 1);
                tempWord = leftStr + rightStr;
                //console.log("tempWord is ",tempWord, " outword is ", outword);
            }

            return outword;

        },
        startGame: function () {
            this.playerName = this.name;
            this.name = '';
            this.playGame();
        },
        playGame: function () {
            let len = this.words.length;
            let i = this.getRandomIntInclusive(0, len - 1);
            this.correctWord = this.words[i][0];
            this.wordHint = this.words[i][1];
            this.scrambledWord = this.scrambleWord(this.correctWord);
        },
        checkWord: function () {
            if (this.guessWord == this.correctWord) {
                this.feedback = 'Correct!';
                this.correct = true;
            }
            else {
                this.feedback = 'Incorrect. Try again...';
                this.correct = false;
                console.log("incorrect");
            }


        }



    },
    computed: {
        feedBackObject: function () {
            return {
 
                'bg-danger' : !this.correct,
                    'bg-success': this.correct,
                    'text-light': true
             }

        }
    }

})

