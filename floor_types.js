//Lists out floor Types
function getfloortype(x,y){

    var floortype = './floors/';

    if (level_0_map.map[y][x]==1) { return floortype + '2_All_Walls.png'};

    var floorval = 1;
    var cornerval = 1;

    floorval = (level_0_map.map[y-1][x]==1) ? floorval * 2 : floorval * 1;
    floorval = (level_0_map.map[y+1][x]==1) ? floorval * 3 : floorval * 1;
    floorval = (level_0_map.map[y][x+1]==1) ? floorval * 5 : floorval * 1;
    floorval = (level_0_map.map[y][x-1]==1) ? floorval * 7 : floorval * 1;

    cornerval = (level_0_map.map[y-1][x-1]==1) ? cornerval * 2 : cornerval * 1;
    cornerval = (level_0_map.map[y-1][x+1]==1) ? cornerval * 3 : cornerval * 1;
    cornerval = (level_0_map.map[y+1][x-1]==1) ? cornerval * 5 : cornerval * 1;
    cornerval = (level_0_map.map[y+1][x+1]==1) ? cornerval * 7 : cornerval * 1;


    switch (floorval){

        case 6: //North South
            return floortype + '20_NS_Walls.png';
        case 35://East West
            return floortype + '19_EW_Walls.png';
        case 30://North East South
            return floortype + '31_NES_Walls.png';
        case 42://South West North
            return floortype + '29_SWN_Walls.png';
        case 70://West North East
            return floortype + '30_WNE_Walls.png';
        case 105://East South West
            return floortype + '32_ESW_Walls.png';
        case 1: //Empty
            switch (cornerval){

                case 1: //Empty
                    return floortype + '1_No_Walls.png';
                case 2: //NW
                    return floortype + '36_NW_Corner.png';
                case 3: //NE
                    return floortype + '33_NE_Corner.png';
                case 5: //SW
                    return floortype + '35_SW_Corner.png';
                case 6: //North
                    return floortype + '37_N_Corners.png';
                case 7://SE
                    return floortype + '34_SE_Corner.png';    
                case 10://West
                    return floortype + '40_W_Corners.png';
                case 14://NW - SE
                    return floortype + '42_NW_SE_Corners.png';    
                case 15://NE - SW
                    return floortype + '41_NE_SW_Corners.png';    
                case 21://East
                    return floortype + '38_E_Corners.png';
                case 30://North - West
                    return floortype + '46_NW_Corners.png';
                case 35://South
                    return floortype + '39_S_Corners.png';    
                case 42://North - East
                    return floortype + '43_NE_Corners.png';    
                case 70://South - West
                    return floortype + '45_SW_Corners.png';    
                case 105://South - East
                    return floortype + '44_SE_Corners.png';
                case 210://All
                   return floortype + '47_All_Corners.png';
            };

        case 2: //North

            cornerval = (cornerval%2 == 0) ? cornerval / 2 : cornerval;
            cornerval = (cornerval%3 == 0) ? cornerval / 3 : cornerval;

            switch (cornerval){
                case 1: //Empty
                    return floortype + '3_North_Wall.png';
                case 5: //SW
                    return floortype + '7_N_Wall_SW_Corner.png';
                case 7://SE
                    return floortype + '8_N_Wall_SE_Corner.png';    
                case 35://South
                    return floortype + '9_N_Wall_S_Corners.png';
            };

        case 3: //South
            cornerval = (cornerval%5 == 0) ? cornerval / 5 : cornerval;
            cornerval = (cornerval%7 == 0) ? cornerval / 7 : cornerval;
            
            switch (cornerval){
                case 1: //Empty
                    return floortype + '5_South_Wall.png';
                case 2: //NW
                    return floortype + '14_S_Wall_NW_Corner.png';    
                case 3: //NE
                    return floortype + '13_S_Wall_NE_Corner.png';
                case 6: //North
                    return floortype + '15_S_Wall_N_Corners.png';
            };

        case 5: //East
            cornerval = (cornerval%3 == 0) ? cornerval / 3 : cornerval;
            cornerval = (cornerval%7 == 0) ? cornerval / 7 : cornerval;

            switch (cornerval){
                case 1: //Empty
                    return floortype + '4_East_Wall.png';
                case 2: //NW
                    return floortype + '10_E_Wall_NW_Corner.png';    
                case 5: //SW
                    return floortype + '11_E_Wall_SW_Corner.png';    
                case 10://West
                    return floortype + '12_E_Wall_W_Corners.png';
            };

        case 7://West
            cornerval = (cornerval%2 == 0) ? cornerval / 2 : cornerval;
            cornerval = (cornerval%5 == 0) ? cornerval / 5 : cornerval;

            switch (cornerval){
                case 1: //Empty
                    return floortype + '6_West_Wall.png';
                case 3: //NE
                    return floortype + '17_W_Wall_NE_Corner.png';
                case 7://SE
                    return floortype + '16_W_Wall_SE_Corner.png';    
                case 21://East
                    return floortype + '18_W_Wall_E_Corners.png';
            };

        case 10://North East
            cornerval = (cornerval%2 == 0) ? cornerval / 2 : cornerval; //NW
            cornerval = (cornerval%3 == 0) ? cornerval / 3 : cornerval; //NE
            cornerval = (cornerval%7 == 0) ? cornerval / 7 : cornerval; //SE

            switch (cornerval){
                case 1: //Empty
                    return floortype + '21_NE_Walls.png';
                case 5: //SW
                    return floortype + '25_NE_Walls_SW_Corner.png';
            };

        case 14://North West
            cornerval = (cornerval%2 == 0) ? cornerval / 2 : cornerval; //NW
            cornerval = (cornerval%3 == 0) ? cornerval / 3 : cornerval; //NE
            cornerval = (cornerval%5 == 0) ? cornerval / 5 : cornerval; //SW

            switch (cornerval){
                case 1: //Empty
                    return floortype + '24_NW_Walls.png';
                case 7://SE
                    return floortype + '28_NW_Walls_SE_Corner.png';
            };

        case 15://South East
            cornerval = (cornerval%3 == 0) ? cornerval / 3 : cornerval; //NE
            cornerval = (cornerval%5 == 0) ? cornerval / 5 : cornerval; //SW
            cornerval = (cornerval%7 == 0) ? cornerval / 7 : cornerval; //SE

            switch (cornerval){
                case 1: //Empty
                    return floortype + '22_SE_Walls.png';
                case 2: //NW
                    return floortype + '26_SE_Walls_NW_Corner.png';
            };

        case 21://South West
            cornerval = (cornerval%2 == 0) ? cornerval / 2 : cornerval; //NW
            cornerval = (cornerval%5 == 0) ? cornerval / 5 : cornerval; //SW
            cornerval = (cornerval%7 == 0) ? cornerval / 7 : cornerval; //SE

            switch (cornerval){
                case 1: //Empty
                    return floortype + '23_SW_Walls.png';
                case 3: //NE
                    return floortype + '27_SW_Walls_NE_Corner.png';
            };

    };


};