
import axios from 'axios';
import Quizz from './quizz';
import './styles/main.scss';


// Vincula la variable 'botonBuscar' con el elemento que tenga el id='button-addon1'
var comenzarButton = document.getElementById('consult')

comenzarButton.addEventListener('click', function(){
    // FUNCION ANONIMA : no tiene nombre, solo se usa para escuchar el click
    // Se ejecuta cuando alguien hace click
    
    // Tomar lo que la persona escribio 
      var dificultad = document.getElementById('difficulty').value;
      var tipo = document.getElementById('answerType').value;
      var categoria = document.getElementById('trivia_category').value;

      console.log(dificultad)
      console.log(tipo)
      console.log(categoria)
    
        var busqueda = `https://opentdb.com/api.php?amount=10&category=${categoria}&difficulty=${dificultad}&type=${tipo}`;
        
        console.log(busqueda)

        axios.get(busqueda)
        .then((response) => {
            // Aqui obtengo las preguntas
            console.log(response.status) // Status code de la peticion
            console.log(response.data) // data es donde viene la informacion buscada
            console.log(response.data.results.length)
            console.log(response.data.results)
            const quizz = new Quizz(response.data.results)
            quizz.addQuestions()
        })
        .catch((error) => {
            // error while getting json
            if(error.response){
                console.log("Error al solicitar datos", error.response.data);
            // Aqui paso un error al tratar de traer las preguntas
            } else {
                console.log(error);
            }
            

        })        

 })
