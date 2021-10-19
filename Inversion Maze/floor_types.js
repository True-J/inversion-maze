//Lists out Images

var Player_East_Goal_img = new Image();
var Player_East_Key_Goal_img = new Image();
var Player_East_Key_img = new Image();
var Player_East_img = new Image();
var Player_West_Goal_img = new Image();
var Player_West_Key_Goal_img = new Image();
var Player_West_Key_img = new Image();
var Player_West_img = new Image();
var Player_South_Goal_img = new Image();
var Player_South_Key_Goal_img = new Image();
var Player_South_Key_img = new Image();
var Player_South_img = new Image();
var Player_North_Goal_img = new Image();
var Player_North_Key_Goal_img = new Image();
var Player_North_Key_img = new Image();
var Player_North_img = new Image();

var button_img_0 = new Image();
var button_img_1 = new Image();
var box_img = new Image();
var keycard_img = new Image();
var goal_img = new Image();

var EW_Power_Door_0_img = new Image();
var EW_Power_Door_1_img = new Image();
var EW_Power_Door_2_img = new Image();
var EW_Power_Door_3_img = new Image();
var EW_Power_Door_4_img = new Image();

var NS_Power_Door_0_img = new Image();
var NS_Power_Door_1_img = new Image();
var NS_Power_Door_2_img = new Image();
var NS_Power_Door_3_img = new Image();
var NS_Power_Door_4_img = new Image();

var EW_Locked_Door_0_img = new Image();
var EW_Locked_Door_1_img = new Image();
var NS_Locked_Door_0_img = new Image();
var NS_Locked_Door_1_img = new Image();

var _All_Walls = new Image()
var _NS_Walls = new Image()
var _EW_Walls = new Image()
var _NES_Walls = new Image()
var _SWN_Walls = new Image()
var _WNE_Walls = new Image()
var _ESW_Walls = new Image()
var _No_Walls = new Image()
var _NW_Corner = new Image()
var _NE_Corner = new Image()
var _SW_Corner = new Image()
var _N_Corners = new Image()
var _SE_Corner = new Image()
var _W_Corners = new Image()
var _NW_SE_Corners = new Image()
var _NE_SW_Corners = new Image()
var _E_Corners = new Image()
var _NW_Corners = new Image()
var _S_Corners = new Image()
var _NE_Corners = new Image()
var _SW_Corners = new Image()
var _SE_Corners = new Image()
var _All_Corners = new Image()
var _North_Wall = new Image()
var _N_Wall_SW_Corner = new Image()
var _N_Wall_SE_Corner = new Image()
var _N_Wall_S_Corners = new Image()
var _South_Wall = new Image()
var _S_Wall_NW_Corner = new Image()
var _S_Wall_NE_Corner = new Image()
var _S_Wall_N_Corners = new Image()
var _East_Wall = new Image()
var _E_Wall_NW_Corner = new Image()
var _E_Wall_SW_Corner = new Image()
var _E_Wall_W_Corners = new Image()
var _West_Wall = new Image()
var _W_Wall_NE_Corner = new Image()
var _W_Wall_SE_Corner = new Image()
var _W_Wall_E_Corners = new Image()
var _NE_Walls = new Image()
var _NE_Walls_SW_Corner = new Image()
var _NW_Walls = new Image()
var _NW_Walls_SE_Corner = new Image()
var _SE_Walls = new Image()
var _SE_Walls_NW_Corner = new Image()
var _SW_Walls = new Image()
var _SW_Walls_NE_Corner = new Image()

function loadstaticimages() {
    box_img.src = './level_objects/Box.png';
    button_img_0.src = './level_objects/Button_0.png';
    button_img_1.src = './level_objects/Button_1.png';
};

