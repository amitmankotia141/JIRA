// function areaOfCircle(radius){
// var res=Math.PI*radius*radius
// return res
// }
// var ans=areaOfCircle(5)
// console.log(ans)
// let arr=[2,5,7,12]
// arr.map(v=()=>{
//     console.log(v)
// })
// let a=arr.map((i)=>{ /*2,5,7,12*/
// return arr[i]*2
// })
// let b=a
// console.log(b)
// for(var i=1;i<=5;i++){
// function wrapper(b){
// setTimeout(function(){
// console.log(b)
// },1000*b)
// }
// wrapper(i)
// }
// var arr = [10, -5, 6, 28, 56, 12, 456];
// let ans=arr.reduce((acc,cur)=>{
// if(cur>acc){
// acc=cur
// }
// return acc
// })
// console.log(ans)
// const worldCapitals = [
//     {
//       country: "India",
//       capital: "Delhi",
//       population: "2cr",
//     },
//     {
//       country: "America",
//       capital: "Washington DC",
//       population: "6cr",
//     },
//     {
//       country: "France",
//       capital: "Paris",
//       population: "2cr",
//     },
  
//     {
//       country: "England",
//       capital: "London",
//       population: "4cr",
//     },
//     {
//       country: "Germany",
//       capital: "Berlin",
//       population: "2cr",
//     },
//   ];
// let d=worldCapitals.map((v)=>{
// return v.country+"->"+v.capital
// })
// console.log(d)
// let l=worldCapitals.filter((x)=>{
// if(x.population<"5cr"){
// return x.country
// }
// })
// console.log(l)
// let h=worldCapitals.reduce((acc,cur)=>{
// if(cur.population<"5cr"){

// }
// },[]);
// console.log(h)
// function b(){
//   console.log("Working","hi")
// }
// function a(v){
//   if(4%2==0){
//     v()
//   }
//   else{
//     console.log("Done")
//   }
// }
// a(b)
// let promise=new Promise(function(resolve,reject){
//   resolve("Done")
// })
// promise.then(function(result){
// alert(result)
// })
// let arr=[2,3,4,5,6,7]
// arr=arr.map((e)=>{
// return e*e
// })
// console.log(arr)
// var obj={}
// let arr = [1, 4, 2, 3, 2, 4, 1, 5, 6, 1, 1];
// for(let i=0;i<arr.length;i++){
//   if(obj[arr[i]]){
//     obj[arr[i]]=obj[arr[i]]+1
//   }
//   else{
//     obj[arr[i]]=1
//   }
// }
// console.log(obj)
// let arr=[2,4,5,6,9]
// let x=arr.filter(function(e){
// if(e>4){
//   return e
//   }
// })
// console.log(x)
// console.log(arr[3])
// let a=null
// let b=undefined
// let c=0
// let d=NaN
// if(a || b || c || d || -1){
//   console.log("true")
// }
// else{
//   console.log("false")
// }