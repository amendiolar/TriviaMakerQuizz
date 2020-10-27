
class Quizz{

    constructor(questions){
        this.questions = questions;
    }


    addQuestions(){
        console.log(this.questions);
        const correctas = [];
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

              correctas.push(this.questions[i].correct_answer);


          } else {
            const divRespuestasBooleanas = document.createElement('div');
              divRespuestasBooleanas.innerHTML=
              ` <label><input type="radio" value=${this.questions[i].correct_answer}>${this.questions[i].correct_answer}</label><br>
                <label><input type="radio" value=${this.questions[i].incorrect_answers}>${this.questions[i].incorrect_answers}</label><br>`
              textDiv.appendChild(divRespuestasBooleanas);

          }

          
          container.append(textDiv);
        }

        console.log(correctas);

        const evaluateButton = document.createElement('input');
        evaluateButton.type= "submit";
        evaluateButton.value="Submit";
        evaluateButton.innerHTML;
          
        container.append(evaluateButton);

      }


    evaluate(){



    }




}

export default Quizz;





