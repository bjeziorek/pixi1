const story1 =  [
            {
                id:'day1-1a-1',
                text: {
                    pl: 'Jak mam być ojcem dla swoich dzieci?'
                },
                next: ['day1-1a-2'],
                points: {
                    mood: 0
                }
            },
            {
                id:'day1-1a-2',
                text: {
                    pl: 'Skoro mnie samemu by się teraz przydał ojciec...'
                },
                next: ['day1-1a-3'],
                points: {
                    mood: 0
                }
            },
            {
                id:'day1-1a-3',
                text: {
                    pl: 'Ktoś, kto weźmie mnie za rękę...'
                },
                next: ['day1-1a4'],
                points:  {
                    mood: 0
                }
            },
            {
                id:'day1-1a-4',
                text: {
                    pl: '...a ja ufnie ją chwycę o nic się nie bojąc...'
                },
                next: ['day1-1a5'],
                points:  {
                    mood: 0
                }
            },
            {
                id:'day1-1a-5',
                text: {
                    pl: 'Wciąż jeszcze nie widząc, że świat to straszsne miejsce...'
                },
                next: ['day1-1a6'],
                points:  {
                    mood: 0
                }
            },
            {
                id:'day1-1a-6',
                text: {
                    pl: 'Wciąż naiwnie wierząc, że zło da się pokonać...'
                },
                next: ['day1-1a7'],
                points:  {
                    mood: 0
                }
            },
            {
                id:'day1-1a-7',
                text: {
                    pl: '... i snując bezkrytyczne dziecięce plany o karierze superbohatera.'
                },
                next: ['day1-1a8','day1-1a9'],
                points:  {
                    mood: 0
                }
            },
            {
                id:'day1-1a-8',
                text: {
                    pl: 'Byłem dzieckiem. Dziecko ma prawo marzyć.'
                },
                next: ['day1-1a10'],
                points: 1
            },
            {
                id:'day1-1a-9',
                text: {
                    pl: 'Byłem głupi i naiwny.'
                },
                next: ['day1-1a11','day1-1a12'],
                points:  {
                    mood: -1
                }
            },
            {
                id:'day1-1a-10',
                text: {
                    pl: 'A czy ja mam?'
                },
                next: ['day1-1a7','day1-1a11'],
                points: {
                    mood: 0
                }
            },
            {
                id:'day1-1a-11',
                text: {
                    pl: 'Muszę się wziąć w garść.'
                },
                next: ['day1-1a8','day1-1a9'],
                points:  {
                    mood: 0
                }
            },
            {
                id:'day1-1a-11',
                text: {
                    pl: '.'
                },
                next: ['day1-1a8','day1-1a9'],
                points:  {
                    mood: 0
                }
            },

];
   
const choices = [];

const app = new PIXI.Application({
    background: '#1099bb',
    width: 800, 
    height: 600
});

const bg = PIXI.Sprite.from('/assets/bg.jpg');
app.stage.addChild(bg);
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



function nextText(){
    if(!choices.length){
        console.log(choices,'sdsd')
        choices.push(story1[0]);
    }else{
        
    console.log(choices,'gfhgfh',choices[choices.length-1])
    const nextId=story1.find(el=>el.id===choices[choices.length-1].id).next[0];
        choices.push(story1.find(el=>el.id===nextId))
    }
}

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
  if(event.key!==' ') {
      movement=''  
  }else{
      nextText();
      bitmapFontText.text= choices[choices.length-1].text.pl+' '+Math.random();
      text1.text= choices[choices.length-1].text.pl+' '+Math.random();
  }
})



const movementStep = 2;

let bitmapFontText;

PIXI.Assets.addBundle('fonts', {
    ChaChicle: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&family=Manrope:wght@500;800&display=swap',
});

let text1;
PIXI.Assets.loadBundle('fonts').then(() =>
{
    text1= new PIXI.Text('Cinzel.ttf', new PIXI.TextStyle({ fontFamily: 'Cinzel', fontSize: 30 }));
    text1.y = app.screen.y * 0.7
   
    app.stage.addChild(text1);
   });


PIXI.Assets.load('https://pixijs.com/assets/bitmap-font/desyrel.xml').then(() =>
{
    bitmapFontText = new PIXI.BitmapText(
        choices[choices.length-1].text.pl+'\nWoo yay!', {
            fontName: 'Desyrel',
            fontSize: 40,
            align: 'left',
        },
    );

    bitmapFontText.x = 50;
    bitmapFontText.y = app.screen.height*0.8;

    app.stage.addChild(bitmapFontText);
});

nextText();

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
//console.log(bunny.x,bunny.y,bunny.y<300 , bunny.x>300)
    if(jumping.length){
        console.log('jumping',jumping)
        bunny.y+=jumping[0]*4;
        jumping.shift();
        
 

    }else{
        if(bunny.y<300 && bunny.x>300)bunny.y+=4;
    }
});
