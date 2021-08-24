
let status = true;
    
function exibirMenu() {
   
   let menu = document.querySelector('#menu-area');

   if(status == true) {
        menu.style.width = 0;
        status = false;
   } else {
        menu.style.width = 200;
        status = true;
   }
}
