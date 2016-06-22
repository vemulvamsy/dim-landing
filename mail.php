<?php
if(isset($_POST['id1'])){
	$data=explode("^",$_POST['id1']);

	$name=$data[0];
	$email=$data[1];
	$phone=$data[2];
	$msg=$data[3];

	if($name !="" and $email != ""){
		
		$to = "vemul.vamsy@gmail.com";
		$subject = "Mail From: DIM Landing Page";
		$message = "
		<!doctype html>
		<html lang='en'>
		 <head>
		  
			<title>Digitally Inspired Media</title>
			<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'>
			<!-- google fonts -->
			<link href='https://fonts.googleapis.com/css?family=Raleway:400,200,200italic,300,500,600,700,800' rel='stylesheet' type='text/css'>
			<style>
			body,html{
			margin:0;
			padding:0;
			background-color:#282828;
			}
			#mail-bg{
			background-color:#282828 !important;
			width:100%;
			height:auto;
			display:block;
			}
			#logo img{
				margin:10px 0px 10px 10px;
				background-color:#282828;
			}
			#header{
				width:100%;
				margin:10px 0px;
				background-color:#282828;
			}
			#content{
			width:100%;
			margin:10px 0px 30px 0px;
			background-color:#282828;
			}
			h1{
			font-family: raleway, sans-serif;
			font-size:25px;
			font-weight:300;
			letter-spacing:1px;
			color:#fff;
			text-align:center;
			margin:10px 0px 20px 0px;
			background-color:#282828;
			}
			p{
			font-family: raleway, sans-serif;
			font-size:13px;
			font-weight:200;
			letter-spacing:1px;
			color:#fff;
			text-align:left;
			margin-left:10px;
			background-color:#282828;
			}
			
			p span{
			font-family: raleway, sans-serif;
			font-size:13px;
			font-weight:300;
			letter-spacing:1px;
			color:#fff;
			text-align:left;
			margin-left:10px;
			background-color:#282828;
			}
			</style>
		 </head>
		 <body>
		  <div id='mail-bg' style='background-color:#282828;'>
			<div id='logo'>
				<img src='http://digitallyinspiredmedia.com/demo/dim-landing/images/logo.png' width='200px' height='auto' />
			</div>
			<div id='header'>
				<h1>Mail from DIM Landing Page</h1>
			</div>
			<div id='content'>
				<p><span>Name: </span>". $name ."</p>
				<p><span>Mobile No.: </span> ".$phone."</p>
				<p><span>Email ID: </span> ".$email."</p>
				<p><span>Message: </span></p>
				<p>".$msg."</p>
			</div>
		  </div>
		 </body>
		</html>
		";
		

		// Always set content-type when sending HTML email
		$headers = "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

		// More headers
		$headers .= 'From:' .$name. '<'.$email.'>' . "\r\n";

		if(mail($to,$subject,$message,$headers)){			
			echo "<p class='suc'>Thank you...</p>";
		}
		else{
			echo "<p class='err'>Mail sending failed</p>";
		}

	}
	else{
		echo "<p class='err'>( * ) fields not to be empty...</p>";
	}

}
?>