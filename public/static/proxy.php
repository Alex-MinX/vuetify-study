<?php
$nix="";
$type=$_GET['requrl'];
if ($_GET['requrl'] != $nix) {
	$file = file_get_contents($_GET['requrl']);
}
elseif ($_POST['requrl'] != $nix) {
	$file = file_get_contents($_POST['requrl'], false, $_POST['data']);
}
else {
	$file = "false type";
}
echo $file;
?>