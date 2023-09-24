document.getElementById("activityBtn").addEventListener("click", function() {
        fetch("https://www.boredapi.com/api/activity")
              .then(response => response.json())
              .then(data => {
                document.getElementById("random-activity").textContent = data.activity
                })
      })