<?php
require_once('config.php');

	// Connect to server and select database.
	mysql_connect(DB_HOST, DB_USER, DB_PASSWORD);
	mysql_select_db(DB_DATABASE);
    $tbl_name="Highscore"; // Table name

    // Orders result by descending and takes only the top ten scores.
	$sql="SELECT * FROM $tbl_name ORDER BY Score DESC LIMIT 10";
	
	$result=mysql_query($sql);

$rank = 0;

$length = count($rows);
echo "<table>";
    echo "<tr>";
    echo  "<th>Rank</th>";
    echo  "<th>Name</th>";
    echo  "<th>Score</th>";
    echo "</tr>";

while($rows=mysql_fetch_array($result)){ // Start looping table row

    echo "<tr>";
    echo  "<td>";
    echo $rank += 1;
    echo "</td>";
    echo  "<td>";
    echo $rows ['Name'];
    echo "</td>";
    echo "<td>";  
    echo $rows ['Score'];
    echo "</td>";
    echo "</tr>";

// Exit looping and close connection
}
echo "</table>";
mysql_close();
?>
    