<?php
header('Content-Type: application/json;charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
header('Allow: GET, POST, OPTIONS, PUT, DELETE');
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

include("../config/db.php"); 


    $query = "SELECT * FROM task";
    
    //dar la cadena de conexión y la consulta
    $result= mysqli_query($conn, $query);
    $return_data = array();
    if(!$result){
        // die("Query Failed");
        $return_data["query"] = $query;
        $return_data["error"] = "INSERT_ERROR";
    }else{
        $return_data['data'] = mysqli_fetch_array($result);
    }

    $return_data["query"] = $query;
    $return_data['message'] ='Product saved succesfully';
    $return_data['message_type'] ='success';

    echo json_encode($return_data);
    // header("Location: index.php");

?>