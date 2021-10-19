var ctx = null;
var tileW = 96, tileH = 96;
var mapW = 21, mapH = 25;
var currentSecond = 0, frameCount = 0, framesLastSecond = 0;
var lastFrameTime = 0;
var currentlevel = 0;
var gamestart = 0, gametime = 0;
var invertcheck = false;

var gamemap = [];
var boxes = [];
var buttons = [];
var goals = [];
var powereddoors = [];
var lockeddoors = [];
var keys = [];
var failbuttons = [];


var keysDown = {
    65: false, // west
    87: false, // north
    68: false, // east
    83: false, // south
    75: false, // pickup or use/drop key
    74: false  // pickup or drop goal
};

function game_object() {
    this.tileFrom = [1,1];
    this.tileTo = [1,1];
    this.timeMoved = 0;
    this.dimensions = [96,96];
    this.position = [0,0];
    this.delayMove = 200;
    this.obj_type = "";
    this.obj_id = "";
    this.state = 0;
    this.movehist = [];
};

game_object.prototype.place_At = function(x,y) {
    this.tileFrom = [x,y];
    this.tileTo = [x.y];
    this.position = [((tileW*x)+((tileW - this.dimensions[0])/2)),((tileH*y)+((tileH - this.dimensions[1])/2))];
};

