const boiler_template = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/all.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-duotone-thin.css">
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-duotone-solid.css">
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-duotone-regular.css">
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-duotone-light.css">
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-thin.css">
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-solid.css">
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-regular.css">
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/sharp-light.css">
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/duotone-thin.css">
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/duotone-regular.css">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/duotone-light.css">
    <title>Document</title>
</head>

<body>

</body>

</html>
`;
const todoGrid = document.getElementById('todo-grid');


// const initialProjects = [
//     {
//         name: "Kushma Art Project",
//         author: "Rk Adipta Giri",
//         url: "https://kushmaartproject.com.np",
//         phone: "9861234567",
//         filemanager: "https://example.com/filemanager",
//         cpanel: "https://example.com/cpanel",
//         git: "https://github.com",
//         folderPath: "C:/Users/"
//     }
// ];
// Fetch projects from the JSON file
fetch('projects.json')
    .then(response => response.json())
    .then(projects => {
        projects.forEach(project => {
            addCard(project);
        });
    })
    .catch(error => console.error("Error fetching projects:", error));

// Function to create a card for a project
function addCard(project) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h4>${project.name}</h4>
        <p><i class="fa-regular fa-id-card"></i> ${project.author}</p>
        <p><i class="fa-regular fa-phone"></i> ${project.phone}</p>
        <button onclick="window.open('${project.url}')"><i class="fa-light fa-globe"></i> View Site</button>
        <button onclick="window.open('${project.filemanager}')"><i class="fa-light fa-table-tree"></i> File Manager</button>
        <button onclick="window.open('${project.git}')"><i class="fa-brands fa-github"></i> GitHub</button>
        <button onclick="window.open('${project.cpanel}')"><i class="fa-light fa-gear"></i> cPanel</button>
        <button onclick="location.href = 'folder.php?path=${encodeURIComponent(project.folderPath)}'"><i class="fa-light fa-folder"></i> Open Folder</button>
    `;
    document.getElementById('todo-grid').appendChild(card);
}


// initialProjects.forEach(project => {
//     addCard(project);
// });


function addCard(project) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
<h4 class="text-2xl font-extrabold">${project.name}</h4>
<p class="text-l font-normal"><i class="fa-regular fa-id-card"></i>&nbsp;${project.author}</p>
<p class="text-l font-normal"><i class="fa-regular fa-phone"></i>&nbsp;${project.phone}</p>
<button onclick="window.open('${project.url}')"><i class="fa-light fa-globe"></i> &nbsp;View Site</button>
<button onclick="window.open('${project.filemanager}')"><i class="fa-light fa-table-tree"></i> &nbsp;File Manager</button>
<button onclick="window.open('${project.git}')"><i class="fa-brands fa-github"></i> &nbsp;GitHub</button>
<button onclick="window.open('${project.cpanel}')"><i class="fa-light fa-gear"></i> &nbsp;CPanel</button>
<button onclick="location.href = 'folder.php?path=${encodeURIComponent(project.folderPath)}'"><i class="fa-light fa-folder"></i> &nbsp;Open Folder</button>
<button onclick="location.href = 'folder.php?code=${encodeURIComponent(project.folderPath)}'"><img src="https://www.svgrepo.com/show/342347/visual-studio-code.svg" class="w-5 h-5 inline-block mr-2 filter invert" alt="VS Code">Open Code</button>
`;
    todoGrid.appendChild(card);
}

function addProject() {
    const input = document.getElementById('new-project');
    const projectName = input.value.trim();
    if (projectName !== '') {
        const li = document.createElement('li');
        li.innerHTML = `<i class='fas fa-folder'></i> ${projectName}`;
        li.onclick = () => goTo(projectName.toLowerCase());
        document.getElementById('project-list').appendChild(li);
        addCard(projectName);
        input.value = '';
    }
}

function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    if (body.getAttribute('data-theme') === 'light') {
        body.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('fa-sun-bright', 'fa-moon');
    } else {
        body.setAttribute('data-theme', 'light');
        themeIcon.classList.replace('fa-moon', 'fa-sun-bright');
    }
}
function goToFolder(projectName, folderPath) {
    // Open file explorer (will only work if you use a custom local server-side script)
    if (!projectName == "shell_ooB") {
        window.location.href = `folder.php?path=${encodeURIComponent(folderPath)}`;
    }
    else {
        window.location.href = `folder.php?code=${encodeURIComponent(folderPath)}`;
    }
}
function copyVar(text) {
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = text;

    // Make it invisible
    textarea.style.position = 'fixed';
    textarea.style.opacity = 0;

    // Add it to the document
    document.body.appendChild(textarea);
    // Select and copy the text
    textarea.select();
    document.execCommand('copy');
    // Remove the textarea
    document.body.removeChild(textarea);
}
function showNotification(message = "This is a cool notification popup!") {
    const notification = document.getElementById("notification");
    notification.querySelector("div").innerHTML = message;

    // Reset animation
    const bar = notification.querySelector(".countdown-bar");
    bar.style.animation = 'none';
    bar.offsetHeight; // reflow to restart animation
    bar.style.animation = null;

    notification.classList.add("show");

    // Auto-dismiss after 2s
    clearTimeout(notification.dismissTimer);
    notification.dismissTimer = setTimeout(() => {
        dismissNotification();
    }, 2000);
}

function dismissNotification() {
    const notification = document.getElementById("notification");
    notification.classList.remove("show");
}

