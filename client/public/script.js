document.addEventListener("DOMContentLoaded", function () {
  const messageButton = document.getElementById("messageButton");
  const campusMessage = document.getElementById("campusMessage");

  const nameInput = document.getElementById("nameInput");
  const nameOutput = document.getElementById("nameOutput");

  const activityInput = document.getElementById("activityInput");
  const addActivityButton = document.getElementById("addActivityButton");
  const activityList = document.getElementById("activityList");

  // Button click event
  messageButton.addEventListener("click", function () {
    campusMessage.textContent =
      "Welcome to Campus Connect! Let's make campus life more exciting.";
  });

  // Text input event
  nameInput.addEventListener("input", function () {
    const name = nameInput.value.trim();

    if (name === "") {
      nameOutput.textContent = "Start typing your name...";
    } else {
      nameOutput.textContent = "Hello, " + name + "!";
    }
  });

  // Function to add a new activity
  function addActivity() {
    const activity = activityInput.value.trim();

    if (activity === "") {
      return;
    }

    const listItem = document.createElement("li");

    const activityText = document.createElement("span");
    activityText.textContent = activity;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", function () {
      listItem.remove();
    });

    listItem.appendChild(activityText);
    listItem.appendChild(removeButton);

    activityList.appendChild(listItem);

    activityInput.value = "";
    activityInput.focus();
  }

  // Add activity button click
  addActivityButton.addEventListener("click", addActivity);

  // Keyboard event - Enter key
  activityInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addActivity();
    }
  });
});