
import axios from 'axios';
import './styles/main.scss';

/*
// Vincula la variable 'botonBuscar' con el elemento que tenga el id='button-addon1'
var botonBuscar = document.getElementById('consulta')

botonBuscar.addEventListener('click', function(){
    // FUNCION ANONIMA : no tiene nombre, solo se usa para escuchar el click
    // Se ejecuta cuando alguien hace click
    
    // Tomar lo que la persona escribio 
      var pokeSearch = document.getElementById('pokeDuda')
      console.log(pokeSearch.value)
  
          for(var i=0; i<pokemons.length; i++){
            if(pokeSearch.value === pokemons[i].name.english){
             console.log(pokemons[i].name.english)
            window.open("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+(i)+".png", 'pokeSearch', 'width=200,height=150')
            
            } else {
            
            }
          }
        })




let consult = "";
function createConsult(difficulty, answerType, trivia_category){
    console.log(difficulty)
    console.log(answerType)
    console.log(trivia_category)
    let consult = `https://opentdb.com/api.php?amount=10&category=${trivia_category}&difficulty=${difficulty}&type=${answerType};
}



function init(){
    // Aqui hacemos la llamada a la API por los datos

    axios.get(consult)
        .then((response) => {
            // Aqui obtengo los paises
            console.log(response.status) // Status code de la peticion
            console.log(response.data) // data es donde viene la informacion buscada
            const game = new Game(response.data)
            game.start()
        })
        .catch((error) => {
            console.log("aca esta el error", error.response.status)
            // Aqui paso un error al tratar de traer los paises

        })
}

init();


*/
