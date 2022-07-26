let addBtn=document.querySelector(".add-btn");
let modalCont=document.querySelector(".modal-cont")
// console.log(modalcont)
// console.log(mybtn);
var isModalPresent=false;
addBtn.addEventListener("click",function(){
if(!isModalPresent){
modalCont.style.display="flex";
}
else if(isModalPresent){
modalCont.style.display="none";
}
isModalPresent=!isModalPresent;
})