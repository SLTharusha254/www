<?php
session_start();

if (!isset($_SESSION['admin']) || $_SESSION['admin'] !== true) {
    header('HTTP/1.0 403 Forbidden');
    die('Permission Denied');
}

$targetDir = 'uploads/';
$targetFile = $targetDir . basename($_FILES['image']['name']);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));

if (isset($_POST['submit'])) {
    $check = getimagesize($_FILES['image']['tmp_name']);
    if ($check === false) {
        echo 'File is not an image.';
        $uploadOk = 0;
    }
}

if (file_exists($targetFile)) {
    echo 'Sorry, file already exists.';
    $uploadOk = 0;
}

if ($_FILES['image']['size'] > 5000000) {
    echo 'Sorry, your file is too large.';
    $uploadOk = 0;
}

$allowedFormats = ['jpg', 'jpeg', 'png', 'gif'];
if (!in_array($imageFileType, $allowedFormats)) {
    echo 'Sorry, only JPG, JPEG, PNG & GIF files are allowed.';
    $uploadOk = 0;
}

if ($uploadOk == 0) {
    echo 'Sorry, your file was not uploaded.';
} else {
    if (move_uploaded_file($_FILES['image']['tmp_name'], $targetFile)) {
        echo 'The file ' . htmlspecialchars(basename($_FILES['image']['name'])) . ' has been uploaded.';
    } else {
        echo 'Sorry, there was an error uploading your file.';
    }
}
?>
