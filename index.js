 // Function to add a new row to the table
 function addRaceTime(runner, time) {
    let tableBody = document.getElementById("race-times-body");
    let newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${runner}</td>
        <td>${time}</td>
    `;

    // Calculate the place based on the smallest race time
    let place = 1;
      let rows = tableBody.getElementsByTagName("tr");
      for (let i = 0; i < rows.length; i++) {
          let rowTime = parseFloat(rows[i].getElementsByTagName("td")[1].innerText);
          if (rowTime < parseFloat(time)) {
              place++;
          }
      }
     // Add the place column
     newRow.innerHTML += `<td>${place}</td>`;

    tableBody.appendChild(newRow);

      // Update places if a lower race time is entered
      updatePlaces();
    }

    // Function to update the places based on the smallest race time
    function updatePlaces() {
        let tableBody = document.getElementById("race-times-body");
        let rows = tableBody.getElementsByTagName("tr");
        for (let i = 0; i < rows.length; i++) {
            let rowTime = parseFloat(rows[i].getElementsByTagName("td")[1].innerText);
            let place = 1;
            for (let j = 0; j < rows.length; j++) {
                let otherTime = parseFloat(rows[j].getElementsByTagName("td")[1].innerText);
                if (otherTime < rowTime) {
                    place++;
                }
            }
            rows[i].getElementsByTagName("td")[2].innerText = place;
        }
    }
// Event listener for form submission
document.getElementById("add-race-time-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get values from the form
    let runnerName = document.getElementById("runner-name").value;
    let raceTime = document.getElementById("race-time").value;

    // Add a new row to the table
    addRaceTime(runnerName, raceTime);

    // Clear the form inputs
    document.getElementById("runner-name").value = "";
    document.getElementById("race-time").value = "";
});
