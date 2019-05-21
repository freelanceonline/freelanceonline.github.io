<?php
    $connection = mysqli_connect('localhost', 'php', '', 'php');
    if( $connection == false ){
        echo "Don't connection";
        exit();
    }
?>