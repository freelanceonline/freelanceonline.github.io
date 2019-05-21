<?php
    session_start();
    $login = $_POST["login"];
    $password = $_POST["password"];
    $_SESSION["login"] = $login;
    $_SESSION["password"] = $password;

    require "php/connect.php";

    if( isset($_POST["log"]) ){
        $account = mysqli_query($connection, "SELECT * FROM `test` WHERE `login` = '$login' AND `password` = '$password'");
        if( mysqli_num_rows($account) == 0 ){
            echo '<div style="background: #e74c3c; color: white; font-weight: bold">логин или пароль неверный</div>';
        }
        else{
            echo '<div style="background: #2ecc71; color: white; font-weight: bold">привет '.$login.'</div>';
        }
    }

    if( isset($_POST["sign"]) ){
        $account = mysqli_query($connection, "SELECT * FROM `test` WHERE `login` = '$login'");
        if( mysqli_num_rows($account) == 0 ){
            $account = mysqli_query($connection, "INSERT INTO `test` (`login`, `password`) VALUES ('$login', '$password');");
            echo '<div style="background: #2ecc71; color: white; font-weight: bold">вы успешно зарегистрировались</div>';
        }
        else{
            echo '<div style="background: #e74c3c; color: white; font-weight: bold">такой логин уже существует</div>';
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="bootstrap/bootstrap.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/jquery-3.3.1.min.js"></script>
    <title>PHP</title>
</head>
<body>
    <div class="container"><br>
        <form action="" method="post">
            <!-- enctype="multipart/form-data" -->
            <input type="text" name="login" id="login " class="form-control" value="<?php echo $_SESSION["login"];?>"><br>
            <input type="password" name="password" id="password" class="form-control" value="<?php echo $_SESSION["password"];?>"><a href="#" id="viewpass">View password</a><br>
            <button type="submit" name="log" class="btn btn-success">Login</button>
            <button type="submit" name="sign" class="btn btn-warning">Sign up</button>
            <?php if( isset($_POST["log"]) ){
                //login
                echo '<div style="color: green">'.'LOGIN'.'</div>';
            }?>
            <?php if( isset($_POST["sign"]) ){
                //login
                echo '<div style="color: orange">'.'SIGN UP'.'</div>';
            }?>
        </form>
    </div>
    <script src="js/main.js"></script>
</body>
</html>