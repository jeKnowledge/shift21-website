    function showMenu(){
var menu= document.getElementById("menu");
var nav = document.getElementById("nav");
var tigre = document.getElementById("tigre_mobile");
var img = document.getElementById("menu_icon");


       if (window.getComputedStyle(menu).display === "none" ){
        menu.style.display="inline";
        nav.style.height="100%";
        menu.style.backgroundColor="#000000";
        tigre.style.display="block";
        nav.style.zIndex="3";
        img.src= "images/close.svg"

}
      else {
      menu.style.display="none";
      img.src= "images/menu.png"


   }}
