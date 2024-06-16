// document.addEventListener('DOMContentLoaded', function(){
//     document.getElementById('btnTheme').addEventListener('click', function(){
//         document.documentElement.classList.toggle("Dark")
//         document.getElementById('btnTheme').innerText=document.documentElement.classList.contains("Dark") ? "Light" : "Dark"
//     })
// })

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btnTheme').addEventListener('click', function(){
        document.documentElement.classList.toggle("dark")
        document.getElementById('btnTheme').innerText=document.documentElement.classList.contains("dark") ? "Light" : "Dark"
    })
})