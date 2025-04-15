<?php
if (isset($_GET['path'])) {
    $path = $_GET['path'];
    // Windows: open folder
    shell_exec("start \"\" \"$path\"");
}
if (isset($_GET['code'])) {
    $path = $_GET['code'];
    // Windows: open folder
    shell_exec("code $path");
}
?>
<script>
    // Optional: Add a delay before going back to the previous page
    setTimeout(function() {
        history.go(-1);
    }, 500); // 1000 milliseconds = 1 second
</script>