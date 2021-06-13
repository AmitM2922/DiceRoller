document.getElementById("btn").addEventListener("click",function(){
    setTimeout(function(){
        var rn=Math.random()*6;
        var ri=Math.floor(rn) + 1;
        document.querySelector(".img").setAttribute("src",+ri+".png");
        document.getElementById("result").innerHTML=ri;
    },100)
})
