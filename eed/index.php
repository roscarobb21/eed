<?php header('Access-Control-Allow-Origin: *'); ?>
<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

$servername = "localhost";
$username = "dataAdmin";
$password = "";
$dbname = "eed";
$array = array();
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  $anunturi = "SELECT * from anunturi ORDER BY data DESC LIMIT 5";
  $practica = "SELECT * from practica order by data DESC LIMIT 5";
  $locuri = "SELECT * from munca order by data DESC LIMIT 5";
  $anunturiResult = $conn->query($anunturi);
  $practicaResult = $conn->query($practica);
  $locuriResult = $conn->query($locuri);
 
  if ($anunturiResult->num_rows > 0) {
    while($row = $anunturiResult->fetch_assoc()) {
        $array[]=["id"=> $row["id"],"text"=>$row["text"], "data"=>$row["data"], "link"=>$row["link"] ];
    }
  } else {
    echo "0 results";
  }

  if ($practicaResult->num_rows > 0) {
    while($row = $practicaResult->fetch_assoc()) {
        $array1[]=["id"=> $row["id"],"text"=>$row["text"], "data"=>$row["data"], "link"=>$row["link"] ];
    }
  } else {
    echo "0 results";
  }

  
  if ($locuriResult->num_rows > 0) {
    while($row = $locuriResult->fetch_assoc()) {
        $array2[]=["id"=> $row["id"],"text"=>$row["text"], "data"=>$row["data"], "link"=>$row["link"] ];
    }
  } else {
    echo "0 results";
  }
 

  $dataArr[]= $array;
  $dataArr[]=$array1;
  $dataArr[]=$array2;
  $json = json_encode($dataArr);
  echo $json;
  $conn->close();
?>