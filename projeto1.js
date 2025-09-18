// Atual Animação
let playState = 'Parado';
const dropdouwn = document.getElementById('animations');
dropdouwn.addEventListener('change', function(e){
    playState= e.target.value;
});

// canvas para animações
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height=600);


// imagem
const playerImage = new Image();
playerImage.src='shadow_dog.png'
const spriteWidth = 575;
const spriteHeight = 523;
let gameFrame = 0;
const staggerFrames = 5;

const spriteAnimations = [];

const animationStates = [{name:'Parado', frames: 7},{name:'PuloCima', frames: 7}, {name:'PuloBaixo', frames: 7}, {nome:'CorrePula', frames: 9}, {nome:'Corre11', frames: 11}, {nome:'Corre', frames: 5}, {nome:'Bolinha', frames: 7}, {nome:'Feliz', frames: 7}, {nome:'Cai', frames: 12}, {nome:'Acabou', frames: 4}]


animationStates.forEach((state, index)=> {
    let frames = {
        loc: [], 
    };
    for (let j =0; j < state.frames; j++){
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX,y: positionY});

    }

    spriteAnimations[state.name] = frames;



});

function animate(){
    ctx.clearRect(0,0, CANVAS_HEIGHT, CANVAS_WIDTH);
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playState].loc.length;

    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playState].loc[position].y;


        ctx.drawImage(
            playerImage,
            frameX,
            frameY,
            spriteHeight,
            spriteWidth,
            0,
            0,
            spriteWidth,
            spriteHeight,
        );
    gameFrame++;
    requestAnimationFrame(animate)

}
animate();