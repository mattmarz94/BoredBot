const activityBtn = document.getElementById("activityBtn")

activityBtn.addEventListener("click", function() {
        fetch("https://www.boredapi.com/api/activity")
              .then(response => response.json())
              .then(data => {
                console.log(data)
                document.getElementById("random-activity").textContent = data.activity
                })
      })