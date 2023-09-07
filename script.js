// Clock Functionality
function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  currentTime();// Initial call

// analog clock functionality
setInterval(()=>{
    d     = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation=30*htime + mtime/2;
    mrotation=6*mtime; 
    srotation=6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
},1000);



// Set Alarm
   
function setAlarm() {

    // Getting values from the input fields for hour, minute, second, and am/pm
    const hour = document.getElementById("hourInput").value;
    const minute = document.getElementById("minuteInput").value;
    const second = document.getElementById("secondInput").value;
    const ampm = document.getElementById("ampmInput").value;

    // Checking if any input is empty
    if (!hour || !minute || !second) {
        alert("Please provide values for hour, minute, and second.");
        return; // Exit the function if any input is empty
    }

    // Create a string representation of the alarm time
    const alarmTime = `${hour}:${minute}:${second} ${ampm}`;

    // Create a new list item for the alarm
    const listItem = document.createElement("li");
    listItem.innerText = alarmTime;

    // Create a delete button for the alarm
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";

    // Add an event listener to the delete button to remove the alarm when clicked
    deleteButton.addEventListener("click", function() {
        listItem.remove(); // Remove the alarm from the list
    });

    // Append the delete button to the list item
    listItem.appendChild(deleteButton);

    // Append the list item to the alarms list
    document.getElementById("alarmList").appendChild(listItem);

    // Check and alert for alarm
    setInterval(function() {
        const now = new Date();
        const currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

        // If the current time matches the alarm time, trigger an alert and remove the alarm
        
        if (currentTime === alarmTime) {
            alert("Alarm is going off!");
            listItem.remove(); // Remove the alarm from the list
        }
    }, 1000); // Check every second

    // Clear input fields after setting the alarm
    document.getElementById("hourInput").value = "";
    document.getElementById("minuteInput").value = "";
    document.getElementById("secondInput").value = "";
}


