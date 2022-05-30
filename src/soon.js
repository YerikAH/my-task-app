export default function soonClick(){
  const settingPomo = document.querySelector(".Setting-pomo")
  const soon = document.querySelector(".soon-pomodoro")
  const exit = document.querySelector(".bye-cat")
  settingPomo.addEventListener('click',e=>{
    soon.style.setProperty("top","0")    
  })
  exit.addEventListener('click',e=>{
    soon.style.setProperty("top","-100vw")   
  })
}