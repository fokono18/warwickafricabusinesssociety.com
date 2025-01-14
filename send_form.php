<?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") { 

        $name = htmlspecialchars($_POST['name']);
        $email = htmlspecialchars($_POST['email']);
        $message = htmlspecialchars($_POST['message']);

        $to = "warwickafricanbusinesssociety@gmail.com";
        $subject = "New message from $name";
        $headers = "from: $name\r\nEmail: $email\r\n";

        if(mail($to,$subject,$message,$headers)){
            echo "Message sent successfully";
        }else{
            echo "Failed to send message";
        }


    } else {

        echo "Invalid request";

    }
?>