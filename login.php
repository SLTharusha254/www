<?php
session_start();

$validUsername = 'admin';
$validPassword = 'adminpassword';

if (
    isset($_POST['username']) &&
    isset($_POST['password']) &&
    $_POST['username'] === $validUsername &&
    $_POST['password'] === $validPassword
) {
    $_SESSION['admin'] = true;
    header('Location: index.php');
    exit;
} else {
    echo 'Invalid username or password';
}
?>