function loadfloortype() {

    Player_East_Goal_img.src = './player_images/Player_East_Goal.png';
    Player_East_Key_Goal_img.src = './player_images/Player_East_Key_Goal.png';
    Player_East_Key_img.src = './player_images/Player_East_Key.png';
    Player_East_img.src = './player_images/Player_East.png';
    Player_West_Goal_img.src = './player_images/Player_West_Goal.png';
    Player_West_Key_Goal_img.src = './player_images/Player_West_Key_Goal.png';
    Player_West_Key_img.src = './player_images/Player_West_Key.png';
    Player_West_img.src = './player_images/Player_West.png';
    Player_South_Goal_img.src = './player_images/Player_South_Goal.png';
    Player_South_Key_Goal_img.src = './player_images/Player_South_Key_Goal.png';
    Player_South_Key_img.src = './player_images/Player_South_Key.png';
    Player_South_img.src = './player_images/Player_South.png';
    Player_North_Goal_img.src = './player_images/Player_North_Goal.png';
    Player_North_Key_Goal_img.src = './player_images/Player_North_Key_Goal.png';
    Player_North_Key_img.src = './player_images/Player_North_Key.png';
    Player_North_img.src = './player_images/Player_North.png';

    goal_img.src = './level_objects/Goal.png';
    keycard_img.src = './level_objects/KeyCard.png';

    EW_Power_Door_0_img.src = './floors/EW_Power_Door_0.png';
    EW_Power_Door_1_img.src = './floors/EW_Power_Door_1.png';
    EW_Power_Door_2_img.src = './floors/EW_Power_Door_2.png';
    EW_Power_Door_3_img.src = './floors/EW_Power_Door_3.png';
    EW_Power_Door_4_img.src = './floors/EW_Power_Door_4.png';

    NS_Power_Door_0_img.src = './floors/NS_Power_Door_0.png';
    NS_Power_Door_1_img.src = './floors/NS_Power_Door_1.png';
    NS_Power_Door_2_img.src = './floors/NS_Power_Door_2.png';
    NS_Power_Door_3_img.src = './floors/NS_Power_Door_3.png';
    NS_Power_Door_4_img.src = './floors/NS_Power_Door_4.png';

    EW_Locked_Door_0_img.src = './floors/EW_Locked_Door_0.png';
    EW_Locked_Door_1_img.src = './floors/EW_Locked_Door_1.png';
    NS_Locked_Door_0_img.src = './floors/NS_Locked_Door_0.png';
    NS_Locked_Door_1_img.src = './floors/NS_Locked_Door_1.png';

    _All_Walls.src = './floors/2_All_Walls.png';
    _NS_Walls.src = './floors/20_NS_Walls.png';
    _EW_Walls.src = './floors/19_EW_Walls.png';
    _NES_Walls.src = './floors/31_NES_Walls.png';
    _SWN_Walls.src = './floors/29_SWN_Walls.png';
    _WNE_Walls.src = './floors/30_WNE_Walls.png';
    _ESW_Walls.src = './floors/32_ESW_Walls.png';
    _No_Walls.src = './floors/1_No_Walls.png';
    _NW_Corner.src = './floors/36_NW_Corner.png';
    _NE_Corner.src = './floors/33_NE_Corner.png';
    _SW_Corner.src = './floors/35_SW_Corner.png';
    _N_Corners.src = './floors/37_N_Corners.png';
    _SE_Corner.src = './floors/34_SE_Corner.png';
    _W_Corners.src = './floors/40_W_Corners.png';
    _NW_SE_Corners.src = './floors/42_NW_SE_Corners.png';
    _NE_SW_Corners.src = './floors/41_NE_SW_Corners.png';
    _E_Corners.src = './floors/38_E_Corners.png';
    _NW_Corners.src = './floors/46_NW_Corners.png';
    _S_Corners.src = './floors/39_S_Corners.png';
    _NE_Corners.src = './floors/43_NE_Corners.png';
    _SW_Corners.src = './floors/45_SW_Corners.png';
    _SE_Corners.src = './floors/44_SE_Corners.png';
    _All_Corners.src = './floors/47_All_Corners.png';
    _North_Wall.src = './floors/3_North_Wall.png';
    _N_Wall_SW_Corner.src = './floors/7_N_Wall_SW_Corner.png';
    _N_Wall_SE_Corner.src = './floors/8_N_Wall_SE_Corner.png';
    _N_Wall_S_Corners.src = './floors/9_N_Wall_S_Corners.png';
    _South_Wall.src = './floors/5_South_Wall.png';
    _S_Wall_NW_Corner.src = './floors/14_S_Wall_NW_Corner.png';
    _S_Wall_NE_Corner.src = './floors/13_S_Wall_NE_Corner.png';
    _S_Wall_N_Corners.src = './floors/15_S_Wall_N_Corners.png';
    _East_Wall.src = './floors/4_East_Wall.png';
    _E_Wall_NW_Corner.src = './floors/10_E_Wall_NW_Corner.png';
    _E_Wall_SW_Corner.src = './floors/11_E_Wall_SW_Corner.png';
    _E_Wall_W_Corners.src = './floors/12_E_Wall_W_Corners.png';
    _West_Wall.src = './floors/6_West_Wall.png';
    _W_Wall_NE_Corner.src = './floors/17_W_Wall_NE_Corner.png';
    _W_Wall_SE_Corner.src = './floors/16_W_Wall_SE_Corner.png';
    _W_Wall_E_Corners.src = './floors/18_W_Wall_E_Corners.png';
    _NE_Walls.src = './floors/21_NE_Walls.png';
    _NE_Walls_SW_Corner.src = './floors/25_NE_Walls_SW_Corner.png';
    _NW_Walls.src = './floors/24_NW_Walls.png';
    _NW_Walls_SE_Corner.src = './floors/28_NW_Walls_SE_Corner.png';
    _SE_Walls.src = './floors/22_SE_Walls.png';
    _SE_Walls_NW_Corner.src = './floors/26_SE_Walls_NW_Corner.png';
    _SW_Walls.src = './floors/23_SW_Walls.png';
    _SW_Walls_NE_Corner.src = './floors/27_SW_Walls_NE_Corner.png';
};

