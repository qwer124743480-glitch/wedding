let playing = false;


// 音樂播放 / 暫停

function playMusic(){

    const music = document.getElementById("music");

    if(!music) return;


    if(playing){

        music.pause();

        playing = false;

    }else{

        music.play();

        playing = true;

    }

}





// 婚禮倒數

let weddingDate =
new Date("2026-11-22T18:00:00").getTime();



setInterval(function(){


let now =
new Date().getTime();


let distance =
weddingDate - now;



let day =
Math.floor(
distance/(1000*60*60*24)
);



let hour =
Math.floor(
(distance%(1000*60*60*24))
/
(1000*60*60)
);



let min =
Math.floor(
(distance%(1000*60*60))
/
(1000*60)
);



let sec =
Math.floor(
(distance%(1000*60))
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








// 白色花瓣動畫


setInterval(()=>{


let p = document.createElement("div");


p.className = "petal";


p.innerHTML = "❀";



p.style.left =
Math.random()*100 + "%";



p.style.animationDuration =
(5 + Math.random()*5) + "s";



document.body.appendChild(p);



setTimeout(()=>{

p.remove();

},10000);



},500);
