
<?php


$db = "a5586995_quikpik";//Your database name
$dbu = "a5586995_admin";//Your database username
$dbp = "the18team";//Your database users' password
$host = "mysql6.000webhost.com";//MySQL server - usually localhost

$dblink = mysql_connect($host,$dbu,$dbp);
$seldb = mysql_select_db($db);

if(isset($_GET['name']) && isset($_GET['score'])){

     //Lightly sanitize the GET's to prevent SQL injections and possible XSS attacks
     $name = strip_tags(mysql_real_escape_string($_GET['name']));
     $score = strip_tags(mysql_real_escape_string($_GET['score']));
     $sql = mysql_query("INSERT INTO `$db`.`Highscore` (`Number`,`Name`,`Score`) VALUES ('','$name','$score');");
     
     if($sql){
          
          //The query returned true - now do whatever you like here.
          echo 'Your score was saved. Congrats!';
          
     }else{
     
          //The query returned false - you might want to put some sort of error reporting here. Even logging the error to a text file is fine.
          echo 'There was a problem saving your score. Please try again later.';
          
     }
     
}else{
     echo 'Your name or score wasnt passed in the request. Make sure you add ?name=NAME_HERE&score=1337 to the tags.';
}

mysql_close($dblink);//Close off the MySQL connection to save resources.
?>

<!--https://www.scirra.com/tutorials/4839/creating-your-own-leaderboard-highscores-easy-and-free-php-mysql/page-3-->
