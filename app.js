document.getElementById("get-activity").addEventListener("click", function() {
    fetch("https://www.boredapi.com/api/activity")
        .then(response => response.json())
        .then(data => {
            document.getElementById("activity").textContent = data.activity
            document.getElementById("title").classList.add("shake")
            document.body.classList.add("background-change")
        })
    })