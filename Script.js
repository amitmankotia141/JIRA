var uid = new ShortUniqueId();
const addBtn=document.querySelector(".add-btn");
const modalCont=document.querySelector(".modal-cont")
const textArea=document.querySelector(".textarea-cont")
const colors=["lightpink","lightgreen","lightblue","black"];
let modalPriorityColor=colors[3];
const mainCont=document.querySelector(".main-cont");
const allPriorityColor=document.querySelectorAll(".priority-color");
const toolBoxColors=document.querySelectorAll(".toolbox-color-cont>*");
let ticketsArr=[];
const removeBtn=document.querySelector(".remove-btn")
const allTickets=document.querySelectorAll(".main-cont>.ticket-cont");
console.log(allTickets);
// console.log(toolBoxColors);
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
// console.log(textArea.value);
createTicket(modalPriorityColor,textArea.value);
modalCont.style.display="none";
isModalPresent=false;
textArea.value="";
}
})
function createTicket(ticketColor,data,ticketId){
let id=ticketId||uid();
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
if(!ticketId){
ticketsArr.push({
ticketColor,
ticketId:id,
ticketData:data,
})
localStorage.setItem("tickets",JSON.stringify(ticketsArr));
}
handleRemoval(ticketCont,id)
handlePriorityColor(ticketCont,id);
handleLock(ticketCont,id);
}
if(localStorage.getItem("tickets")){
ticketsArr=JSON.parse(localStorage.getItem("tickets"));
ticketsArr.forEach((ticketObj)=>{
createTicket(ticketObj.ticketColor,ticketObj.ticketData,ticketObj.ticketId,);
})
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
for(let i=0;i<toolBoxColors.length;i++){
toolBoxColors[i].addEventListener("click",function(){
let currColor=toolBoxColors[i].classList[0];
let filteredTickets=ticketsArr.filter((ticketObj)=>{
return ticketObj.ticketColor==currColor;
})
console.log(filteredTickets);
let allTickets=document.querySelectorAll(".ticket-cont");
allTickets.forEach((ticket)=>{
ticket.remove();
})
filteredTickets.forEach((ticket)=>{
createTicket(ticket.ticketColor,ticket.ticketData,ticket.ticketId);
})
})
toolBoxColors[i].addEventListener("dblclick",function(){
let allTickets=document.querySelectorAll(".ticket-cont");
allTickets.forEach((ticket)=>{
ticket.remove();
})
ticketsArr.forEach((ticket)=>{
createTicket(ticket.ticketColor,ticket.ticketData,ticket.ticketId);
})    
})
}
var isRemoveBtnActive=false;
removeBtn.addEventListener("click",function(e){
console.log(e)
if(!isRemoveBtnActive){
removeBtn.style.color="red";
}
else if(isRemoveBtnActive){
removeBtn.style.color="white";
}
isRemoveBtnActive=!isRemoveBtnActive; 
})
function handleRemoval(ticketCont,id){
ticketCont.addEventListener("click",function(){
if(!isRemoveBtnActive){
return;
}
let idx=getTicketIdx(id);
ticketsArr.splice(idx,1)
localStorage.setItem("tickets",JSON.stringify(ticketsArr))
ticketCont.remove();
})
}
// function getTicketIdx(id){
// ticketsArr.forEach((ticketObj)=>{
// if(ticketObj.ticketId==id){
// let idx=ticketsArr.indexOf(ticketToBeDeleted);
// return idx;
// }
// })
// }
function getTicketIdx(id){
let idx =ticketsArr.findIndex((ticketObj)=>{
return ticketObj.ticketId==id;
})
return idx;
}
function handlePriorityColor(ticketCont,id){
    let ticketColor=ticketCont.querySelector(".ticket-color")
    ticketColor.addEventListener("click",function(){
        let currTicketColor=ticketColor.classList[1];
        let currTicketColorIdx=colors.indexOf(currTicketColor);
        let newTicketColorIdx=(currTicketColorIdx+1)%colors.length;
        let newTicketColor=colors[newTicketColorIdx];
        ticketColor.classList.remove(currTicketColor);
        ticketColor.classList.add(newTicketColor);
        let idx=getTicketIdx(id);
        ticketsArr[idx].ticketColor=newTicketColor;
        localStorage.setItem("tickets",JSON.stringify(ticketsArr));
    })
}
const unlock="fa-lock-open"
function handleLock(ticketCont,id){
let ticketLock=ticketCont.querySelector(".ticket-lock");
let lock=ticketLock.children[0].classList[1];
let ticketTaskArea=ticketCont.querySelector(".task-area")
ticketLock.addEventListener("click",function(){
    if(ticketLock.children[0].classList.contains(lock)){
        ticketLock.children[0].classList.remove(lock);
        ticketLock.children[0].classList.add(unlock);
        ticketTaskArea.setAttribute("contenteditable","true");
    }
    else if(ticketLock.children[0].classList.contains(unlock)){
        ticketLock.children[0].classList.add(lock);
        ticketLock.children[0].classList.remove(unlock);
        ticketTaskArea.setAttribute("contenteditable","false");
    }
    let idx=getTicketIdx(id);
    ticketsArr[idx].ticketData=ticketTaskArea.innerText;
    localStorage.setItem("tickets",JSON.stringify(ticketsArr));
})
}