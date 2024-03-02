// Get elements
const elBtnItems = document.querySelectorAll("#btn-group_item");
const elFileList = document.querySelector(".fileList");
const elXarakter = document.querySelector(".harakteristikaList");
const elOpenMenu = document.querySelector(".mobile-menu-icons");
const elMobileNav = document.querySelector(".mobile-menuNav");
const elCloseMenu = document.querySelector(".x-icon")
// End
const changeList = (e, a) => {
    elBtnItems.forEach(elbtn => {
        elbtn.classList.remove("active");
        if(a === 1){
            elXarakter.style.display = "flex"
            elFileList.style.display = "none"
        }else{
            elXarakter.style.display = "none"
            elFileList.style.display = "flex"
        }
    })
    e.classList.add("active");
    
}

// Mobile menu code 

elOpenMenu.addEventListener("click", () => elMobileNav.style.display = "flex")
elCloseMenu.addEventListener("click", () => elMobileNav.style.display = "none")