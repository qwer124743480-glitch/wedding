//開始婚禮網站

function startWedding(){


let music=document.getElementById("music");


music.volume=0.5;


music.play();



document.getElementById("startScreen").style.display="none";


}



//音樂控制

function toggleMusic(){


let music=document.getElementById("music");


if(music.paused){

music.play();

}else{

music.pause();

}


}




//倒數計時


let weddingDate =
new Date("2026-11-22T18:00:00").getTime();



setInterval(function(){


let now =
new Date().getTime();


let distance =
weddingDate-now;



let day =
Math.floor(distance/(1000*60*60*24));



let hour =
Math.floor(
(distance%(1000*60*60*24))
/(1000*60*60)
);



let minute =
Math.floor(
(distance%(1000*60*60))
/(1000*60)
);



let second =
Math.floor(
(distance%(1000*60))
/1000
);



document.getElementById("timer").innerHTML =

day+"天 "+
hour+"小時 "+
minute+"分 "+
second+"秒";



},1000);





//照片輪播


let photos=[

"images/photo1.jpg",

"images/photo2.jpg",

"images/photo3.jpg"

];



let index=0;



setInterval(function(){


index++;


if(index>=photos.length){

index=0;

}


document.getElementById("photo").src=
photos[index];


},4000);