game_object.prototype.process_Movement = function(t) {
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

function Character() {
    this.tileFrom = [1,1];
    this.tileTo = [1,1];
    this.timeMoved = 0;
    this.dimensions = [96,64];
    this.position = [0,0];
    this.delayMove = 200;
    this.direct = 1;
    this.haskey = 0;
    this.hasgoal = 0;
    this.tempdir = 1;
    this.source = {};

    this.source[-1] = Player_South_img;
    this.source[-2] = Player_North_img;
    this.source[-3] = Player_East_img;
    this.source[-4] = Player_West_img;
    this.source[-5] = Player_South_Key_img;
    this.source[-6] = Player_North_Key_img;
    this.source[-7] = Player_East_Key_img;
    this.source[-8] = Player_West_Key_img;
    this.source[-9] = Player_South_Goal_img;
    this.source[-10] = Player_North_Goal_img;
    this.source[-11] = Player_East_Goal_img;
    this.source[-12] = Player_West_Goal_img;
    this.source[-13] = Player_South_Key_Goal_img;
    this.source[-14] = Player_North_Key_Goal_img;
    this.source[-15] = Player_East_Key_Goal_img;
    this.source[-16] = Player_West_Key_Goal_img;

    this.source[1] = Player_North_img;
    this.source[2] = Player_South_img;
    this.source[3] = Player_West_img;
    this.source[4] = Player_East_img;
    this.source[5] = Player_North_Key_img;
    this.source[6] = Player_South_Key_img;
    this.source[7] = Player_West_Key_img;
    this.source[8] = Player_East_Key_img;
    this.source[9] = Player_North_Goal_img;
    this.source[10] = Player_South_Goal_img;
    this.source[11] = Player_West_Goal_img;
    this.source[12] = Player_East_Goal_img;
    this.source[13] = Player_North_Key_Goal_img;
    this.source[14] = Player_South_Key_Goal_img;
    this.source[15] = Player_West_Key_Goal_img;
    this.source[16] = Player_East_Key_Goal_img;
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

var player = new Character();

window.onload = function() {
    ctx = document.getElementById('mycanvas').getContext('2d');
    loadfloortype();
    loadstaticimages();

    mapW = level[currentlevel].cols;
    mapH = level[currentlevel].rows;
    player.direct = level[currentlevel].player_start[2];

    for (let i=0; i<level[currentlevel].powered_doors.length; i++){
        level[currentlevel].map[level[currentlevel].powered_doors[i][1]][level[currentlevel].powered_doors[i][0]] = level[currentlevel].powered_doors[i][2];
    };

    for (let i=0; i<level[currentlevel].locked_doors.length; i++){
        level[currentlevel].map[level[currentlevel].locked_doors[i][1]][level[currentlevel].locked_doors[i][0]] = level[currentlevel].locked_doors[i][2];
    };

    for (let i=0; i<=mapH; i++){
        gamemap[i] = [];
        for (let j=0; j<=mapW; j++){
            gamemap[i][j] = level[currentlevel].map[i][j];
        };
    };

    for (let i=0; i<level[currentlevel].keys.length; i++){
        gamemap[level[currentlevel].keys[i][1]][level[currentlevel].keys[i][0]] = 9;
    };

    for (let i=0; i<level[currentlevel].goal.length; i++){
        gamemap[level[currentlevel].goal[i][1]][level[currentlevel].goal[i][0]] = 10;
    };

    requestAnimationFrame(drawGame);
    ctx.font = "bold 10pt sans0serif";

    gamemap[level[currentlevel].player_start[0]][level[currentlevel].player_start[1]] = 1;

    player.placeAt(level[currentlevel].player_start[0],level[currentlevel].player_start[1]);

    window.addEventListener('keydown', function(e){
        if(e.keyCode==65 || e.keyCode==87 || e.keyCode==68 || e.keyCode==83 || e.keyCode==75 || e.keyCode==74){
            keysDown[e.keyCode] = true;
        };
    });

    window.addEventListener('keyup', function(e){
        if(e.keyCode==65 || e.keyCode==87 || e.keyCode==68 || e.keyCode==83 || e.keyCode==75 || e.keyCode==74){
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
    var sec = Math.floor(Date.now()/1000);

    if (sec != currentSecond){
        currentSecond = sec;
        framesLastSecond = frameCount;
        frameCount = 1;
    } else {
        frameCount ++;
    };

    if(!player.processMovement(currentFrameTime)) {
        if (keysDown[75]){
            if (player.haskey == 4){
                switch (player.direct){
                    case 0: //North
                        if(level[currentlevel].map[player.tileTo[1]-1][player.tileTo[0]]==7){
                            player.haskey = 0;
                            level[currentlevel].map[player.tileTo[1]-1][player.tileTo[0]]=8;
                        } else {
                            if (player.tempdir == 1){
                                if (gamemap[player.tileTo[1]-1][player.tileTo[0]]==0){
                                    player.haskey = 0;
                                    gamemap[player.tileTo[1]-1][player.tileTo[0]]=9;
                                };
                            } else {
                                if (gamemap[player.tileTo[1]+1][player.tileTo[0]]==0){
                                    player.haskey = 0;
                                    gamemap[player.tileTo[1]+1][player.tileTo[0]]=9;
                                };
                            };
                        };
                        break;
                    case 1: //South
                        if (level[currentlevel].map[player.tileTo[1]+1][player.tileTo[0]]==7){
                            player.haskey = 0;
                            level[currentlevel].map[player.tileTo[1]+1][player.tileTo[0]]=8;
                        } else {
                            if (player.tempdir == 1){
                                if(gamemap[player.tileTo[1]+1][player.tileTo[0]]==0){
                                    player.haskey = 0;
                                    gamemap[player.tileTo[1]+1][player.tileTo[0]]=9;
                                };
                            } else {
                                if(gamemap[player.tileTo[1]-1][player.tileTo[0]]==0){
                                    player.haskey = 0;
                                    gamemap[player.tileTo[1]-1][player.tileTo[0]]=9;
                                };
                            };
                        };
                        break;
                    case 2: //West
                        if(level[currentlevel].map[player.tileTo[1]][player.tileTo[0]-1]==7){
                            player.haskey = 0;
                            level[currentlevel].map[player.tileTo[1]][player.tileTo[0]-1]=8;
                        } else {
                            if (player.tempdir == 1){
                                if(level[currentlevel].map[player.tileTo[1]][player.tileTo[0]-1]==0){
                                    player.haskey = 0;
                                    gamemap[player.tileTo[1]][player.tileTo[0]-1]=9;
                                };
                            } else {
                                if(gamemap[player.tileTo[1]][player.tileTo[0]+1]==0){
                                    player.haskey = 0;
                                    gamemap[player.tileTo[1]][player.tileTo[0]+1]=9;
                                };
                            };
                        };
                        break;
                    case 3: //East
                        if(level[currentlevel].map[player.tileTo[1]][player.tileTo[0]+1]==7){
                            player.haskey = 0;
                            level[currentlevel].map[player.tileTo[1]][player.tileTo[0]+1]=8;
                        } else {
                            if (player.tempdir == 1){
                                if(gamemap[player.tileTo[1]][player.tileTo[0]+1]==0){
                                    player.haskey = 0;
                                    gamemap[player.tileTo[1]][player.tileTo[0]+1]=9;
                                };
                            } else {
                                if(gamemap[player.tileTo[1]][player.tileTo[0]-1]==0){
                                    player.haskey = 0;
                                    gamemap[player.tileTo[1]][player.tileTo[0]-1]=9;
                                };
                            };
                        };
                        break;
                    
                };
            } else {
                switch (player.direct){
                    case 0: //North
                        switch (gamemap[player.tileTo[1]-1][player.tileTo[0]]){
                            case 9:
                                gamemap[player.tileTo[1]-1][player.tileTo[0]] = 0;
                                player.haskey = 4;
                                break;
                            case 8:
                                level[currentlevel].map[player.tileTo[1]-1][player.tileTo[0]] = 7;
                                gamemap[player.tileTo[1]-1][player.tileTo[0]] = 0;
                                player.haskey = 4;
                                break;
                            case 0:
                            case 1:
                                if (level[currentlevel].map[player.tileTo[1]+1][player.tileTo[0]] == 8){
                                    level[currentlevel].map[player.tileTo[1]+1][player.tileTo[0]] = 7;
                                    player.haskey = 4;
                                };
                                break;
                        };
                    case 1: //South
                        switch (gamemap[player.tileTo[1]+1][player.tileTo[0]]){
                            case 9:
                                gamemap[player.tileTo[1]+1][player.tileTo[0]] = 0;
                                player.haskey = 4;
                                break;
                            case 8:
                                level[currentlevel].map[player.tileTo[1]+1][player.tileTo[0]] = 7;
                                gamemap[player.tileTo[1]+1][player.tileTo[0]] = 0;
                                player.haskey = 4;
                                break;
                            case 0:
                            case 1:
                                if (level[currentlevel].map[player.tileTo[1]-1][player.tileTo[0]] == 8){
                                    level[currentlevel].map[player.tileTo[1]-1][player.tileTo[0]] = 7;
                                    player.haskey = 4;
                                };
                                break;
                        };
                    case 2: //West
                        switch (gamemap[player.tileTo[1]][player.tileTo[0]-1]){
                            case 9:
                                gamemap[player.tileTo[1]][player.tileTo[0]-1] = 0;
                                player.haskey = 4;
                                break;
                            case 8:
                                level[currentlevel].map[player.tileTo[1]][player.tileTo[0]-1] = 7;
                                gamemap[player.tileTo[1]][player.tileTo[0]-1] = 0;
                                player.haskey = 4;
                                break;
                            case 0:
                            case 1:
                                if (level[currentlevel].map[player.tileTo[1]][player.tileTo[0]+1] == 8){
                                    level[currentlevel].map[player.tileTo[1]][player.tileTo[0]+1] = 7;
                                    player.haskey = 4;
                                };
                                break;
                        };
                    case 3: //East
                        switch (gamemap[player.tileTo[1]][player.tileTo[0]+1]){
                            case 9:
                                gamemap[player.tileTo[1]][player.tileTo[0]+1] = 0;
                                player.haskey = 4;
                                break;
                            case 8:
                                level[currentlevel].map[player.tileTo[1]][player.tileTo[0]+1] = 7;
                                gamemap[player.tileTo[1]][player.tileTo[0]+1] = 0;
                                player.haskey = 4;
                                break;
                            case 0:
                            case 1:
                                if (level[currentlevel].map[player.tileTo[1]][player.tileTo[0]-1] == 8){
                                    level[currentlevel].map[player.tileTo[1]][player.tileTo[0]-1] = 7;
                                    player.haskey = 4;
                                };
                                break;
                        };
                };
            };
            keysDown[75] = false;
        };
        if (keysDown[74]){
            if (player.hasgoal == 8){
                switch (player.direct){
                    case 0: //North
                        if (player.tempdir == 1){
                            if (gamemap[player.tileTo[1]-1][player.tileTo[0]]==0){
                                player.hasgoal = 0;
                                gamemap[player.tileTo[1]-1][player.tileTo[0]]=10;
                            };
                        } else {
                            if (gamemap[player.tileTo[1]+1][player.tileTo[0]]==0){
                                player.hasgoal = 0;
                                gamemap[player.tileTo[1]+1][player.tileTo[0]]=10;
                            };
                        };
                        break;
                    case 1: //South
                        if (player.tempdir == 1){
                            if (gamemap[player.tileTo[1]+1][player.tileTo[0]]==0){
                                player.hasgoal = 0;
                                gamemap[player.tileTo[1]+1][player.tileTo[0]]=10;
                            };
                        } else {
                            if (gamemap[player.tileTo[1]-1][player.tileTo[0]]==0){
                                player.hasgoal = 0;
                                gamemap[player.tileTo[1]-1][player.tileTo[0]]=10;
                            };
                        };
                        break;
                    case 2: //West
                        if (player.tempdir == 1){
                            if (gamemap[player.tileTo[1]][player.tileTo[0]-1]==0){
                                player.hasgoal = 0;
                                gamemap[player.tileTo[1]][player.tileTo[0]-1]=10;
                            };
                        } else {
                            if (gamemap[player.tileTo[1]][player.tileTo[0]+1]==0){
                                player.hasgoal = 0;
                                gamemap[player.tileTo[1]][player.tileTo[0]+1]=10;
                            };
                        };
                        break;
                    case 3: //East
                        if (player.tempdir == 1){
                            if (gamemap[player.tileTo[1]][player.tileTo[0]+1]==0){
                                player.hasgoal = 0;
                                gamemap[player.tileTo[1]][player.tileTo[0]+1]=10;
                            };
                        } else {
                            if (gamemap[player.tileTo[1]][player.tileTo[0]-1]==0){
                                player.hasgoal = 0;
                                gamemap[player.tileTo[1]][player.tileTo[0]-1]=10;
                            };
                        };
                        break;
                };
            } else {
                switch (player.direct){
                    case 0: //North
                        if (gamemap[player.tileTo[1]-1][player.tileTo[0]]==10){
                            player.hasgoal = 8;
                            gamemap[player.tileTo[1]-1][player.tileTo[0]]=0;
                        };
                        break;
                    case 1: //South
                        if (gamemap[player.tileTo[1]+1][player.tileTo[0]]==10){
                            player.hasgoal = 8;
                            gamemap[player.tileTo[1]+1][player.tileTo[0]]=0;
                        };
                        break;
                    case 2: //West
                        if (gamemap[player.tileTo[1]][player.tileTo[0]-1]==10){
                            player.hasgoal = 8;
                            gamemap[player.tileTo[1]][player.tileTo[0]-1]=0;
                        };
                        break;
                    case 3: //East
                        if (gamemap[player.tileTo[1]][player.tileTo[0]+1]==10){
                            player.hasgoal = 8;
                            gamemap[player.tileTo[1]][player.tileTo[0]+1]=0;
                        };
                        break;
                };
            };
            keysDown[74] = false;
        };
        if(keysDown[87]){
            if (player.direct == 0){
                if (player.tileFrom[1]>0){
                    if (level[currentlevel].map[player.tileFrom[1]-1][player.tileFrom[0]]==0 ||
                        level[currentlevel].map[player.tileFrom[1]-1][player.tileFrom[0]]==6 ||
                        level[currentlevel].map[player.tileFrom[1]-1][player.tileFrom[0]]==8){
                        player.tileTo[1] -= 1;
                    };
                };
            } else {
                player.direct = 0;
            };
        } else {
            if(keysDown[83]){
                if (player.direct == 1){
                    if (player.tileFrom[1]<(mapH - 1)){
                        if (level[currentlevel].map[player.tileFrom[1]+1][player.tileFrom[0]]==0 ||
                            level[currentlevel].map[player.tileFrom[1]+1][player.tileFrom[0]]==6 ||
                            level[currentlevel].map[player.tileFrom[1]+1][player.tileFrom[0]]==8){
                            player.tileTo[1] += 1;
                        };
                    };
                } else {
                    player.direct = 1;
                };
            } else {
                if(keysDown[65]){
                    if (player.direct == 2){
                        if (player.tileFrom[0]>0){ 
                            if (level[currentlevel].map[player.tileFrom[1]][player.tileFrom[0]-1]==0 ||
                                level[currentlevel].map[player.tileFrom[1]][player.tileFrom[0]-1]==6 ||
                                level[currentlevel].map[player.tileFrom[1]][player.tileFrom[0]-1]==8){
                                player.tileTo[0] -= 1;
                            };
                        };
                    } else {
                        player.direct = 2;
                    };
                } else {
                    if(keysDown[68]){
                        if (player.direct == 3){
                            if (player.tileFrom[0]<(mapW - 1)){
                                if (level[currentlevel].map[player.tileFrom[1]][player.tileFrom[0]+1]==0 ||
                                    level[currentlevel].map[player.tileFrom[1]][player.tileFrom[0]+1]==6 ||
                                    level[currentlevel].map[player.tileFrom[1]][player.tileFrom[0]+1]==8){
                                    player.tileTo[0] += 1;
                                };
                            };
                        } else {
                            player.direct = 3;
                        };
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
            ctx.drawImage(getfloortype(j,i),viewport.offset[0]+j*tileW,viewport.offset[1]+i*tileH,tileW,tileH);
            if (gamemap[i][j]==9){
                ctx.drawImage(keycard_img,viewport.offset[0]+j*tileW,viewport.offset[1]+i*tileH,tileW,tileH);
            };
            if (gamemap[i][j]==10){
                ctx.drawImage(goal_img,viewport.offset[0]+j*tileW,viewport.offset[1]+i*tileH,tileW,tileH);
            };
        };
    };
    
    ctx.drawImage(
        player.source[player.tempdir*(player.direct+1+player.haskey+player.hasgoal)],
        viewport.offset[0]+player.position[0],
        viewport.offset[1]+player.position[1],
        player.dimensions[0],
        player.dimensions[1]
    );
    
    lastFrameTime = currentFrameTime;
    
    document.getElementById("time").innerHTML = "[" + player.tileTo[0] + "," + player.tileTo[1] + "]";

    // if (invertcheck){
    //     if (player.tileTo[1]==7 && player.tileTo[0]==13){
    //         invertcheck = false;
    //         player.tempdir = player.tempdir * -1;
    //     };
    // };
    
    // if (player.tileTo[1]!=7 && player.tileTo[0]!=13){
    //     invertcheck = true;
    // };

    requestAnimationFrame(drawGame);
    

};