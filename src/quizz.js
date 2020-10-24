
class Quizz{

    constructor(questions){
        this.questions = questions;
    }


    addQuestions(){
        console.log(this.questions)
        for(var i=0; i<this.questions.length; i++){
          const container = document.querySelector(".container");
          const textDiv = document.createElement('div');
          const textElement = document.createElement('p');
          textElement.innerHTML = this.questions[i].questions;
          const textForm = document.createElement('select');
          if(this.questions[i].type === "multiple"){
              const textOption1 = document.createElement('input');
              textOption1.type = "radio";
              textOption1.value = `${this.questions[i].correct_answer}`;
              textOption1.innerHTML = this.questions[i].correct_answer;
              console.log(textOption1);

              const textOption2 = document.createElement('input');
              textOption2.innerHTML = this.questions[i].incorrect_answers[0];
              const textOption3 = document.createElement('input');
              textOption3.innerHTML = this.questions[i].incorrect_answers[1];
              const textOption4 = document.createElement('input');
              textOption4.innerHTML = this.questions[i].incorrect_answers[2];
          } else {
            const textOption1 = document.createElement('input');
            textOption1.innerHTML = this.questions[i].correct_answer;
            const textOption2 = document.createElement('input');
            textOption2.innerHTML = this.questions[i].incorrect_answer;
          }

          textDiv.appendChild(textElement);
          textDiv.appendChild(textForm);
          textDiv.appendChild(textOption1);
          textDiv.appendChild(textOption2);
          textDiv.appendChild(textOption3);
          textDiv.appendC(textOption4);
          container.append(textDiv);
        }
      }



}

export default Quizz;





