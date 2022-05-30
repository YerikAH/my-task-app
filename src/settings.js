export default function settingsModal(){
    const $settings=document.getElementById("tools-user-setting")
    const $window = document.querySelector(".window")
    const $modalSettings = document.querySelector(".modal-setting-center")
    const montserrat = document.querySelector(".montserrat")
    const itim = document.querySelector(".itim")
    const firacode = document.querySelector(".firacode")
    const lato = document.querySelector(".lato")
    const all = document.querySelector("html")
    const comicsans = document.querySelector(".comicneue")
    const roboto = document.querySelector(".roboto")
    const style = document.documentElement.style
    $settings.addEventListener('click',e=>{
        $window.style.setProperty("display","block")
        $modalSettings.style.setProperty("top","0")
    })
    document.addEventListener('click',e=>{
        if (e.target == montserrat){
            style.setProperty("--family","Montserrat")
            localStorage.setItem('family','montserrat')
            $window.style.setProperty("display","none")
            $modalSettings.style.setProperty("top","-100vw")
        }else if (e.target == itim){
            style.setProperty("--family","Itim")
            localStorage.setItem('family','itim')
            $window.style.setProperty("display","none")
            $modalSettings.style.setProperty("top","-100vw")
        }
        else if (e.target == firacode){
            style.setProperty("--family","Fira Code")
            localStorage.setItem('family','firacode')
            $window.style.setProperty("display","none")
            $modalSettings.style.setProperty("top","-100vw")
        }
        else if (e.target == lato){
            style.setProperty("--family","Lato")
            localStorage.setItem('family','lato')
            $window.style.setProperty("display","none")
            $modalSettings.style.setProperty("top","-100vw")
        }
        else if (e.target == comicsans){
            style.setProperty("--family","Comic Neue")
            localStorage.setItem('family','comic')
            $window.style.setProperty("display","none")
            $modalSettings.style.setProperty("top","-100vw")
        }
        else if (e.target == roboto){
            style.setProperty("--family","Roboto")
            localStorage.setItem('family','roboto')
            $window.style.setProperty("display","none")
            $modalSettings.style.setProperty("top","-100vw")
        }
    })
    document.addEventListener('DOMContentLoaded',e=>{
        if(localStorage.getItem('family')== ''){
            style.setProperty("--family","Montserrat")
        }
        
        else if (localStorage.getItem('family')== 'itim'){
            style.setProperty("--family","Itim")
        }
        
        
        else if (localStorage.getItem('family')== 'firacode'){
            style.setProperty("--family","Fira Code")
        }
        
        
        else if (localStorage.getItem('family')== 'lato'){
            style.setProperty("--family","Lato")
        }
        
        else if (localStorage.getItem('family')== 'comic'){
            style.setProperty("--family","Comic Neue")
        }
        
        else if (localStorage.getItem('family')== 'roboto'){
            style.setProperty("--family","Roboto")
        }
        
    })
}