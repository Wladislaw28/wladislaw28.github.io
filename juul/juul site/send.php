<?php

$recepient = "vakincompany@gmail.com";
$sitename = "JuuL";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$tel = trim($_POST["tel"]);
$message = "Имя: $name \n E-mail: $email \n Телефон: $tel   \n";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");