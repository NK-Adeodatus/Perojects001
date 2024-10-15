import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getDatabase,
    ref,
    push,
    onValue
 } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";


const firebaseConfig = {
    projectId: "my-firebase-project-4dafb",
    databaseURL: "https://my-firebase-project-4dafb-default-rtdb.firebaseio.com/"
}
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const referenceInDB = ref(database,"messages")

const currentUser = prompt("Please enter your name:") || "Anonymous"

let inputChat=document.getElementsByClassName("input-el")[0] 
let ulel = document.getElementsByClassName("ul-el")[0]
let chatbtn = document.getElementById("chat-btn")

function sendMessage(){
    const message = inputChat.value.trim()
    if(message){
        push(referenceInDB,{content: message, timestamp: Date.now(),user: currentUser})
        
        inputChat.value = ""
    }
}

chatbtn.addEventListener("click", sendMessage) //event listener for the send button

inputChat.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        sendMessage()
        event.preventDefault()
    }
})


onValue(referenceInDB,function(snapshot){
    const snapshotValues = snapshot.val()
    ulel.innerHTML = ""
    let sms = Object.entries(snapshotValues)
    for(let i=0;i<=sms.length-1;i++){
        let messageContent = sms[i][1].content;
        let messageUser = sms[i][1].user
        if(messageContent){
            if(messageUser === currentUser){
           ulel.innerHTML+=`<div class="my-message">${messageContent}</div>`
        }
        else{
            ulel.innerHTML+=`<div class="other-message">${messageContent}</div>` 
        } 
        }
       
        
    }

    const chatContainer = document.getElementById("chat-container");
    chatContainer.scrollTop = chatContainer.scrollHeight
    
})