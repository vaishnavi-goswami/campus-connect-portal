export function setupExperiment3() {
  const exploreButton = document.getElementById("exploreButton");
  const welcomeText = document.getElementById("welcomeText");
  const studentName = document.getElementById("studentName");
  const liveMessage = document.getElementById("liveMessage");
  const announcementInput = document.getElementById("announcementInput");
  const announcementList = document.getElementById("announcementList");

  exploreButton?.addEventListener("click", function () {
    if (welcomeText) {
      welcomeText.textContent =
        "Welcome to Campus Connect! Explore events, resources and student communities.";
    }

    if (exploreButton) {
      exploreButton.textContent = "Campus Explored!";
    }
  });

  studentName?.addEventListener("input", function () {
    const name = (studentName as HTMLInputElement).value.trim();

    if (liveMessage) {
      if (name === "") {
        liveMessage.textContent = "Start typing your name...";
      } else {
        liveMessage.textContent =
          `Hello, ${name}! Welcome to Campus Connect.`;
      }
    }
  });

  announcementInput?.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const input = announcementInput as HTMLInputElement;
      const announcement = input.value.trim();

      if (announcement === "") {
        return;
      }

      const newAnnouncement = document.createElement("div");

      newAnnouncement.className = "announcement-card";

      newAnnouncement.innerHTML = `
        <span>${announcement}</span>
        <button class="remove-button">Remove</button>
      `;

      announcementList?.appendChild(newAnnouncement);

      input.value = "";

      const removeButton =
        newAnnouncement.querySelector(".remove-button");

      removeButton?.addEventListener("click", function () {
        newAnnouncement.remove();
      });
    }
  });
}