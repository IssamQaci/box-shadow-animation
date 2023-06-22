let x = 10;
let y = 10;
let color = "black ";
let shadow = "";
function func(){
    inter1 = setInterval(() => {
        document.getElementById("contact").style.boxShadow = color + (x) + "px " + (y) + "px " + shadow;
        y -= 0.2;
        if(y <= -10){
            inter2 = setInterval(() => {
                document.getElementById("contact").style.boxShadow = color + (x) + "px " + (y) + "px " + shadow;
                x -= 0.2;
                if(x <= -10){
                    inter3 = setInterval(() => {
                        document.getElementById("contact").style.boxShadow = color + (x) + "px " + (y) + "px "+ shadow;
                        y += 0.2;
                        if(y >= 10){
                            inter4 = setInterval(() => {
                                document.getElementById("contact").style.boxShadow = color + (x) + "px " + (y) + "px "+ shadow;
                                x += 0.2;
                                if( x >= 10){
                                    func();
                                    clearInterval(inter4);
                                }
                            }, 20);
                            clearInterval(inter3);
                        }
                    }, 20);
                    clearInterval(inter2);
                }
            }, 20);
            clearInterval(inter1);
        }
    }, 20);
}


function getmouseposition(event){
    let mouseX =  event.clientX - 300;
    let mouseY =  event.clientY -350;
    let shadowX = 10;
    let shadowY = 10;
    document.getElementById("x").innerHTML = mouseX;
    document.getElementById("y").innerHTML = mouseY;
    if(mouseX > 50) shadowX = 10;
    if(mouseX < -50) shadowX = -10;
    if(mouseY > 50) shadowY = 10;
    if(mouseY < -50) shadowY = -10;
    document.getElementById("contact").style.boxShadow = color + (shadowX) + "px " + (shadowY) + "px " + shadow;

}   
