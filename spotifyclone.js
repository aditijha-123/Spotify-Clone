 let audioElement= new Audio('songs/1.mp3');
 let masterplay   =  document.getElementById('masterPlay');
 let myprogress = document.getElementById('myprogressbar');
 let icon = document.querySelectorAll('.songitemplay');
 let next = document.getElementById('next');
 let previous= document.getElementById('previous');
 
 let songarray = [{  songName : "baarishein" , filePath :"1.mp3" , coverPath: " cover/1.jpg"},
                  {  songName : "baby" , filePath :"2.mp3" , coverPath: " cover/2.jpg"},
                  {  songName : "Jeena Jeena" , filePath :"3.mp3" , coverPath: " cover/3.jpg"},
                  {  songName : "obsesssed" , filePath :"4.mp3" , coverPath: " cover/4.jpg"},
                  {  songName : "let me love you" , filePath :"5.mp3" , coverPath: " cover/5.jpg"},
                  {  songName : "tu hai to mughe fir aur kya chahiye" , filePath :"6.mp3" , coverPath: " cover/6.jpg"},
                  {  songName : "kabhi kabhi aditi" , filePath :"7.mp3" , coverPath: " cover/7.jpg"},
                  {  songName : "zara sa" , filePath :"8.mp3" , coverPath: " cover/8.jpg"},
                  {  songName : "dil ibadat" , filePath :"9.mp3" , coverPath: " cover/9.jpg"},
                  {  songName : "main rahoon ya na" , filePath :"10.mp3" , coverPath: " cover/10.jpg"},
                 ]
  
    const makeAllPlays = ()=>{
        Array.from(document.getElementsByClassName('songitemplay')).forEach(function (element) {
            element.classList.remove('fa-pause');
            element.classList.add('fa-play');
        })
    }
    
    Array.from(document.getElementsByClassName('songitem')).forEach((element)=>{
        element.addEventListener('click', (e)=>{ 
            if(audioElement.paused || audioElement.currentTime==0){
                makeAllPlays();
                index = parseInt(e.target.id);
                e.target.classList.remove('fa-play');
                e.target.classList.add('fa-pause');
                audioElement.src = `songs/${index}.mp3`;
               audioElement.currentTime = 0;
                audioElement.play();
                masterplay.classList.remove('fa-play');
                masterplay.classList.add('fa-pause');
            }
            else{
                audioElement.pause();
                e.target.classList.remove('fa-pause');
                e.target.classList.add('fa-play');
                masterplay.classList.remove('fa-pause');
                masterplay.classList.add('fa-play');
            }
            })
           
    })
// for(let i=0;i<icon.length;i++){
//     icon[i].addEventListener("click",function(event){
//         index=parseInt(event.target.id);
//         audioElement.src = `songs/${index}.mp3`;
//     if( !audioElement.paused){
//        makeAllPlays();
//           audioElement.pause();
//          event.target.classList.remove('fa-pause');
//          event.target.classList.add('fa-play');
        
        
//         }
//         if(audioElement.paused || audioElement.currentTime ==0){
//             // event.target.classList.remove('fa-pause');
//             // event.target.classList.add('fa-play');
//             // masterplay.classList.remove('fa-play');
//             // masterplay.classList.add('fa-pause');
//             makeAllPlays();
//             audioElement.play();
//             event.target.classList.remove('fa-play');
//            event.target.classList.add('fa-pause');
//            }
//         },false);}


masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime==0){
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');

    }
 })

audioElement.addEventListener('timeupdate',()=>{
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100)
    myprogress.value=progress;
    
})

myprogress.addEventListener('change',()=>{
    audioElement.currentTime = ((myprogress.value*audioElement.duration)/100);
}
)

const elements=document.querySelectorAll('.songtitle');
const coverelements= document.querySelectorAll('#allseason');
const time= document.querySelectorAll('.time');
 
for(var i=0; i<elements.length; i++){
 elements[i].innerHTML = songarray[i].songName;
 coverelements[i].src= songarray[i].coverPath;
 
 }
 previous.addEventListener('click', ()=>{
    if(index<=0){
        index = 0
    }
    else{
     index -= 1;
    }
    audioElement.src = `songs/${index}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
})

next.addEventListener('click', ()=>{
    if(index>=9){
        index = 0
    }
    else{
    index += 1;
    }

    audioElement.src = `songs/${index}.mp3`;
    makeAllPlays();

    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
    

})
     
//  for( var i=0; i< elements.length;i++){
//     console.log(elements,i);
//     let elements=document.querySelectorAll("songtitle");
//     elements[i].value=songarray[i].songName;
//     document.getElementsByTagName("img")[i].src=songarray[i].coverPath;
    
//  }
//  let coverelements = document.querySelectorAll("")
           