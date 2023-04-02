
//first -text
const text =document.getElementById("button");
const addText =document.querySelector(".section-div-p");
const arrow = document.querySelector(".arrow");
const arrowTwo= document.querySelector(".arrow-two")
// const textSize = 14;



arrow.addEventListener('click',(event)=>{
  addText.style.display="block";
  arrow.style.display="none";
  arrowTwo.style.display="block";
  text.style.fontWeight=700; 
})

arrowTwo.addEventListener('click',(event)=>{
  addText.style.display="none";
  arrow.style.display="block";
  arrowTwo.style.display="none";
  text.style.fontWeight=400;
   
}) 

//second text
const textTwo =document.getElementById("button-two");
const addTextTwo=document.querySelector(".section-div-ptwo")
const arrowSecond=document.querySelector(".arrow-second")
const arrowTwoSecond= document.querySelector(".arrow-two-second")

arrowSecond.addEventListener('click',(event)=>{
  addTextTwo.style.display="block";
  arrowSecond.style.display="none";
  arrowTwoSecond.style.display="block";
  textTwo.style.fontWeight=700;
 
})

arrowTwoSecond.addEventListener('click',(event)=>{
  addTextTwo.style.display="none";
  arrowSecond.style.display="block";
  arrowTwoSecond.style.display="none";
  textTwo.style.fontWeight=400;
   
}) 

//third text
const textThree =document.getElementById("button-three");
const addTextThree=document.querySelector(".section-div-pthree")
const arrowDown=document.querySelector(".arrow-down")
const arrowUp= document.querySelector(".arrow-up")

arrowDown.addEventListener('click',(event)=>{
  addTextThree.style.display="block";
  arrowDown.style.display="none";
  arrowUp.style.display="block";
  textThree.style.fontWeight=700;
 
})

arrowUp.addEventListener('click',(event)=>{
  addTextThree.style.display="none";
  arrowDown.style.display="block";
  arrowUp.style.display="none";
  textThree.style.fontWeight=400;
   
}) 
//four
const textFour =document.getElementById("button-four");
const addTextFour=document.querySelector(".section-div-ptfour")
const arrowDownTwo=document.querySelector(".arrow-down-two")
const arrowUpTwo= document.querySelector(".arrow-up-two")

arrowDownTwo.addEventListener('click',(event)=>{
  addTextFour.style.display="block";
  arrowDownTwo.style.display="none";
  arrowUpTwo.style.display="block";
  textFour.style.fontWeight=700;
 
})

arrowUpTwo.addEventListener('click',(event)=>{
  addTextFour.style.display="none";
  arrowDownTwo.style.display="block";
  arrowUpTwo.style.display="none";
  textFour.style.fontWeight=400;
   
}) 
//five

const textFive =document.getElementById("button-five");
const addTextFive=document.querySelector(".section-div-pfive")
const arrowDownThree=document.querySelector(".arrow-down-three")
const arrowUpThree= document.querySelector(".arrow-up-three")


arrowDownThree.addEventListener('click',(event)=>{
  addTextFive.style.display="block";
  arrowDownThree.style.display="none";
  arrowUpThree.style.display="block";
  textFive.style.fontWeight=700;
 
})

arrowUpThree.addEventListener('click',(event)=>{
  addTextFive.style.display="none";
  arrowDownThree.style.display="block";
  arrowUpThree.style.display="none";
  textFive.style.fontWeight=400;
   
}) 

