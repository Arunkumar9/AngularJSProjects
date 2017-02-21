<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "angularemployeed";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT ID, Name  FROM employees";
$result = mysqli_query($conn, $sql);

$employees = array();
if (mysqli_num_rows($result) > 0) {
    // output data of each row
    /* while($row = mysqli_fetch_assoc($result)) {
        echo "id: " . $row["ID"]. " - Name: " . $row["Name"]. "<br>";
    } */
	
	while($employee = mysqli_fetch_assoc($result)) {
		array_push($employees,$employee);
	}
} else {
    echo "0 results";
}

	$format = 'json';

	if($format == 'json') {
		header('Content-type: application/json');
		echo json_encode($employees);
	}else {
		header('Content-type: text/xml');
		echo '<posts>';
		foreach($posts as $index => $post) {
			if(is_array($post)) {
				foreach($post as $key => $value) {
					echo '<',$key,'>';
					if(is_array($value)) {
						foreach($value as $tag => $val) {
							echo '<',$tag,'>',htmlentities($val),'</',$tag,'>';
						}
					}
					echo '</',$key,'>';
				}
			}
		}
		echo '</posts>';
	}

//echo json_encode($employees);
//print_r($employees);


mysqli_close($conn);
?>