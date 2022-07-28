var uid = new ShortUniqueId();
const addBtn=document.querySelector(".add-btn");
const modalCont=document.querySelector(".modal-cont")
const textArea=document.querySelector(".textarea-cont")
const colors=["lightpink","lightgreen","lightblue","black"];
let modalPriorityColor=colors[3];
const mainCont=document.querySelector(".main-cont");
const allPriorityColor=document.querySelectorAll(".priority-color");
console.log(allPriorityColor);
// console.log(modalcont);
// console.log(mybtn);
var isModalPresent=false;
addBtn.addEventListener("click",function(e){
console.log(e)
if(!isModalPresent){
modalCont.style.display="flex";
}
else if(isModalPresent){
modalCont.style.display="none";
}
isModalPresent=!isModalPresent;
})
modalCont.addEventListener("keydown",function(e){
console.log(e)
if(e.key=="Shift"){
console.log(textArea.value);
createTicket(modalPriorityColor,textArea.value);
modalCont.style.display="none";
isModalPresent=false;
textArea.value="";
}
})
function createTicket(ticketColor,data){
    let id=uid();
    let ticketCont=document.createElement("div");
    ticketCont.setAttribute("class","ticket-cont");
    ticketCont.innerHTML=`
    <div class="ticket-color ${ticketColor}"></div>
    <div class="ticket-id">#${id}</div>
    <div class="task-area">${data}</div>
    <div class="ticket-lock">
    <i class="fa-solid fa-lock"></i>
    </div>
    `;
    mainCont.appendChild(ticketCont);
}
allPriorityColor.forEach((colorElement)=>{
colorElement.addEventListener("click",function(){
    allPriorityColor.forEach((el)=>{
        el.classList.remove("active");
    })
    colorElement.classList.add("active");
    modalPriorityColor=colorElement.classList[0];
})
})