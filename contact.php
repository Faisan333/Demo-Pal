<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = strip_tags(trim($_POST["subject"]));
    $message = trim($_POST["message"]);

    // Email address where you want to receive the messages
    $recipient = "azeezfaizan@gmail.com";

    // Email subject
    $email_subject = "New Contact Message: $subject";

    // Email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Email headers
    $email_headers = "From: $name <$email>";

    // Send the email
    if(mail($recipient, $email_subject, $email_content, $email_headers)){
        echo "success";
    } else {
        echo "error";
    }

} else {
    echo "error";
}
?>
