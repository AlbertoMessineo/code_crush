const languages = [
  "js",
  "py",
  "csharp",
  "CSS",
  "html",
  "ng",
  "vue", 
  'ruby',
  'vite'
];
const board = [];
const rows = 9;
const cols = 9;
const score = 9;

window.onload = function(){
    startGame();
}


function randomLang(){
    return languages[Math.floor(Math.random() * languages.length)];
}
function startGame()  {
    for(let r = 0; r < rows; r++){
        let row = [];
        for(let c= 0; c < cols; c++){
            let tile = document.createElement('img');
            tile.id = r.toString() + "-" + c.toString; //img has the id corrisponding the relatives coordinate in the board
            tile.src = "img/lang/" + randomLang() + ".png"

            document.getElementById('board').append(tile);
            row.push(tile);
        }
        board.push(row);
        console.log(board);
    }
}