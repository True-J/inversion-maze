var level_0_map = {
    map: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1], 
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1], 
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1], 
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1], 
        [1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1], 
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], 
        [1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1], 
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1], 
        [1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1], 
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1], 
        [1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1], 
        [1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1], 
        [1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1], 
        [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1], 
        [1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1], 
        [1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1], 
        [1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1], 
        [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1], 
        [1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1], 
        [1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1], 
        [1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1], 
        [1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1], 
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    cols: 21,
    rows: 25,
    startx: 3,
    starty: 12
};

var ctx = null;
var tileW = 64, tileH = 64;
var mapW = 21, mapH = 25;
var currentSecond = 0, frameCount = 0, framesLastSecond = 0;
var lastFrameTime = 0;
var tileset = null, tilesetURL = 'tileset.png', tilesetLoaded = false;

var keysDown = {
    37: false,
    38: false,
    39: false,
    40: false
};

function Character() {
    this.tileFrom = [1,1];
    this.tileTo = [1,1];
    this.timeMoved = 0;
    this.dimensions = [40,40];
    this.position = [0,0];
    this.delayMove = 250;

    this.sprites = {};
    this.sprites[directions.North] = 'North_Move.png';
    this.sprites[directions.South] = 'South_Move.png';
    this.sprites[directions.East] = 'East_Move.png';
    this.sprites[directions.West] = 'West_Move.png';
};

Character.prototype.placeAt = function(x,y) {
    this.tileFrom = [x,y];
    this.tileTo = [x,y];
    this.position = [((tileW*x)+((tileW - this.dimensions[0])/2)),((tileH*y)+((tileH - this.dimensions[1])/2))];
};

Character.prototype.processMovement = function(t) {
    if(this.tileFrom[0]==this.tileTo[0] && this.tileFrom[1]==this.tileTo[1]){
        return false;
    };

    if((t-this.timeMoved)>=this.delayMove){
        this.placeAt(this.tileTo[0],this.tileTo[1]);
    } else {
        this.position[0] = (this.tileFrom[0]*tileW) + ((tileW - this.dimensions[0])/2);
        this.position[1] = (this.tileFrom[1]*tileH) + ((tileH - this.dimensions[1])/2);

        if(this.tileTo[0] != this.tileFrom[0]){
            var diff = (tileW/this.delayMove)*(t - this.timeMoved);
            this.position[0] += (this.tileTo[0]<this.tileFrom[0] ? 0 - diff : diff);
        };
        if(this.tileTo[1] != this.tileFrom[1]){
            var diff = (tileH/this.delayMove)*(t - this.timeMoved);
            this.position[1] += (this.tileTo[1]<this.tileFrom[1] ? 0 - diff : diff);
        };

        this.position[0] = Math.round(this.position[0]);
        this.position[1] = Math.round(this.position[1]);

    };

    return true;
};

var viewport = {
    screen      : [0,0],
    startTile   : [0,0],
    endTile     : [0,0],
    offset      : [0,0],
    update      : function(px,py){
        this.offset[0] = Math.floor((this.screen[0]/2)-px);
        this.offset[1] = Math.floor((this.screen[1]/2)-py);

        var tile = [
            Math.floor(px/tileW),
            Math.floor(py/tileH)
        ];

        this.startTile[0] = tile[0] - 1 - Math.ceil((this.screen[0]/2)/tileW);
        this.startTile[1] = tile[1] - 1 - Math.ceil((this.screen[1]/2)/tileH);

        if (this.startTile[0]<0) { this.startTile[0] = 0; }
        if (this.startTile[1]<0) { this.startTile[1] = 0; }

        this.endTile[0] = tile[0] + 1 + Math.ceil((this.screen[0]/2)/tileW);
        this.endTile[1] = tile[1] + 1 + Math.ceil((this.screen[1]/2)/tileH);

        if (this.endTile[0] >= mapW) { this.endTile[0] = mapW };
        if (this.endTile[1] >= mapH) { this.endTile[1] = mapH };
    }
};

var directions = {
    North      : 0,
    East       : 1,
    South      : 2,
    West       : 3
};

var player = new Character();

window.onload = function() {
    ctx = document.getElementById('mycanvas').getContext('2d');
    requestAnimationFrame(drawGame);
    ctx.font = "bold 10pt sans0serif";

    player.placeAt(3,12);

    window.addEventListener('keydown', function(e){
        if(e.keyCode>=37 && e.keyCode<=40){
            keysDown[e.keyCode] = true;
        };
    });

    window.addEventListener('keyup', function(e){
        if(e.keyCode>=37 && e.keyCode<=40){
            keysDown[e.keyCode] = false;
        };
    });

    viewport.screen = [
        document.getElementById('mycanvas').width,
        document.getElementById('mycanvas').height
    ];

};

function drawGame() {
    if ( ctx==null ) { 
        return;
    };

    var currentFrameTime = Date.now();
    var timeElapsed = currentFrameTime - lastFrameTime;

    var sec = Math.floor(Date.now()/1000);
    if (sec != currentSecond){
        currentSecond = sec;
        framesLastSecond = frameCount;
        frameCount = 1;
    } else {
        frameCount ++;
    };

    if(!player.processMovement(currentFrameTime)) {
        if(keysDown[38] && player.tileFrom[1]>0 && level_0_map.map[player.tileFrom[1]-1][player.tileFrom[0]]==0){
            player.tileTo[1] -= 1;
        } else {
            if(keysDown[40] && player.tileFrom[1]<(mapH - 1) && level_0_map.map[player.tileFrom[1]+1][player.tileFrom[0]]==0){
                player.tileTo[1] += 1;
            } else {
                if(keysDown[37] && player.tileFrom[0]>0 && level_0_map.map[player.tileFrom[1]][player.tileFrom[0]-1]==0){
                    player.tileTo[0] -= 1;
                } else {
                    if(keysDown[39] && player.tileFrom[0]<(mapW - 1) && level_0_map.map[player.tileFrom[1]][player.tileFrom[0]+1]==0){
                        player.tileTo[0] += 1;
                    };
                };
            };
        };
        if (player.tileFrom[0]!=player.tileTo[0] || player.tileFrom[1]!=player.tileTo[1]) {
            player.timeMoved = currentFrameTime;
        };
    };

    viewport.update(
        player.position[0] + (player.dimensions[0]/2),
        player.position[1] + (player.dimensions[1]/2)
    );
    
    

    ctx.fillStyle = '#000000';
    ctx.fillRect(0,0,viewport.screen[0],viewport.screen[1]);


    for (let i=viewport.startTile[1]; i<=viewport.endTile[1]; i++){
        for (let j=viewport.startTile[0]; j<=viewport.endTile[0]; j++){
            let img = new Image();
            img.src = getfloortype(j,i);
            ctx.drawImage(img,viewport.offset[0]+j*tileW,viewport.offset[1]+i*tileH,tileW,tileH);
        };
    };

    ctx.fillStyle = "#0000ff";
    ctx.fillRect(viewport.offset[0] + player.position[0], viewport.offset[1] + player.position[1],player.dimensions[0],player.dimensions[1]);

    lastFrameTime = currentFrameTime;

    ctx.fillStyle = "#ff0000";
    ctx.fillText("FPS: " + framesLastSecond, 10, 20);
    
    requestAnimationFrame(drawGame);

};