<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Gallery</title>
</head>
<body>
    <main class="page projects-page">
        <!-- Existing content -->

        <section class="login-section">
            <div class="container">
                <h2>Login</h2>
                <form id="loginForm" method="post" action="login.php">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required>
                    <button type="submit">Login</button>
                </form>
            </div>
        </section>

        <?php
        session_start();
        if (isset($_SESSION['admin']) && $_SESSION['admin'] === true) {
        ?>
            <section class="upload-section">
                <div class="container">
                    <h2>Image Upload Portal (Admin Only)</h2>
                    <form id="imageUploadForm" enctype="multipart/form-data" method="post" action="upload.php">
                        <input type="file" name="image" accept="image/*" required>
                        <button type="submit">Upload Image</button>
                    </form>
                </div>
            </section>
        <?php
        }
        ?>

        <!-- Existing content -->

    </main>
</body>
</html>
