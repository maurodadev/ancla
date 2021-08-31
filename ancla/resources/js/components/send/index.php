<?php
header('Access-Control-Allow-Origin:  *');
header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Authorization, Origin');
header('Access-Control-Allow-Methods:  *');
header("Content-Type", "application/json");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$errors = array();
if ($_SERVER['REQUEST_METHOD'] === "POST") {
  if (empty($_POST['email'])) {
    $errors[] = 'Email non inserita, riprova';
  } else {
    $email = $_POST['email'];
    
    // validating the email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Email non valida, riprova';
    }
  }
  if (empty($_POST['messaggio'])) {
    $errors[] = 'Il messaggio è vuoto, riprova';
  } else {
    $message = $_POST['messaggio'];
  }

  if (empty($_POST['nome'])) {
    $errors[] = 'Il nome non è stato inserito, riprova';
  } else {
    $nome = $_POST['nome'];
    

  if (empty($errors)) {
    $date = date('j, F Y h:i A');

    
    $emailBody = "
    <html>
    <head>
    <title>$nome ti sta contattando</title>
    </head>
    <body style=\"background-color:#fafafa;\">
    <div style=\"padding:20px;\">
    Data: <span style=\"color:#888\">$date</span>
    <br>
    Email: <span style=\"color:#888\">$email</span>
    <br>
    Messaggio: <div style=\"color:#888\">$message</div>
    </div>
    </body>
    </html>
    ";
    
    $headers = 	'From: ANCLA Official Website Contact Form' . "\r\n" .
    "Reply-To: $email" . "\r\n" .
    "MIME-Version: 1.0\r\n" . 
    "Content-Type: text/html; charset=iso-8859-1\r\n";

    $to = 'selter85@hotmail.com';
    if (empty($_POST['oggetto'])) {
        $subject = 'ANCLA Richiesta contatto per: Non specificato';
    } else $subject = 'ANCLA Richiesta contatto per: ' + $_POST['oggetto'];
    
    if (mail($to, $subject, $emailBody, $headers)) {
      $sent = true;	
    }
  }
}
?>

  <?php if (!empty($errors)) : ?> 

{
  "status": "fail",
  "error":  <?php echo json_encode($errors) ?>
}
  <?php endif; ?>
  
  
  <?php if (isset($sent) && $sent === true) : ?> 

{
  "status": "success",
  "message": "I tuoi dati sono stati inviati con successo"
}
<?php endif; } ?>
