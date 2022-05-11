export default function btn(){

    const $darkMode = document.getElementById("darkMode")
    const changeLetter = () =>{
        document.body.classList.toggle('dark')
    }
    $darkMode.addEventListener('click',e=>{
        changeLetter()
        if(document.body.classList.contains('dark')){
            localStorage.setItem('dark-mode','true')
        }else{
            localStorage.setItem('dark-mode','false')
        }
    })
    if(localStorage.getItem('dark-mode')==='true'){
        document.body.classList.add('dark')
    }else{
        document.body.classList.remove('dark')
    }

}
