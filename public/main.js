const topMenu = document.getElementById('ch-top-menu')
const menuMobile = document.getElementById('ch-toggle-top-menu-icon')
document.addEventListener('click' , (e)=>{
        if(menuMobile.contains(e.target)){
            topMenu.classList.toggle('hidden')
            topMenu.classList.toggle('ch-menu-nav')
        }else{
            if(topMenu.classList.contains('ch-menu-nav')){
                topMenu.classList.remove('ch-menu-nav')
                topMenu.classList.add('hidden')
            }
        }
})