
// Game Score
let gameScore = document.getElementById('score');
let runningScore = 0;

let gameStart = false;

function increaseScore(score){
    runningScore += score;
}

// Changes tile background to red and increases the score based on the size when object was created
function tileSmash(e){
    console.log(e.target);
    //e.target.style.background = 'red';
    e.target.remove();
    increaseScore(parseInt(e.target.style.width));
    gameScore.innerHTML = '<h1> Score: ' + runningScore + '</h1>';  
}

// Creates a tile object with a random position on the screen 
DivObject = function() {
    let size = parseInt(100* Math.random()) + "px";
    let con = document.getElementById("container");
    
    this.div = document.createElement("div");
    //document.body.appendChild(this.div);
    con.appendChild(this.div);
    this.div.className = "tiles";
    this.div.style.top = parseInt(100 * Math.random() ) + "%";
    this.div.style.left = parseInt(100 * Math.random() ) + "%";
    this.div.style.width = size;
    this.div.style.height = size;
    //this.div.style.
    //this.div.innerHTML = '<p>' + size + '</p>';
}

function start(){
    let doesStart = document.getElementById('start-screen');
    if(doesStart.style.display === "none"){
        doesStart.style.display = "block";
    }else{
        doesStart.style.display = "none";
    }
    gameStart = true;

    //game loop
    while(gameStart){
        // create the tiles
        for(var i = 0; i < 11; i++){
            let tile = new DivObject();
        }
        // Create listener object from tiles and add event listener
        let listener = document.getElementsByClassName('tiles');
        console.log(listener);

        for(var i = 0; i < 11; i++){
            listener[i].addEventListener('click', tileSmash);
        }
        break;
    }
    
}















