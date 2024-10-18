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
        let messageTimestamp = new Date(sms[i][1].timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Format to show only hour and minute
        if(messageContent){
            
            if(messageUser === currentUser){
                // Create the header div for the username and timestamp container
                const headerContainer = document.createElement("div");
                headerContainer.classList.add("m-header-container")
                // Create a div for timestamp
                const timestampDiv = document.createElement("div");
                timestampDiv.textContent = messageTimestamp; // Set the timestamp text
                timestampDiv.classList.add("timestamp")
                // Create a new div for the user's name
                const userNameDiv = document.createElement("div");
                userNameDiv.textContent = messageUser; // Set the text to the message sender's name
                userNameDiv.classList.add("m-user-name")
                // Append username and timestamp divs to the header container
                headerContainer.appendChild(userNameDiv);
                headerContainer.appendChild(timestampDiv);
                ulel.appendChild(headerContainer)
                
                ulel.innerHTML+=`<div class="my-message">${messageContent}</div>`
        }
        else{
            // Create a header div for the username and timestamp container
            const headerContainer = document.createElement("div");
            headerContainer.classList.add("o-header-container")
            // Create a div for timestamp
            const timestampDiv = document.createElement("div");
            timestampDiv.textContent = messageTimestamp; // Set the timestamp text
            timestampDiv.classList.add("timestamp")
            // Create a new div for the user's name
            const userNameDiv = document.createElement("div");
            userNameDiv.textContent = messageUser; // Set the text to the message sender's name
            userNameDiv.classList.add("o-user-name")
            // Append username and timestamp divs to the header container
            headerContainer.appendChild(userNameDiv);
            headerContainer.appendChild(timestampDiv);
            ulel.appendChild(headerContainer)
            ulel.innerHTML+=`<div class="other-message">${messageContent}</div>` 
        } 
        }
       
        
    }

    const chatContainer = document.getElementById("chat-container");
    chatContainer.scrollTop = chatContainer.scrollHeight
    
})