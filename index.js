const app = new PIXI.Application({
    background: '#1099bb',
    width: 640, 
    height: 360
});

const bunny = PIXI.Sprite.from('/assets/sprite.png');
app.stage.addChild(bunny);

// center the sprite's anchor point
bunny.anchor.set(0.5);

// move the sprite to the center of the screen
bunny.x = app.screen.width / 2;
bunny.y = app.screen.height / 2;

const jumpBase2 = [-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,10,9,8,7,6,5,4,3,2,1];
const jumpBase = [-1,-2,-3,-4,-5,-6,-7,-8,-9,-10];
let jumping = [];

document.body.appendChild(app.view);

let movement = '';

const graphics = new PIXI.Graphics();

// Rectangle
graphics.beginFill(0xDE3249);
graphics.drawRect(50, 50, 100, 100);
graphics.endFill();
app.stage.addChild(graphics);

window.addEventListener('keydown',event=>{
    if(event.key===' '){
        jumping=[...jumpBase];
    }

    if(event.key==='ArrowRight'){
        movement=1;
    }else if(event.key==='ArrowLeft'){
        movement=-1;
    }
});


window.addEventListener('keyup',event=>{
  if(event.key!==' ')movement=''  
})



const movementStep = 2;

// Listen for animate update
app.ticker.add((delta) => {
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent transformation
   
    bunny.rotation += 0.01 * delta;
    if(movement){
        console.log('loggedKey:',movement);
            bunny.x+=movementStep*movement;            
    }
console.log(bunny.x,bunny.y,bunny.y<300 , bunny.x>300)
    if(jumping.length){
        console.log('jumping',jumping)
        bunny.y+=jumping[0]*4;
        jumping.shift();
    }else{
        if(bunny.y<300 && bunny.x>300)bunny.y+=4;
    }
});
