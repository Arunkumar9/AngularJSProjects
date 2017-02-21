<?php
/**
 * Class for connecting to the reporting database and close the connection
 * @author Arunkumar
 *
 */
class ReportingDBConnection {
	
	private $mySqlConnection =	null;

 	public function createConnection()	{
		include_once('AngularConfig.php');

		global $mySqlConnection;
 			
 		
 		if ( !$mySqlConnection  )	{
 			$mySqlConnection = mysqli_connect(Angular_DBHOST,Angular_DBUSER,Angular_DBPASS,Angular_DBNAME);
 			if (mysqli_connect_errno())  {
		 	 	echo "Failed to connect to MySQL: " . mysqli_connect_error();
		  	}
 			// connect the database
 			$val = mysqli_select_db($mySqlConnection,REPORTING_DBNAME);
 		}
 			return $mySqlConnection;
 	}


 	public function closeConnection($mySqlConnection)	{

 		try {
 			if ( $mySqlConnection  )	{
 				mysqli_close( $mySqlConnection );
 			}
 		}
 		catch( Exception $e  )	{
 			echo ' Unable to close the database connection : ',  $e->getMessage(), "\n";
 		}

 	}
 	
}

?>