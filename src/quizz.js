
class Quizz{

    constructor(questions){
        this.questions = questions;
    }

    addQuestions(){
        for(var i=0; i<10; i++){
          const container = document.querySelector(".container");
          const textDiv = document.createElement('div');
          const textElement = document.createElement('p');
          textElement.innerHTML = questions[i].questions;
          const textForm = document.createElement('select');
          if(questions[i].type === multiple){
              const textOption1 = document.createElement('option');
              textOption1.innerHTML = questions[i].correct_answer;
              const textOption2 = document.createElement('option');
              textOption2.innerHTML = questions[i].incorrect_answers[0];
              const textOption3 = document.createElement('option');
              textOption3.innerHTML = questions[i].incorrect_answers[1];
              const textOption4 = document.createElement('option');
              textOption4.innerHTML = questions[i].incorrect_answer[2];
          } else {
            const textOption1 = document.createElement('option');
            textOption1.innerHTML = questions[i].correct_answer;
            const textOption2 = document.createElement('option');
            textOption2.innerHTML = questions[i].incorrect_answer;
          }

          textDiv.append(textElement);
          textDiv.append(textForm);
          textDiv.append(textOption1);
          textDiv.append(textOption2);
          textDiv.append(textOption3);
          textDiv.append(textOption4);
          container.append(textDiv);
        }
      }



}

export default Quizz;





