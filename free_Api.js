
let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist&type=single&idRange=0-319";

// let url = "https://v2.jokeapi.dev/joke/Programming";
let card = document.getElementById("card-text");
function random_joke(){
       fetch(url).then((value)=>{
        return value.json();
       }).then((data)=>{
          card.innerHTML = data.joke;
       })   
}


random_joke();














