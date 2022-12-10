<?php
$filename = basename($_FILES['myfile']['name']);
if (move_uploaded_file($_FILES['myfile']['tmp_name'], "../files/$filename")) {  echo "ok!  File uploaded";} else {  echo "An error occurred";}
?>

<form action="#" method="post" enctype="multipart/form-data">  <label>File: <input type="file" name="myfile" /></label>    <input type="submit" value="send" />  </form>
