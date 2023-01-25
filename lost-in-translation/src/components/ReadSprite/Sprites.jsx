// Make components for reading off sprites, need to exported to TranslatorForm.
// See this tutorial for how to work with sprites - https://codehs.com/tutorial/andy/Programming_Sprites_in_JavaScriptc

// X: 1200 x Y: 600 --> x/12 = 150 pixels per sprite, y/4 = 150 pixel per sprite 26: Amerikansk tegnsetting!
import "../../index.css"

function TextToSprite(props){
    console.log("text to sprite")
    const letters = props.sentence;
    const SPRITE_WIDTH = 149;
    const SPRITE_HEIGHT = 149;
    const BORDER_WIDTH = 1;
    const SPACING_WIDTH = 1;

    const spritePosition = { // Key-valye pairs
        // letter : box coordinates (row), (column)
        // origin is top left
        a : [0,0],
        b : [0,1],
        c : [0,2],
        d : [0,3],
        e : [0,4],
        f : [0,5],
        g : [0,6],
        h : [0,7],
        i : [1,0],
        j : [1,1],
        k : [1,2],
        l : [1,3],
        m : [1,4],
        n : [1,5],
        o : [1,6],
        p : [1,7],
        q : [2,0],
        r : [2,1],
        s : [2,2],
        t : [2,3],
        u : [2,4],
        v : [2,5],
        w : [2,6],
        x : [2,7],
        y : [3,0],
        z : [3,1],
    };

    function spritePositionToImagePosition(row, col) {
        return {
            x: (
                BORDER_WIDTH +
                col * (SPACING_WIDTH + SPRITE_WIDTH)
            ),
            y: (
                BORDER_WIDTH +
                row * (SPACING_WIDTH + SPRITE_HEIGHT)
            )
        };
    };

    var canvas = document
                .querySelector('canvas');
    var context = canvas
                .getContext('2d');

    var spriteSheetSRC = '../../../assets/sign-spritesheet-1200.png' // 'https://codehs.com/uploads/e4cfb06e001bd92cf41139928e88819a';
    var image = new Image();
    image.src = spriteSheetSRC;
    image.crossOrigin = true;

    //console.log(spritePosition["b"]);
    const posSheet = spritePosition[letters];

    var position = spritePositionToImagePosition(posSheet[0], posSheet[1]); 
    // send in row and column as input
    // returns position as x (along column), y pixels (along rows). 

    //console.log(position)

    image.onload = function() {
        context.drawImage(
            image,
            position.x,
            position.y,
            SPRITE_WIDTH,
            SPRITE_HEIGHT,
            0,
            0,
            SPRITE_WIDTH,
            SPRITE_HEIGHT
        );
    
    
    // return <link rel="stylesheet" href="style.css">
    /* </link>
    <canvas width="1200px" height="600px">
    </canvas>
    <script src="Sprites.jsx"></script> */ 
    };
    return image;
};

export default TextToSprite;