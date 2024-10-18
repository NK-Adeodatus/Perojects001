function fetchjoke(){
    fetch("https://icanhazdadjoke.com/", {
        headers:{
            "Accept": "Application/json"
        }
    })
    .then(response => {
        if(!response.ok){
            throw new Error("Network response was not ok")
        }
        return response.json()
    })
    .then(data => {
        document.getElementById("joke").textContent = data.joke
        console.log(data)
    })
    .catch(error=> {
        console.error("Error:", error)
        document.getElementById("joke").textContent = "Oops! Something went wrong. Try again later."
    })
        
    
}
document.getElementById("jokeButton").addEventListener("click",fetchjoke)