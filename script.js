var toggleStatus = false;

let myFunction = function(){

    let getNavSideBar = document.querySelector(".nav-sidebar");
    let getSideBarUl = document.querySelector(".nav-sidebar ul");
    

    if(toggleStatus === false){
        getNavSideBar.style.width = "275px";

        getSideBarUl.style.visibility = "visible";
      

        toggleStatus = true;

      

    }

 
    else if(toggleStatus === true){
        getNavSideBar.style.width = "60px";

        getSideBarUl.style.visibility = "hidden";
      

        toggleStatus = true;

      

    }
    

}