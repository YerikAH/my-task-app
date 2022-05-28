export default function nameUser(){
    const $window = document.querySelector(".window")
    const $user= document.getElementById("tools-user-user")
    const $modal = document.querySelector(".modal-user-name-center")
    const $save = document.getElementById("modal-user-name-modal")
    const $input = document.getElementById("modal-user-name-input")
    const $alertError = document.getElementById("modal-user-name-input-error")
    const $name = document.getElementById("tools-user-name")
    const $space = document.querySelector(".tools-user")
    $user.addEventListener('click',e=>{
        $window.style.setProperty("left","0")
        $modal.style.setProperty("top","0")
    })
    $save.addEventListener('click',e=>{
        if($input.value.length > 10 ){
            $alertError.innerHTML=`Hey do not put a name with more than 10 letters`
            setTimeout(()=>{
                $alertError.innerHTML=``
            },2000)
        }
        else if($input.value == ''){
            $alertError.innerHTML=`Hey I didn't put any name`
            setTimeout(()=>{
                $alertError.innerHTML=``
            },2000)
        }else{
            $name.innerHTML=`${$input.value}`
            if($name.length == 0){
                localStorage.setItem('name','false')
            }else{
                localStorage.setItem('name',`${$input.value}`)
            }
            $window.style.setProperty("left","-100vw")
            $modal.style.setProperty("top","-100vw")
        }
    })
    document.addEventListener('DOMContentLoaded',e=>{
        if(localStorage.getItem('name')== '' ||localStorage.getItem('name')== 'false' ){
            $name.innerHTML=``
        }
        else{
            $name.innerHTML=localStorage.getItem('name')
        }
    })
}