function playMusic(){

    let music = document.getElementById("music");

    music.play();

}






// 婚禮倒數

let weddingDate = 
new Date("2026-11-22T18:00:00").getTime();




setInterval(function(){


    let now = new Date().getTime();


    let distance = weddingDate - now;



    let day =
    Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );



    let hour =
    Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );



    let min =
    Math.floor(
        (distance % (1000 * 60 * 60))
        /
        (1000 * 60)
    );



    let sec =
    Math.floor(
        (distance % (1000 * 60))
        /
        1000
    );



    document.getElementById("countdown").innerHTML =

    "距離婚禮還有<br>" +

    day + "天 " +

    hour + "小時 " +

    min + "分 " +

    sec + "秒";



},1000);








// ======================
// 白色小花飄落
// ======================


setInterval(()=>{


    let flower = document.createElement("div");


    flower.className="petal";


    // 白色小花

    flower.innerHTML="✿";



    flower.style.left =

    Math.random()*100+"vw";



    flower.style.animationDuration =

    (6 + Math.random()*6) + "s";



    flower.style.fontSize =

    (14 + Math.random()*18) + "px";



    document.body.appendChild(flower);



    setTimeout(()=>{


        flower.remove();


    },12000);



},600);
