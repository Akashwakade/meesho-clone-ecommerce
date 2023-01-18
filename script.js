 let inputSearchEl=document.querySelector(".inputSearch")
 let recentInput=[];

 let formInputEl=document.getElementById("inputForm");
 const listofRecentEl=document.querySelector(".listofRecent");
inputSearchEl.addEventListener('keydown',()=>{
    if(inputSearchEl.value){
       document.getElementById("closeX").style.display="block"}
       else{
        document.getElementById("closeX").style.display="none"
       }

  
})



formInputEl.addEventListener("submit", (e) => {
    e.preventDefault()
    let listofRecentHTMLEl = ""

    recentInput.push(inputSearchEl.value)
   // console.log(recentInput)

    if (recentInput.length > 0) {
        for (let i = 0; i < recentInput.length; i++) {
            listofRecentHTMLEl += `
            <div class="recentItem">
                <div class="recentIcon">
                     <img src="./img/recent.png"/>
                </div>
                <p>${recentInput[i]}</p>
            </div>
        `
        }

        listofRecentEl.innerHTML = listofRecentHTMLEl
    }
})
//console.log(listofRecent)
//cross part function
// let cross=document.querySelector("#closeX")
// cross.addEventListener("click",()=>{
//     inputSearchEl.value=null
// })
