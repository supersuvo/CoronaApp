let splashScreen=document.getElementById("splash-screen");

let mainWebsite=document.getElementById("main-website");

// logic for splash screen handling
window.addEventListener("load",()=>{
      
       mainWebsite.style.display="none";

      setTimeout(()=>{
         splashScreen.style.display="none";
         mainWebsite.style.display="block";
      },2000);
})