function getfloortype(x,y){

    if (level[currentlevel].map[y][x]==1) { return _All_Walls };
    if (level[currentlevel].map[y][x]==9) { return keycard_img };
    if (level[currentlevel].map[y][x]==10) { return goal_img };


    if (level[currentlevel].map[y][x]>1) {
        if(level[currentlevel].map[y+1][x]==1){
            if (level[currentlevel].map[y][x]==2) { return NS_Power_Door_0_img };
            if (level[currentlevel].map[y][x]==3) { return NS_Power_Door_1_img };
            if (level[currentlevel].map[y][x]==4) { return NS_Power_Door_2_img };
            if (level[currentlevel].map[y][x]==5) { return NS_Power_Door_3_img };
            if (level[currentlevel].map[y][x]==6) { return NS_Power_Door_4_img };
            if (level[currentlevel].map[y][x]==7) { return NS_Locked_Door_0_img };
            if (level[currentlevel].map[y][x]==8) { return NS_Locked_Door_1_img };
        } else {
            if (level[currentlevel].map[y][x]==2) { return EW_Power_Door_0_img };
            if (level[currentlevel].map[y][x]==3) { return EW_Power_Door_1_img };
            if (level[currentlevel].map[y][x]==4) { return EW_Power_Door_2_img };
            if (level[currentlevel].map[y][x]==5) { return EW_Power_Door_3_img };
            if (level[currentlevel].map[y][x]==6) { return EW_Power_Door_4_img };
            if (level[currentlevel].map[y][x]==7) { return EW_Locked_Door_0_img };
            if (level[currentlevel].map[y][x]==8) { return EW_Locked_Door_1_img };
        };
    };

    var floorval = 1;
    var cornerval = 1;

    floorval = (level[currentlevel].map[y-1][x]==1) ? floorval * 2 : floorval * 1;
    floorval = (level[currentlevel].map[y+1][x]==1) ? floorval * 3 : floorval * 1;
    floorval = (level[currentlevel].map[y][x+1]==1) ? floorval * 5 : floorval * 1;
    floorval = (level[currentlevel].map[y][x-1]==1) ? floorval * 7 : floorval * 1;

    cornerval = (level[currentlevel].map[y-1][x-1]==1) ? cornerval * 2 : cornerval * 1;
    cornerval = (level[currentlevel].map[y-1][x+1]==1) ? cornerval * 3 : cornerval * 1;
    cornerval = (level[currentlevel].map[y+1][x-1]==1) ? cornerval * 5 : cornerval * 1;
    cornerval = (level[currentlevel].map[y+1][x+1]==1) ? cornerval * 7 : cornerval * 1;


    switch (floorval){

        case 6: //North South
            return _NS_Walls;
        case 35://East West
            return _EW_Walls;
        case 30://North East South
            return _NES_Walls;
        case 42://South West North
            return _SWN_Walls;
        case 70://West North East
            return _WNE_Walls;
        case 105://East South West
            return _ESW_Walls;
        case 1: //Empty
            switch (cornerval){

                case 1: //Empty
                    return _No_Walls;
                case 2: //NW
                    return _NW_Corner;
                case 3: //NE
                    return _NE_Corner;
                case 5: //SW
                    return _SW_Corner;
                case 6: //North
                    return _N_Corners;
                case 7://SE
                    return _SE_Corner;    
                case 10://West
                    return _W_Corners;
                case 14://NW - SE
                    return _NW_SE_Corners;    
                case 15://NE - SW
                    return _NE_SW_Corners;    
                case 21://East
                    return _E_Corners;
                case 30://North - West
                    return _NW_Corners;
                case 35://South
                    return _S_Corners;    
                case 42://North - East
                    return _NE_Corners;    
                case 70://South - West
                    return _SW_Corners;    
                case 105://South - East
                    return _SE_Corners;
                case 210://All
                   return _All_Corners;
            };

        case 2: //North

            cornerval = (cornerval%2 == 0) ? cornerval / 2 : cornerval;
            cornerval = (cornerval%3 == 0) ? cornerval / 3 : cornerval;

            switch (cornerval){
                case 1: //Empty
                    return _North_Wall;
                case 5: //SW
                    return _N_Wall_SW_Corner;
                case 7://SE
                    return _N_Wall_SE_Corner;    
                case 35://South
                    return _N_Wall_S_Corners;
            };

        case 3: //South
            cornerval = (cornerval%5 == 0) ? cornerval / 5 : cornerval;
            cornerval = (cornerval%7 == 0) ? cornerval / 7 : cornerval;
            
            switch (cornerval){
                case 1: //Empty
                    return _South_Wall;
                case 2: //NW
                    return _S_Wall_NW_Corner;    
                case 3: //NE
                    return _S_Wall_NE_Corner;
                case 6: //North
                    return _S_Wall_N_Corners;
            };

        case 5: //East
            cornerval = (cornerval%3 == 0) ? cornerval / 3 : cornerval;
            cornerval = (cornerval%7 == 0) ? cornerval / 7 : cornerval;

            switch (cornerval){
                case 1: //Empty
                    return _East_Wall;
                case 2: //NW
                    return _E_Wall_NW_Corner;    
                case 5: //SW
                    return _E_Wall_SW_Corner;    
                case 10://West
                    return _E_Wall_W_Corners;
            };

        case 7://West
            cornerval = (cornerval%2 == 0) ? cornerval / 2 : cornerval;
            cornerval = (cornerval%5 == 0) ? cornerval / 5 : cornerval;

            switch (cornerval){
                case 1: //Empty
                    return _West_Wall;
                case 3: //NE
                    return _W_Wall_NE_Corner;
                case 7://SE
                    return _W_Wall_SE_Corner;    
                case 21://East
                    return _W_Wall_E_Corners;
            };

        case 10://North East
            cornerval = (cornerval%2 == 0) ? cornerval / 2 : cornerval; //NW
            cornerval = (cornerval%3 == 0) ? cornerval / 3 : cornerval; //NE
            cornerval = (cornerval%7 == 0) ? cornerval / 7 : cornerval; //SE

            switch (cornerval){
                case 1: //Empty
                    return _NE_Walls;
                case 5: //SW
                    return _NE_Walls_SW_Corner;
            };

        case 14://North West
            cornerval = (cornerval%2 == 0) ? cornerval / 2 : cornerval; //NW
            cornerval = (cornerval%3 == 0) ? cornerval / 3 : cornerval; //NE
            cornerval = (cornerval%5 == 0) ? cornerval / 5 : cornerval; //SW

            switch (cornerval){
                case 1: //Empty
                    return _NW_Walls;
                case 7://SE
                    return _NW_Walls_SE_Corner;
            };

        case 15://South East
            cornerval = (cornerval%3 == 0) ? cornerval / 3 : cornerval; //NE
            cornerval = (cornerval%5 == 0) ? cornerval / 5 : cornerval; //SW
            cornerval = (cornerval%7 == 0) ? cornerval / 7 : cornerval; //SE

            switch (cornerval){
                case 1: //Empty
                    return _SE_Walls;
                case 2: //NW
                    return _SE_Walls_NW_Corner;
            };

        case 21://South West
            cornerval = (cornerval%2 == 0) ? cornerval / 2 : cornerval; //NW
            cornerval = (cornerval%5 == 0) ? cornerval / 5 : cornerval; //SW
            cornerval = (cornerval%7 == 0) ? cornerval / 7 : cornerval; //SE

            switch (cornerval){
                case 1: //Empty
                    return _SW_Walls;
                case 3: //NE
                    return _SW_Walls_NE_Corner;
            };

    };


};

function getdoortype(door,state,x,y){
    if ((level[currentlevel].map[y-1][x]==1)){
        if (door == "Powered"){
            Powered_Door_img.src = './level_objects/NS_Power_Door_' + state + '.png';
            return Powered_Door_img;
        } else {
            Locked_Door_img.src = './level_objects/NS_Locked_Door_' + state + '.png';
            return Locked_Door_img;
        };
    } else {
        if (door == "Powered"){
            Powered_Door_img.src = './level_objects/EW_Power_Door_' + state + '.png';
            return Powered_Door_img;
        } else {
            Locked_Door_img.src = './level_objects/EW_Locked_Door_' + state + '.png';
            return Locked_Door_img;
        };
    };
};

function getbuttontype(state){
    if (state == 0){
        return button_img_0;
    } else {
        return button_img_1;
    };
};