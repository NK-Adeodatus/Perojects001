let inputChat=document.getElementsByClassName("input-el")[0]
let ulel = document.getElementsByClassName("ul-el")[0]
let chatbtn = document.getElementById("chat-btn")
chatbtn.addEventListener("click", function(){
    ulel.innerHTML+="<div>"+inputChat.value+"</div>"
    inputChat.value = ""
})