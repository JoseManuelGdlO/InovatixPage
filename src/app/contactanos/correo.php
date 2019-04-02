<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');



        $dia=date("d.m.Y");
        $hora=date("H:i:s");
        $nombre = $_GET['nombre'];
        $empresa = $_GET['empresa'];
        $telefono = $_GET['telefono'];
        $email = $_GET['email'];
        $asunto = $_GET['producto'];
        $texto = $_GET['mensaje'];

echo $nombre."    Empresa--->".$empresa."    Telefono----->".$telefono."   Correo------->".$email."  Asunto------->".$asunto.$texto;

        $mensaje = "
         Este mensaje se a enviado desde el formulario de contacto de WWW.MIDOMINIO.COM<br> 
         El dia: $dia a las: $hora<br><br>
        ----------------------------------------------------------------------------<br><br>
         Nombre: $nombre<br><br>
         Email:  $email<br><br>
         Telefono:  $telefono<br><br>
         Asunto:  $asunto <br><br>
         Texto:  $texto<br><br>
         ----------------------------------------------------------------------------<br><br>
         ";
            require("class.phpmailer.php");
         
        //------------------------------------------------------
            $correo_destino="josemanuelgarciadelao@gmail.com"; //a que correo llega
            $nombre_destino="FORMULARIO DE CONTACTO MIDOMINIO.COM"; //nombre de quien recibe
            $correo_emisor="pruebas@proveedoradellantas.com"; //tu correo
            $nombre_emisor="www.midominio.com"; //tu nombre
            $contrasena="joczmanuel950624"; //contraseña de tu usuario
        //--------------------------------------------------------
            $mail = new PHPMailer();
            $mail->isSendMail(); // Envia el correo via SMTP
            $mail->SMTPAuth = true; // Enciende la autenticacion SMTP
            $mail->Username = $correo_emisor; // Usuario SMTP
            $mail->Password = $contrasena; // Contrasena SMTP    
            $mail->From = $correo_emisor;
            $mail->FromName = $nombre_emisor; //Nombre del que envia el correo
            $mail->AddAddress($correo_destino,$nombre_destino);
            $mail->AddReplyTo($correo_emisor,$nombre_emisor);
            $mail->WordWrap = 50; // Word wrap
            $mail->IsHTML(true); // Enviar como HTML
            $mail->Subject = "FORMULARIO DE CONTACTO"; //Asunto
            $mail->Body = $mensaje; //Cuerpo en HMTL
            $mail->AltBody = "
         El mensaje se a enviado el dia: $dia a las: $hora<br><br>
        ----------------------------------------------------------------------------<br><br>
         Nombre: $nombre<br><br>
         Email:  $email<br><br>
         Telefono:  $telefono<br><br>
         Asunto:  $asunto <br><br>
         Texto:  $texto<br><br>
         ----------------------------------------------------------------------------<br><br>
         "; //Cuerpo en Texto plano
            if(!$mail->Send()){
              echo "Error: " . $mail->ErrorInfo;
            }else{
              echo "OK, SEND MAIL";
            }
        ?>    

