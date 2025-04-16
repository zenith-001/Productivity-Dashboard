const boiler_template = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/all.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
    <title>Project Dashboard</title>
  </head>
  <body class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-[Poppins]">
  </body>
</html>
`;

const todoGrid = document.getElementById("todo-grid");

fetch("projects.json")
  .then((res) => res.json())
  .then((projects) => {
    projects.forEach((project) => {
      const card = document.createElement("div");
      card.classList = "p-4 bg-white dark:bg-gray-800 shadow-md rounded-xl mb-4 card";
      card.innerHTML = `
        <h4 class="text-xl font-bold mb-2">${project.name}</h4>
        <p><i class="fa-regular fa-id-card"></i> ${project.author}</p>
        <p><i class="fa-regular fa-phone"></i> ${project.phone}</p>
        <div class="flex flex-wrap gap-2 mt-3">
          <button class="btn" onclick="window.open('${project.url}', '_blank')"><i class="fa-light fa-globe"></i> View Site</button>
          <button onclick="window.open('${project.filemanager}', '_blank')"><i class="fa-light fa-table-tree"></i> File Manager</button>
          <button class="btn" onclick="window.open('${project.git}', '_blank')"><i class="fa-brands fa-github"></i> GitHub</button>
          <button class="btn" onclick="window.open('${project.cpanel}', '_blank')"><i class="fa-light fa-gear"></i> CPanel</button>
          <button class="btn" onclick="goToFolder('${project.name}', '${project.folderPath}')"><i class="fa-light fa-folder"></i> Open Folder</button>
          <button class="btn" onclick="location.href='folder.php?code=${project.folderPath}'">
            <img src="https://www.svgrepo.com/show/342347/visual-studio-code.svg" class="w-5 h-5 inline-block mr-2 filter invert" /> Open Code
          </button>
        </div>
      `;
      todoGrid.appendChild(card);
    });
  });

function addProject() {
  const input = document.getElementById("new-project");
  const name = input.value.trim();
  if (!name) return;

  const li = document.createElement("li");
  li.innerHTML = `<i class='fas fa-folder'></i> ${name}`;
  li.onclick = () => goTo(name.toLowerCase());

  document.getElementById("project-list").appendChild(li);
  input.value = "";
}

function toggleTheme() {
  const body = document.body;
  const current = body.dataset.theme || "light";
  const newTheme = current === "light" ? "dark" : "light";
  body.dataset.theme = newTheme;

  const icon = document.getElementById("theme-icon");
  icon.className = newTheme === "dark" ? "fas fa-sun-bright" : "fas fa-moon";
}

function goToFolder(name, path) {
  if (name === "shell_ooB") {
    location.href = `folder.php?code=${path}`;
  } else {
    location.href = `folder.php?path=${path}`;
  }
}

function copyVar(text) {
  navigator.clipboard.writeText(text).then(() => {
    showNotification("Copied to clipboard!");
  });
}

function showNotification(message = "This is a cool notification popup!") {
  const notification = document.getElementById("notification");
  notification.querySelector("div").textContent = message;

  const bar = notification.querySelector(".countdown-bar");
  bar.style.animation = "none";
  bar.offsetWidth;
  bar.style.animation = null;

  notification.classList.add("show");

  clearTimeout(notification.dismissTimer);
  notification.dismissTimer = setTimeout(dismissNotification, 2000);
}

function dismissNotification() {
  document.getElementById("notification").classList.remove("show");
}
