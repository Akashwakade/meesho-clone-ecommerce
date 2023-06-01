let otpButton=document.querySelector("#Sotp")
let num=document.querySelector("#Number")
let Aotp=document.querySelector(".otp")
let removeSend=document.querySelector(".SendOtp>button")
let removeCP=document.querySelector(".countryPhoneContainer")

let submitBtn=document.querySelector("#submit")
otpButton.addEventListener("click",function(){
   if(num.value=="") {
    alert("enter mobile number")
   }
    else{alert("OTP sent")
        Aotp.style.display='block';
       removeCP.style.display="none";
       removeSend.style.display="none";}
    })
       submitBtn.addEventListener('click',()=>{
    //    console.log('hello')
        
        let enterOtp=document.querySelector("#inputPass").value;
        if(enterOtp=="1234"){
           alert('login successfull');
           window.location.assign('./admin.html')

         //   var mydiv = document.querySelector(".mainPage");
         //   var aTag = document.createElement('a');
         //   aTag.setAttribute('href',"admin.html");
         //   aTag.innerText = "Click here to go to the Admin page";
         //   mydiv.appendChild(aTag);


           
        }
        else{
            alert('login successfull');
            window.location.assign('./index.copy.html')
        }
        })
        
     
       
        

   
