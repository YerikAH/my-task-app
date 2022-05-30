export default function timerPomo(){
  const breakFather = document.querySelector(".break-pomo")
  const workFather = document.querySelector(".work-pomo")
  const countFather = document.querySelector(".cycles-pomo")
  const min = document.getElementById("min")
  const sec = document.getElementById("sec")
  const start = document.getElementById("start")
  const minBreak = document.getElementById("min_b")
  const secBreak = document.getElementById("sec_b")
  const count = document.createElement("span")
  count.className="cycle-pomo-pomo"
  let startTimer;
  const myFun = ()=>{
      if (sec.innerText != 0){
        sec.innerText--
      }else if (min.innerText != 0 && sec.innerText==0 ){
        sec.innerText=59
        min.innerText--
      }
      
      if (min.innerText ==  0 && sec.innerText == 0){
        breakFather.style.setProperty("opacity","1")
        breakFather.style.setProperty("position","static")
        workFather.style.setProperty("opacity","0")
        workFather.style.setProperty("position","absolute")

        if (secBreak != 0){
          secBreak.innerText--
        }
        if (minBreak.innerText != 0 && secBreak.innerText==0 ){
          secBreak.innerText=59
          minBreak.innerText--
        }
      }
      if (min.innerText ==  0 && sec.innerText == 0 && minBreak.innerText==0&&secBreak.innerText==0){
        workFather.style.setProperty("opacity","1")
        workFather.style.setProperty("position","static")
        breakFather.style.setProperty("opacity","0")
        breakFather.style.setProperty("position","absolute")
        min.innerText=25
        sec.innerText="00"
        minBreak.innerText=5
        secBreak.innerText="00"
        countFather.appendChild(count)

      }
  }
  start.addEventListener('click',e=>{
      if (startTimer === undefined){
          startTimer = setInterval(myFun,1000)
      }
  })

}

