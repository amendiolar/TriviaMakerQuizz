
class Quizz{

    constructor(questions){
        this.questions = questions;
    }


    addQuestions(){
        console.log(this.questions)
        const container = document.querySelector(".container");
        for(var i=0; i<this.questions.length; i++){
          const textDiv = document.createElement('div');
          textDiv.className = "trivia-div";
          const pregunta = document.createElement('label');
          pregunta.innerHTML = [i+1]+" "+this.questions[i].question;
          const salto0 = document.createElement('br');
          salto0.innerHTML;
          textDiv.appendChild(pregunta);
          textDiv.appendChild(salto0);
        
          if(this.questions[i].type === "multiple"){
              const divRespuestas = document.createElement('div');
              divRespuestas.innerHTML=
              ` <label><input type="radio" value=${this.questions[i].correct_answer}>${this.questions[i].correct_answer}</label><br>
                <label><input type="radio" value=${this.questions[i].incorrect_answers[0]}>${this.questions[i].incorrect_answers[0]}</label><br>
                <label><input type="radio" value=${this.questions[i].incorrect_answers[1]}>${this.questions[i].incorrect_answers[1]}</label><br>
                <label><input type="radio" value=${this.questions[i].incorrect_answers[2]}>${this.questions[i].incorrect_answers[2]}</label><br>`
              textDiv.appendChild(divRespuestas);

          } else {
            const textOption1 = document.createElement('input');
            textOption1.innerHTML = this.questions[i].correct_answer;
            const textOption2 = document.createElement('input');
            textOption2.innerHTML = this.questions[i].incorrect_answer;
          }

          
          
          
          container.append(textDiv);
        }
      }



}

export default Quizz;





