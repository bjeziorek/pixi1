const story1 = [
    {
        id: 'day1',
        text: {
            pl: 'Dzień 1.'
        },
        next: ['day1-1a-1'],
        points: {
            mood: 0
        }
    },
    {
        id: 'day1-1a-1',
        text: {
            pl: 'Jak mam być ojcem dla swoich dzieci?'
        },
        next: ['day1-1a-2'],
        points: {
            mood: 0
        }
    },
    {
        id: 'day1-1a-2',
        text: {
            pl: 'Skoro mnie samemu by się teraz przydał ojciec...'
        },
        next: ['day1-1a-3'],
        points: {
            mood: 0
        }
    },
    {
        id: 'day1-1a-3',
        text: {
            pl: 'Ktoś, kto weźmie mnie za rękę...'
        },
        next: ['day1-1a4'],
        points: {
            mood: 0
        }
    },
    {
        id: 'day1-1a4',
        text: {
            pl: '...a ja ufnie ją chwycę o nic się nie bojąc...'
        },
        next: ['day1-1a5'],
        points: {
            mood: 0
        }
    },
    {
        id: 'day1-1a5',
        text: {
            pl: 'Wciąż jeszcze nie widząc, że świat to straszsne miejsce...'
        },
        next: ['day1-1a6'],
        points: {
            mood: 0
        }
    },
    {
        id: 'day1-1a6',
        text: {
            pl: 'Wciąż naiwnie wierząc, że zło da się pokonać...'
        },
        next: ['day1-1a7'],
        points: {
            mood: 0
        }
    },
    {
        id: 'day1-1a7',
        text: {
            pl: '... i snując bezkrytyczne dziecięce plany o karierze\nsuperbohatera.'
        },
        next: ['day1-1a8', 'day1-1a9'],
        points: {
            mood: 0
        }
    },
    {
        id: 'day1-1a8',
        text: {
            pl: 'Byłem dzieckiem. Dziecko ma prawo marzyć.'
        },
        next: ['day1-1a10'],
        points: 1
    },
    {
        id: 'day1-1a9',
        text: {
            pl: 'Byłem głupi i naiwny.'
        },
        next: ['day1-1a11', 'day1-1a12'],
        points: {
            mood: -1
        }
    },
    {
        id: 'day1-1a10',
        text: {
            pl: 'A czy ja mam?'
        },
        next: ['day1-1a13', 'day1-1a14'],
        points: {
            mood: 0
        }
    },
    {
        id: 'day1-1a11',
        text: {
            pl: 'Muszę się wziąć w garść.'
        },
        next: ['day1-1a15'],
        points: {
            mood: 0
        }
    },
    {
        id: 'day1-1a12',
        text: {
            pl: 'I dalej jestem głupi...'
        },
        next: ['day1-1a16', 'day1-1a17'],
        points: {
            mood: 0
        }
    },
    {
        id: 'day1-1a13',
        text: {
            pl: 'Nie, już nie...'
        },
        next: ['day1-1a18'],
        points: {
            mood: 0
        }
    },
    {
        id: 'day1-1a14',
        text: {
            pl: 'Nawet jeśli to i tak już chyba nie potrafię marzyć...'
        },
        next: ['day1-1a18'],
        points: {
            mood: 0
        }
    },
    {
        id: 'day1-1a15',
        text: {
            pl: 'Powinienem przestać się użalać nad sobą\n i wziąć się do roboty!'
        },
        next: ['day1-1a22'],
        points: {
            mood: 0
        }
    },
    {
        id: 'day1-1a16',
        text: {
            pl: 'Jestem kompletnym nieudacznikiem!'
        },
        next: ['day1-1a24'],
        points: {
            mood: 0
        }
    },
    {
        id: 'day1-1a17',
        text: {
            pl: 'To coś złego?'
        },
        next: ['day1-1a18', 'day1-1a30'],
        points: {
            mood: 0
        }
    },
    {
        id: 'day1-1a18',
        text: {
            pl: 'W głębi serca chciałbym być tym superbohaterem...'
        },
        next: ['day1-1a19'],
        points: {
            mood: 0
        }
    },
    {
        id: 'day1-1a19',
        text: {
            pl: 'Cokolwiek to znaczy w świecie dorosłych...'
        },
        next: ['day1-1a20'],
        points: {
            mood: 0
        }
    },
    {
        id: 'day1-1a20',
        text: {
            pl: 'Zanotuję sobie tą myśl w kalendarzu.'
        },
        next: ['day1-1a21'],
        points: {
            mood: 0
        }
    },
    {
        id: 'day1-1a21',
        text: {
            pl: 'O nie! Zapomniałem, że dziś mamy rocznicę!'
        },
        next: ['day1-1a28'],
        points: {
            mood: 0
        }
    },
    {
        id: 'day1-1a22',
        text: {
            pl: 'Miałem zrobić zakupy i...'
        },
        next: ['day1-1a23','day1-1a25'],
        points: {
            mood: 0
        }
    },
    {
        id: 'day1-1a23',
        text: {
            pl: 'Sprawdzę kalendarz.'
        },
        next: ['day1-1a21'],
        points: {
            mood: 0
        }
    },
    {
        id: 'day1-1a24',
        text: {
            pl: '(Rzuca ze złości teczkę, z której wysypują się rzeczy,\nw tym kalendarz i się otwiera.)'
        },
        next: ['day1-1a21'],
        points: {
            mood: 0
        }
    },
    {
        id: 'day1-1a25',
        text: {
            pl: 'Dosyć! Cokolwiek to było, to poczeka!\nPotrzebuję czasu dla siebie!'
        },
        next: ['day1-1a26', 'day1-1a27'],
        points: {
            mood: 0
        }
    },
    {
        id: 'day1-1a26',
        text: {
            pl: 'Zakupy też poczekają!'
        },
        next: ['day2'],
        points: {
            mood: 0
        }
    },
    {
        id: 'day1-1a27',
        text: {
            pl: 'Zrobię tylko te zakupy.'
        },
        next: ['day2'],
        points: {
            mood: 0
        }
    },
    {
        id: 'day1-1a28',
        text: {
            pl: 'Nie mam nawet prezentu dla Jill!'
        },
        next: ['day1-1a29','day1-1a36'],
        points: {
            mood: 0
        }
    },
    {
        id: 'day1-1a29',
        text: {
            pl: 'Przy tym jak mnie traktuje na żaden nie zasługuje!'
        },
        next: ['day1-1a34', 'day1-1a33'],
        points: {
            mood: 0
        }
    },
    {
        id: 'day1-1a30',
        text: {
            pl: '...'
        },
        next: ['day1-1a31'],
        points: {
            mood: 0
        }
    },
    {
        id: 'day1-1a31',
        text: {
            pl: 'Jestem po prostu daleki do ideału...'
        },
        next: ['day1-1a32', 'day1-1a33'],
        points: {
            mood: 0
        }
    },
    {
        id: 'day1-1a32',
        text: {
            pl: 'Ale nie ma chyba ludzi idealnych...'
        },
        next: ['day1-1a37', 'day1-1a38'],
        points: {
            mood: 0
        }
    },
    {
        id: 'day1-1a33',
        text: {
            pl: 'Nic jej nie kupię.'
        },
        next: ['day2'],
        points: {
            mood: 0
        }
    },
    {
        id: 'day1-1a34',
        text: {
            pl: 'Kupię pierwszy lepszy drobiazg, jakieś kwiatki i będzie.'
        },
        next: ['day2'],
        points: {
            mood: 0
        }
    },
    {
        id: 'day1-1a35',
        text: {
            pl: 'Ale powinienem... Muszę...'
        },
        next: ['day1-1a39'],
        points: {
            mood: 0
        }
    },
    {
        id: 'day1-1a36',
        text: {
            pl: 'Kupię jej coś szczególnego.'
        },
        next: ['day2'],
        points: {
            mood: 0
        }
    },
    {
        id: 'day1-1a37',
        text: {
            pl: 'Powolutku, co ja mam dziś jeszcze zrobić?'
        },
        next: ['day1-1a23'],
        points: {
            mood: 0
        }
    },
    {
        id: 'day1-1a38',
        text: {
            pl: 'Chyba sobie na dziś już wszystko odpuszczę i odpocznę...'
        },
        next: ['day2'],
        points: {
            mood: 0
        }
    },
    {
        id: 'day1-1a39',
        text: {
            pl: 'Dla siebie, dla rodziny!'
        },
        next: ['day1-1a22'],
        points: {
            mood: 0
        }
    },
    {
        id: 'day2',
        text: {
            pl: 'Dzień 2'
        },
        next: ['day1'],
        points: {
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

bunny.blendMode = PIXI.BLEND_MODES.ADD;
// center the sprite's anchor point
bunny.anchor.set(0.5);

// move the sprite to the center of the screen
bunny.x = app.screen.width / 2;
bunny.y = app.screen.height / 2;

const jumpBase2 = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const jumpBase = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10];
let jumping = [];

document.body.appendChild(app.view);

let movement = '';

const graphics = new PIXI.Graphics();

// Rectangle
graphics.beginFill({ r: 0, g: 0, b: 0, a: 0.7 });
graphics.drawRect(0, app.screen.height * 0.8, app.screen.width, app.screen.height);
graphics.endFill();
app.stage.addChild(graphics);

////////////

// Get the texture for star.
const starTexture = PIXI.Texture.from('assets/star.png');

const starAmount = 10;
let cameraZ = 0;
const fov = 20;
const baseSpeed = 0.015;
let speed = 0;
let warpSpeed = 0;
const starStretch = 5;
const starBaseSize = 0.2;

// Create the stars
const stars = [];

for (let i = 0; i < starAmount; i++) {
    const star = {
        sprite: new PIXI.Sprite(starTexture),
        z: 0,
        x: 0,
        y: 0,
    };

    star.sprite.anchor.x = 0.5;
    star.sprite.anchor.y = 0.7;
    randomizeStar(star, true);
    app.stage.addChild(star.sprite);
    stars.push(star);
}

function randomizeStar(star, initial) {
    star.z = initial ? Math.random() * 2000 : cameraZ + Math.random() * 1000 + 2000;

    // Calculate star positions with radial random coordinate so no star hits the camera.
    const deg = Math.random() * Math.PI * 2;
    const distance = Math.random() * 50 + 1;

    star.x = Math.cos(deg) * distance;
    star.y = Math.random() * 300;//Math.sin(deg) * distance +40;
}

// Change flight speed every 5 seconds
setInterval(() => {
    // warpSpeed = warpSpeed > 0 ? 0 : 1;
}, 5000);


////////////

function nextText(id = null) {
    if (id) {
        choices.push(story1.find(el => el.id === id))
        return;
    }

    if (!choices.length) {
        choices.push(story1[0]);
    } else {
        const nextId = story1.find(el => el.id === choices[choices.length - 1].id).next[0];
        choices.push(story1.find(el => el.id === nextId))
    }
}

window.addEventListener('keydown', event => {
    if (event.key === ' ') {
        jumping = [...jumpBase];
    }

    if (event.key === 'ArrowRight') {
        movement = 1;
    } else if (event.key === 'ArrowLeft') {
        movement = -1;
    }
});

function getTextById(id) {
    return story1.find(el => el.id === id);
}

let choice = false;

window.addEventListener('keyup', event => {
    console.log(event.key,choices[choices.length - 1])

    if (event.key === '1' && choice) {console.log('in')
        nextText(choices[choices.length - 1].next[0]);
        text1.text = choices[choices.length - 1].text.pl + '\n ' + Math.random();
        choice = false;
    }

    if (event.key === '2' && choice) {
        nextText(choices[choices.length - 1].next[1]);
        text1.text = choices[choices.length - 1].text.pl + '\n ' + Math.random();
        choice = false;
    }

    if (event.key !== ' ') {
        movement = ''
    } else {
        console.log(choices[choices.length - 1])
        if (choices[choices.length - 1].next?.length > 1) {

            text1.text = '[1] ' + getTextById(choices[choices.length - 1].next[0]).text.pl + '\n' +
                '[2] ' + getTextById(choices[choices.length - 1].next[1]).text.pl

            choice = true;
        } else {
            nextText();
            //      bitmapFontText.text= choices[choices.length-1].text.pl+' '+Math.random();

            text1.text = choices[choices.length - 1].text.pl + '\n ' + Math.random();
        }
    }
})


// const cells = PIXI.Sprite.from('https://pixijs.com/assets/cells.png');

// cells.scale.set(1.5);

// const mask = PIXI.Sprite.from('/assets/sprite.png');

// mask.anchor.set(0.5);
// mask.x = 310;
// mask.y = 190;

// cells.mask = mask;

// app.stage.addChild(mask, cells);
const movementStep = 2;

//let bitmapFontText;

PIXI.Assets.addBundle('fonts', {
    Cinzel: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&family=Manrope:wght@500;800&display=swap',
});

let text1;
PIXI.Assets.loadBundle('fonts').then(() => {
    text1 = new PIXI.Text(story1[0].text.pl, new PIXI.TextStyle({ fontFamily: 'Cinzel', fontSize: 30 }));
    text1.y = app.screen.height * 0.82
    text1.x = app.screen.width * 0.03
    text1.style.fill = '#fff'

    app.stage.addChild(text1);
});


// PIXI.Assets.load('https://pixijs.com/assets/bitmap-font/desyrel.xml').then(() =>
// {
//     bitmapFontText = new PIXI.BitmapText(
//         choices[choices.length-1].text.pl+'\nWoo yay!', {
//             fontName: 'Desyrel',
//             fontSize: 40,
//             align: 'left',
//         },
//     );

//     bitmapFontText.x = 50;
//     bitmapFontText.y = app.screen.height*0.8;

//     app.stage.addChild(bitmapFontText);
// });

nextText();

// Listen for animate update
app.ticker.add((delta) => {
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent transformation

    bunny.rotation += 0.01 * delta;
    if (movement) {
        console.log('loggedKey:', movement);
        bunny.x += movementStep * movement;
    }
    //console.log(bunny.x,bunny.y,bunny.y<300 , bunny.x>300)
    if (jumping.length) {
        console.log('jumping', jumping)
        bunny.y += jumping[0] * 4;
        jumping.shift();



    } else {
        if (bunny.y < 300 && bunny.x > 300) bunny.y += 4;
    }
    ///////////////////
    // Simple easing. This should be changed to proper easing function when used for real.
    speed += (warpSpeed - speed) * Math.random() / 20;
    cameraZ += delta;// * 10 * (speed + baseSpeed);
    for (let i = 0; i < starAmount; i++) {
        const star = stars[i];

        if (star.z < cameraZ) randomizeStar(star);

        // Map star 3d position to 2d with really simple projection
        const z = star.z - cameraZ;

        star.sprite.x = star.x * (fov / z) * app.renderer.screen.width + app.renderer.screen.width / 2;
        star.sprite.y += Math.random(); //= star.y * (fov / z) * app.renderer.screen.width + app.renderer.screen.height / 2;

        // Calculate star scale & rotation.
        const dxCenter = star.sprite.x - app.renderer.screen.width / 2;
        const dyCenter = star.sprite.y - app.renderer.screen.height / 2;
        const distanceCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter);
        const distanceScale = Math.max(0, (2000 - z) / 2000);

        star.sprite.scale.x = distanceScale * starBaseSize;
        // Star is looking towards center so that y axis is towards center.
        // Scale the star depending on how fast we are moving, what the stretchfactor is
        // and depending on how far away it is from the center.
        star.sprite.scale.y = distanceScale * starBaseSize
            + distanceScale * speed * starStretch * distanceCenter / app.renderer.screen.width;
        star.sprite.rotation = Math.atan2(dyCenter, dxCenter) //+ Math.PI / 2;
        if (star.sprite.y > app.screen.height) {
            star.sprite.y = 0
            if (star.sprite.x < app.screen.width) star.sprite.x = app.screen.width * 0.75
            if (star.sprite.x > app.screen.width) star.sprite.x = app.screen.width * 0.25
        }
    }
    //console.log(stars[0].sprite.x,stars[0].sprite.y,stars[0].z)

});
