{
  class Questions {
    constructor(question, answers, correctAnswer) {
      this.question = question;
      this.answers = answers;
      this.correctAnswer = correctAnswer;

    }
    displayQuestions() {
      console.log(this.question);
      for (let i = 0; i < this.answers.length; i++) {
        console.log(i + ':' + this.answers[i]);
      }
    }
    checkCorrect(ans, callback) {
      let scr;
      if (ans === this.correctAnswer) {
        console.log('This is the correct answer');
      scr=  callback(true);
      } else {
        console.log('Wrong answer, try again later');
        scr=callback(false);
      }

      this.displayScores(scr);
    }
    displayScores(sc){
      console.log('Your current score is : ' + sc);
      console.log('------------------------');

    }
  };
  Q1 = new Questions('When did Nigeria get independence?',
    [1975, 1963, 1960], 2);

  Q2 = new Questions('How many states are in Nigeria?',
    [30, 36, 37], 1);

  Q3 = new Questions('Which Nigerian state has the highest number of local governments?',
    ['Yobe', 'Oyo', 'Lagos', 'Kano'], 3);

  Q4 = new Questions('What is the capital of Ghana?',
    ['Accra', 'Nairobi', 'Abuja', 'Pretoria'], 0);


    function scores(){
      let sc=0;
      return function(correct){
        if(correct){
          sc+=1;
        }return sc;
      }
    }
    let currentScore=scores();

  const nextQuestion = () => {
    let q = [Q1, Q2, Q3, Q4];
    let r = Math.floor(Math.random() * q.length);
    q[r].displayQuestions();

    let input = prompt('whats the correct answer?');


    if (input !== 'exit') {
      q[r].checkCorrect(parseInt(input), currentScore);
        nextQuestion();
      }
  }
  nextQuestion();

}
