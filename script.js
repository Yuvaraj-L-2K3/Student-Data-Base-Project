// popupbutton overlay form
var popupbutton=document.querySelector(".popupbutton")
var overlay=document.querySelector(".overlay")
var form=document.querySelector(".form")

popupbutton.addEventListener("click",function(){
    overlay.style.display="block"
    form.style.display="block"
})

var cancel=document.getElementById("cancel")

cancel.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    form.style.display="none"
})

//class add name age districk state


var classcon=document.getElementById("class")
var add=document.getElementById("add")
var namelist=document.getElementById("name")
var age=document.getElementById("age")
var districk=document.getElementById("districk")
var state=document.getElementById("State")
var date= document.getElementById("date")

add.addEventListener("click",function(event){
    event.preventDefault()
    var tr = document.createElement("tr")
    tr.innerHTML=`<td>${namelist.value}</td>
            <td>${age.value}</td>
            <td>${date.value}</td>
            <td>${districk.value}</td>
            <td>${state.value}</td>
            <td><button onclick="remove(event)">Delete</button></td>`
    classcon.append(tr)

    overlay.style.display="none"
    form.style.display="none"
})

function remove(event){
    event.preventDefault()
    var row= event.target
    var btn= row.closest('tr')
    btn.remove()
}