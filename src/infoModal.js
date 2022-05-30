export default function infoModal(){
    const btnInfo = document.getElementById("tools-user-info")
    const foud = document.querySelector(".info-center")
    const closeBtnInfo = document.querySelector(".info-btn")
    const $window = document.querySelector(".window")
    btnInfo.addEventListener('click',e=>{
        foud.style.setProperty("top","0vw")
        $window.style.setProperty("display","block")
    })
    closeBtnInfo.addEventListener('click',e=>{
        foud.style.setProperty("top","-100vw")
        $window.style.setProperty("display","none")
    })
}