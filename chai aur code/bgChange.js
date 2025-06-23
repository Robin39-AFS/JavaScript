let intervalId = null; // Variable to hold the interval ID
document.getElementById("Start").onclick = function () {
  const arr = "0123456789abcdef";

  // console.log("Background color changed to " + color);

  intervalId = setInterval(() => {
    let hexColor = "";
    for (let i = 0; i < 6; i++) {
      let value = Math.floor(Math.random() * 16);
      hexColor += arr[value];

      document.body.style.backgroundColor = "#" + hexColor;
    }
    console.log("Generated hex color: " + hexColor);
  }, 1000);
};

document.getElementById("Stop").onclick = function () {
  //   document.body.style.backgroundColor = "white";
  clearInterval(intervalId); // Clear the interval to stop changing the background color

  console.log("Background color reset to white and interval cleared.");
};

// 2nd Project Pres the key and see the key code and key name

const insert = document.getElementById("insert");
document.addEventListener("keydown", (event) => {
  insert.innerHTML = `
  <div>
  <table>
    <tr>
      <th>Key</th>
      <th>Key Code</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${event.key === " " ? "Space" : event.key}</td>
      <td>${event.keyCode}</td>
      <td>${event.code}</td>
    </tr>
  </table>
  </div>
  `;
});

// 3rd Project - Practice XMLHttpRequest
document.getElementById("fetch-user").onclick = function () {
  const xhr = new XMLHttpRequest();
  const url = "https://api.github.com/users/Robin39-AFS"; // URL to fetch data from
  xhr.open("GET", url);

  // for tracking the request state
  xhr.onreadystatechange = () => {
    // check the state of the request
    console.log("Ready state: " + xhr.readyState);
    if (xhr.readyState === 4) {
      const data = JSON.parse(xhr.responseText); // Get the response text
      const userInfo = document.getElementById("user-info");
        userInfo.innerHTML = `
            <h2>${data.name}</h2>
            <p>Followers: ${data.followers}</p>
        `;
      console.log(data.followers);
    }
  };
  xhr.send();
};
