<?php
// File path for the JSON database
$jsonFile = 'projects.json';

// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $newProject = [
        'name' => $_POST['name'],
        'author' => $_POST['author'],
        'url' => $_POST['url'],
        'phone' => $_POST['phone'],
        'filemanager' => $_POST['filemanager'],
        'cpanel' => $_POST['cpanel'],
        'git' => $_POST['git'],
        'folderPath' => $_POST['folderPath'],
    ];

    // Read existing projects from JSON file
    $projects = [];
    if (file_exists($jsonFile)) {
        $projects = json_decode(file_get_contents($jsonFile), true) ?? [];
    }

    // Add new project to the array
    $projects[] = $newProject;

    // Save updated projects array back to JSON file
    file_put_contents($jsonFile, json_encode($projects, JSON_PRETTY_PRINT));

    // Redirect to prevent form resubmission
    header('Location: add.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Project</title>
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
    <!-- <script src="https://cdn.tailwindcss.com"></script>Z -->
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/duotone-light.css">
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.2/css/all.css">
    <link rel="stylesheet" href="style.css">
    <style>
        /* Animated gradient background */
        body {
            margin: 0;
            padding: 0;
            font-family: 'Poppins', sans-serif;
            /* background: linear-gradient(120deg, #74ebd5, #9face6); */
            height: 100vh;
            display: flex;
            flex-direction: column;
        }

        /* Navigation bar */
        .navbar {
            background: #2c3e50;
            padding: 15px 30px;
            color: white;
            font-size: 18px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }

        .navbar span {
            font-weight: bold;
        }

        .navbar a {
            color: white;
            text-decoration: none;
            /* font-weight: bold; */
            color: #efefef;
            transition: color 0.3s ease;
        }

        .navbar a:hover {
            color:#ffffff;
        }

        /* Form container with floating card design */
        .form-container {
            background: white;
            border-radius: 15px;
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
            padding: 40px;
            max-width: 600px;
            width: 70%;
            margin: auto;
            margin-top: 50px;
            animation: slideIn 1s ease-out;
        }

        @keyframes slideIn {
            from {
                transform: translateY(100px);
                opacity: 0;
            }

            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        h2 {
            text-align: center;
            color: #333;
            margin-bottom: 20px;
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 100%;
        }

        input {
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-size: 16px;
            outline: none;
            transition: all 0.3s ease;
            width: 100%;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        input:hover {
            border-color: #74ebd5;
        }

        input:focus {
            border-color: #74ebd5;
            box-shadow: 0 0 10px rgba(78, 137, 255, 0.5);
        }

        button {
            padding: 15px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            background: #2c3e50;
            color: white;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(44, 62, 80, 0.3);
        }

        button:hover {
            background: #1a252f;
            box-shadow: 0 8px 20px rgba(44, 62, 80, 0.5);
            transform: translateY(-3px);
        }

        button:active {
            transform: translateY(2px);
        }
    </style>
</head>

<body>
    <!-- Navigation bar -->
    <div class="navbar">
        <span>Productivity Dashboard</span>
        <a href="index.html"><i class="fas fa-arrow-left"></i> Back to Dashboard</a>
    </div>

    <!-- Form container -->
    <div class="form-container">
        <h2><i class="fas fa-plus-circle"></i> Add Project</h2>
        <form method="POST">
            <input type="text" name="name" placeholder="Project Name" required>
            <input type="text" name="author" placeholder="Author" required>
            <input type="url" name="url" placeholder="Project URL" required>
            <input type="tel" name="phone" placeholder="Phone" required>
            <input type="url" name="filemanager" placeholder="File Manager URL">
            <input type="url" name="cpanel" placeholder="cPanel URL">
            <input type="url" name="git" placeholder="GitHub URL">
            <input type="text" name="folderPath" placeholder="Folder Path">
            <button type="submit">Add Project</button>
        </form>
    </div>
</body>

</html>