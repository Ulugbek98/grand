<?php

/* https://api.telegram.org/bot1013099887:AAFSa_kWdpYDP4j2aUMyuh6ANGwBsoSEGhw/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */
$plas= "%2B";
$name = $_POST['your-name'];
$phone =$_POST['your-phone'];
$subject = $_POST['your-subject'];
$message = $_POST['your-message'];
$token = "1013099887:AAFSa_kWdpYDP4j2aUMyuh6ANGwBsoSEGhw";
$chat_id = "-349775699"; 
$arr = array(
  'Имя: ' => $name,
  'Номер: ' => $plas.$phone,
  'Тема: ' => $subject,
  'Сообщение: ' => $message,
);

foreach ($arr as $key => $value) {
  $txt .= "<b>" . $key . "</b> " . $value . "%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
