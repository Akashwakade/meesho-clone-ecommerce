 
import BagsFootwear from "./data/BagsandFootwear.js"
import BeautyHealth from "./data/BeautyandHealth.js"
import Electronics from "./data/Electronic.js"
import HomeAndKitchen from "./data/HomeaAndKitchen.js"
import JewelleryAccessories from "./data/JewelleryAcce.js"
import Kids from "./data/Kids.js"
import Men from "./data/Men.js"
import WomenEthnic from "./data/womenEthnic.js"
import WomenWestern from "./data/womenWestern.js"

let profileIcon=document.querySelector(".profileHover")
profileIcon.addEventListener('click',()=>{
    let signUpcont=document.querySelector(".signUpContainer");
    signUpcont.style.display='block'
}
)
let closex=document.querySelector("#closeX");

// cross function event
 let inputSearchEl=document.querySelector(".inputSearch")
 closex.addEventListener("click",()=>{
    inputSearchEl.value=null;
 })


 

//  let recentInput=[];

//  let formInputEl=document.getElementById("inputForm");
//  const listofRecentEl=document.querySelector(".listofRecent");
// inputSearchEl.addEventListener('keydown',()=>{
//     if(inputSearchEl.value){
//        document.getElementById("closeX").style.display="block"}
//        else{
//         document.getElementById("closeX").style.display="none"
//        }

  
// })



// formInputEl.addEventListener("submit", (e) => {
//     e.preventDefault()
//     let listofRecentHTMLEl = ""

//     recentInput.push(inputSearchEl.value)
//    // console.log(recentInput)

//     if (recentInput.length > 0) {
//         for (let i = 0; i < recentInput.length; i++) {
//             listofRecentHTMLEl += `
//             <div class="recentItem">
//                 <div class="recentIcon">
//                      <img src="./img/recent.png"/>
//                 </div>
//                 <p>${recentInput[i]}</p>
//             </div>
//         `
//         }

//         listofRecentEl.innerHTML = listofRecentHTMLEl
//     }
// })
//console.log(listofRecent)
//cross part function
// let cross=document.querySelector("#closeX")
// cross.addEventListener("click",()=>{
//     inputSearchEl.value=null
// })


/*function reuble*****/
function renderSubMenu(id,data){
    let temp = document.getElementById(id)
function TempFunc(){
   return data.map(el =>{
        let list = ""; 
        list = el.data.map(element => `<p>${element}</p>`).join(" ")    
       return `
        <div class="column">
            <h4>${el.heading}</h4>
            ${list}
        </div>
       `
    }).join("")
}
    temp.innerHTML = TempFunc()
}


/****womenEthic */
// let womenEthic=document.getElementById("womenEthic")
// console.log(womenEthic)
 renderSubMenu("womenEthic",WomenEthnic)

// /****WomenWestern */
 renderSubMenu("womenWestern",WomenWestern)

// //Men 
 renderSubMenu("men",Men)

// /***kids */
 renderSubMenu("kids",Kids)

// /**home % kitchen */
 renderSubMenu("HomeAndKitchen",HomeAndKitchen)

// /**beauty and health */
 renderSubMenu("beautyAndHealth",BeautyHealth)

// // Jewellery & Accessories
 renderSubMenu("JewelleryAndAccessories",JewelleryAccessories)

// // Bags & Footwear
renderSubMenu("BagsFootWarId",BagsFootwear)

// // Electronics
 renderSubMenu("ElectronicsId",Electronics)

 //signup button
 let signUp=document.querySelector("#signUp");
 signUp.addEventListener("click",()=>{
    console.log('hello')
 })
