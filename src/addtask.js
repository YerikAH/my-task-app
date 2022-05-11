export default function add(){
    const yesTask = document.querySelector(".seto")
    const nose = document.querySelector('.tasks_ul') 
    const first= document.querySelector('.second')
    const agregarBTN = document.querySelector(".desktop-more")
    const input = document.querySelector('.add')
    const ul = document.querySelector('.tasks_ul')
    let tasks = []
    
    
    agregarBTN.addEventListener('click',e=>{
        addTasks()
    })
    
    
    evento()
    function evento(){
        document.addEventListener('DOMContentLoaded', ()=>{
            tasks = JSON.parse(localStorage.getItem('tasks')) || []
            createHTML()
        })
        ul.addEventListener('click',deleteTask)
    }
    
    
    function deleteTask(e){
        if(e.target.tagName == 'SPAN'){
            const deleteID =  parseInt(e.target.getAttribute('task-id'))
            tasks = tasks.filter(task => task.id !== deleteID)
            createHTML()
        }
    }
    
    
    function addTasks(){
        const task = input.value
        if(task === ''){
            theError('There are no tasks that are "nothing"')
            return
        }
        const taskObj = {
            task,
            id: Date.now()
        }
        tasks = [...tasks, taskObj]
        createHTML()
        input.value=''
    }
    
    function createHTML(){
        clearHTML()
        if (tasks.length > 0){
            tasks.forEach(task =>{
                const li = document.createElement('li')
                li.className = "lista_task"
                li.innerHTML = `${task.task} <span task-id=${task.id}>X</span>`
                ul.appendChild(li);
            })
        }
        if (nose.childElementCount  == 0){
            yesTask.style.setProperty("display","flex")
            
        }else{
            yesTask.style.setProperty("display","none")
        }
        sincronizar()
    }
    
    
    function sincronizar(){
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    
    
    function theError(err){
        const message = document.createElement('p')
        message.textContent = err
        first.appendChild(message)
        setTimeout(()=>{
            message.remove()
        },4000)
    }
    
    
    function clearHTML(){
        ul.innerHTML = '';
    }
    
    
    document.addEventListener('keydown',e=>{
        if (e.keyCode === 13){
            addTasks()
        }
    })    
}
