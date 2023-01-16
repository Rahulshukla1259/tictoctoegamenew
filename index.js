
$(document).ready(function(){

    let turn="x"

    let audio=new Audio("ping.wav")

    let winaudio=new Audio('win.mp3')
    
$(".a1").click(()=>{

     $(".a1").html(`<h1 style="margin-top:0px;">${turn}</h1>`)

    turn=(turn==="x")?"0":"x"

    audio.play()

    $('.turn').html(`<h3 style="color:white; margin-left:8vw;  margin-top:30px">now >> ${turn} << turn </h3>`)

    wonfunction()

})

$(".a2").click(()=>{

    

    $(".a2").html(`<h1 style="margin-top:0px;">${turn}</h1>`)

    turn=(turn==="x")?"0":"x"

    audio.play()

    $('.turn').html(`<h3 style="color:white; margin-left:8vw;  margin-top:30px">now >> ${turn} << turn </h3>`)

    wonfunction()

})
$(".a3").click(()=>{

    

    $(".a3").html(`<h1 style="margin-top:0px;">${turn}</h1>`)

    turn=(turn==="x")?"0":"x"

    audio.play()

    $('.turn').html(`<h3 style="color:white; margin-left:8vw;  margin-top:30px">now >> ${turn} << turn </h3>`)



    wonfunction()

})
$(".a4").click(()=>{

    

    $(".a4").html(`<h1 style="margin-top:0px;">${turn}</h1>`)

    turn=(turn==="x")?"0":"x"
    audio.play()
    $('.turn').html(`<h3 style="color:white; margin-left:8vw;  margin-top:30px">now >> ${turn} << turn </h3>`)
    wonfunction()

})
$(".a5").click(()=>{

    

    $(".a5").html(`<h1 style="margin-top:0px;">${turn}</h1>`)

    turn=(turn==="x")?"0":"x"
    audio.play()
    $('.turn').html(`<h3 style="color:white; margin-left:8vw;  margin-top:30px">now >> ${turn} << turn </h3>`)
    wonfunction()

})
$(".a6").click(()=>{

    

    $(".a6").html(`<h1 style="margin-top:0px;">${turn}</h1>`)

    turn=(turn==="x")?"0":"x"
    audio.play()

    $('.turn').html(`<h3 style="color:white; margin-left:8vw;  margin-top:30px">now >> ${turn} << turn </h3>`)
    wonfunction()

})
$(".a7").click(()=>{

    

    $(".a7").html(`<h1 style="margin-top:0px;">${turn}</h1>`)

    turn=(turn==="x")?"0":"x"
    audio.play()

    $('.turn').html(`<h3 style="color:white; margin-left:8vw;  margin-top:30px">now >> ${turn} << turn </h3>`)
    wonfunction()

})
$(".a8").click(()=>{

    

    $(".a8").html(`<h1 style="margin-top:0px;">${turn}</h1>`)

    turn=(turn==="x")?"0":"x"
    audio.play()

    $('.turn').html(`<h3 style="color:white; margin-left:8vw;  margin-top:30px">now >> ${turn} << turn </h3>`)
    wonfunction()
})
$(".a9").click(()=>{

    

    $(".a9").html(`<h1 style="margin-top:0px;">${turn}</h1>`)

    turn=(turn==="x")?"0":"x"

    audio.play()

    $('.turn').html(`<h3 style="color:white; margin-left:8vw;  margin-top:30px">now >> ${turn} << turn </h3>`)

    wonfunction()

})


let t1=document.querySelector('.a1')
let t2=document.querySelector('.a2')
let t3=document.querySelector('.a3')
let t4=document.querySelector('.a4')
let t5=document.querySelector('.a5')
let t6=document.querySelector('.a6')
let t7=document.querySelector('.a7')
let t8=document.querySelector('.a8')
let t9=document.querySelector('.a9')

let wonfunction=()=>{

    if(t1.innerHTML===(`<h1 style="margin-top:0px;">x</h1>`)&&t2.innerHTML===(`<h1 style="margin-top:0px;">x</h1>`)&&t3.innerHTML===(`<h1 style="margin-top:0px;">x</h1>`)){

        $('.win').html(`<h3 style="color:white; margin-left:16vw;  margin-top:30px"> X-WON </h3>`)

        winaudio.play()
     
        
    }

    if(t1.innerHTML===(`<h1 style="margin-top:0px;">0</h1>`)&&t2.innerHTML===(`<h1 style="margin-top:0px;">0</h1>`)&&t3.innerHTML===(`<h1 style="margin-top:0px;">0</h1>`)){

        $('.win').html(`<h3 style="color:white; margin-left:16vw;  margin-top:30px"> 0-WON </h3>`)

        winaudio.play()
    }

    if(t4.innerHTML===(`<h1 style="margin-top:0px;">x</h1>`)&&t5.innerHTML===(`<h1 style="margin-top:0px;">x</h1>`)&&t6.innerHTML===(`<h1 style="margin-top:0px;">x</h1>`)){
        
        $('.win').html(`<h3 style="color:white; margin-left:16vw;  margin-top:30px"> X-WON </h3>`)

        winaudio.play()
       }
   
       if(t4.innerHTML===(`<h1 style="margin-top:0px;">0</h1>`)&&t5.innerHTML===(`<h1 style="margin-top:0px;">0</h1>`)&&t6.innerHTML===(`<h1 style="margin-top:0px;">0</h1>`)){
   
        $('.win').html(`<h3 style="color:white; margin-left:16vw;  margin-top:30px"> 0-WON </h3>`)

        winaudio.play()
       }

       if(t7.innerHTML===(`<h1 style="margin-top:0px;">x</h1>`)&&t8.innerHTML===(`<h1 style="margin-top:0px;">x</h1>`)&&t9.innerHTML===(`<h1 style="margin-top:0px;">x</h1>`)){
        
        $('.win').html(`<h3 style="color:white; margin-left:16vw;  margin-top:30px"> X-WON </h3>`)
        winaudio.play()
       }
   
       if(t7.innerHTML===(`<h1 style="margin-top:0px;">0</h1>`)&&t8.innerHTML===(`<h1 style="margin-top:0px;">0</h1>`)&&t9.innerHTML===(`<h1 style="margin-top:0px;">0</h1>`)){
   
        $('.win').html(`<h3 style="color:white; margin-left:16vw;  margin-top:30px"> 0-WON </h3>`)
        winaudio.play()
       }

       if(t1.innerHTML===(`<h1 style="margin-top:0px;">x</h1>`)&&t5.innerHTML===(`<h1 style="margin-top:0px;">x</h1>`)&&t9.innerHTML===(`<h1 style="margin-top:0px;">x</h1>`)){
        $('.win').html(`<h3 style="color:white; margin-left:16vw;  margin-top:30px"> X-WON </h3>`)

        winaudio.play()
           
       }
   
       if(t1.innerHTML===(`<h1 style="margin-top:0px;">0</h1>`)&&t5.innerHTML===(`<h1 style="margin-top:0px;">0</h1>`)&&t9.innerHTML===(`<h1 style="margin-top:0px;">0</h1>`)){
   
        $('.win').html(`<h3 style="color:white; margin-left:16vw;  margin-top:30px"> 0-WON </h3>`)
        winaudio.play()
       }

       if(t7.innerHTML===(`<h1 style="margin-top:0px;">x</h1>`)&&t5.innerHTML===(`<h1 style="margin-top:0px;">x</h1>`)&&t3.innerHTML===(`<h1 style="margin-top:0px;">x</h1>`)){
        $('.win').html(`<h3 style="color:white; margin-left:16vw;  margin-top:30px"> X-WON </h3>`)

        winaudio.play()
           
       }
   
       if(t7.innerHTML===(`<h1 style="margin-top:0px;">0</h1>`)&&t5.innerHTML===(`<h1 style="margin-top:0px;">0</h1>`)&&t3.innerHTML===(`<h1 style="margin-top:0px;">0</h1>`)){
   
        $('.win').html(`<h3 style="color:white; margin-left:16vw;  margin-top:30px"> 0-WON </h3>`)

        winaudio.play()
       }

       if(t1.innerHTML===(`<h1 style="margin-top:0px;">x</h1>`)&&t4.innerHTML===(`<h1 style="margin-top:0px;">x</h1>`)&&t7.innerHTML===(`<h1 style="margin-top:0px;">x</h1>`)){
        
        $('.win').html(`<h3 style="color:white; margin-left:16vw;  margin-top:30px"> X-WON </h3>`)
        winaudio.play()
       }
   
       if(t1.innerHTML===(`<h1 style="margin-top:0px;">0</h1>`)&&t4.innerHTML===(`<h1 style="margin-top:0px;">0</h1>`)&&t7.innerHTML===(`<h1 style="margin-top:0px;">0</h1>`)){
   
        $('.win').html(`<h3 style="color:white; margin-left:16vw;  margin-top:30px"> 0-WON </h3>`)

        winaudio.play()
           
       }
       if(t5.innerHTML===(`<h1 style="margin-top:0px;">x</h1>`)&&t2.innerHTML===(`<h1 style="margin-top:0px;">x</h1>`)&&t8.innerHTML===(`<h1 style="margin-top:0px;">x</h1>`)){
       
        $('.win').html(`<h3 style="color:white; margin-left:16vw;  margin-top:30px"> X-WON </h3>`)

        winaudio.play()
       }
   
       if(t5.innerHTML===(`<h1 style="margin-top:0px;">0</h1>`)&&t2.innerHTML===(`<h1 style="margin-top:0px;">0</h1>`)&&t8.innerHTML===(`<h1 style="margin-top:0px;">0</h1>`)){
        $('.win').html(`<h3 style="color:white; margin-left:16vw;  margin-top:30px"> 0-WON </h3>`)

        winaudio.play()
           
       }

       if(t9.innerHTML===(`<h1 style="margin-top:0px;">x</h1>`)&&t6.innerHTML===(`<h1 style="margin-top:0px;">x</h1>`)&&t3.innerHTML===(`<h1 style="margin-top:0px;">x</h1>`)){
        
        $('.win').html(`<h3 style="color:white; margin-left:16vw;  margin-top:30px"> X-WON </h3>`)

        winaudio.play()
       }
   
       if(t9.innerHTML===(`<h1 style="margin-top:0px;">0</h1>`)&&t6.innerHTML===(`<h1 style="margin-top:0px;">0</h1>`)&&t3.innerHTML===(`<h1 style="margin-top:0px;">0</h1>`)){
   
        $('.win').html(`<h3 style="color:white; margin-left:16vw;  margin-top:30px"> 0-WON </h3>`)
        winaudio.play()
       }



}



$('.btn').click(()=>{

    $('.text').html(' ')

    turn="x"
    $('.win').html('')

    $('.turn').html(`<h3 style="color:white; margin-left:8vw;  margin-top:30px">now >> x << turn </h3>`)

    winaudio.pause()

})


})