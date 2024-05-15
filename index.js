var yellow_chance=true;
var blue_Chance=false;
var yellowcoin = 1;
document.querySelector(".dice_img1").addEventListener("click",function(){
    if(yellow_chance==true){
        document.getElementById("block"+yellowcoin).classList.remove("yellowcoin_block");
        document.getElementById("blockimg"+yellowcoin).classList.remove("current_yellow_block_img");
        random = Math.floor(Math.random(0,1)*6)+1;
        document.querySelector(".dice_img1").setAttribute("src","./dice images/dice"+random+".png");
        if(100>=yellowcoin+random){
            yellowcoin=yellowcoin+random;
        }
        yellowcoin=stair_snake(yellowcoin);
        console.log("yellowcon=>"+yellowcoin);
        setTimeout(() => {
            document.getElementById("block"+yellowcoin).classList.add("yellow_block");
            document.getElementById("blockimg"+yellowcoin).classList.add("current_yellow_block_img");
        }, 500);
    }
    document.getElementById("dice_img1").classList.remove("dice_img_chance");
    winner(yellowcoin,"YELLOW");
    yellow_chance=false;
    blue_Chance=true;
    
})


var bluecoin = 1;
document.querySelector(".dice_img2").addEventListener("click",function(){
    if(blue_Chance==true){
        document.querySelector("#dice_img2").classList.add("dice_img_chance");
        document.getElementById("block"+bluecoin).classList.remove("blue_block");
        document.getElementById("blockimg"+bluecoin).classList.remove("current_blue_block_img");
        random = Math.floor(Math.random(0,1)*6)+1;
        document.querySelector(".dice_img2").setAttribute("src","./dice images/dice"+random+".png");
        if(100>=bluecoin+random){
            bluecoin=bluecoin+random;
        }
        bluecoin=stair_snake(bluecoin);
        console.log("yellowcoin=>"+yellowcoin);
        setTimeout(() => {
            document.getElementById("block"+bluecoin).classList.add("blue_block");
            document.getElementById("blockimg"+bluecoin).classList.add("current_blue_block_img");
        }, 500);

    }
    document.getElementById("dice_img2").classList.remove("dice_img_chance");
    winner(bluecoin ,"BLUE");
    blue_Chance=false;
    yellow_chance=true;
    
})


function stair_snake(random){    
    switch (random){
        case 4:
            return 14;
        case 9:
            return 31;
        case 17:
            return 7;
        case 21:
            return 42;
        case 28:
            return 84;
        case 51:
            return 67;
        case 54:
            return 34;
        case 62:
            return 19;
        case 64:
            return 60;
        case 71:
            return 91;
        case 80:
            return 100;
        case 87:
            return 24;
        case 93:
            return 73;
        case 95:
            return 75;
        case 98:
            return 79;
        default:
            return random;

    }
}

function winner(random,colour){
    if(random==100){
        document.getElementById("heading").textContent=colour+"   WINS";
        console.log(document.getElementById("heading").innerHTML);
        yellow_chance=false;
        blue_Chance=false;
    }

}
