<?php
   
    $result = array();

    function getAllUsers($conn) {
        $query = "SELECT * FROM tbl_things";

        $runQuery = $conn->query($query);

        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        //return $result;
        echo (json_encode($result));
    }

    function getSingleUser($conn, $id) {
        $query = "SELECT * FROM tbl_things WHERE id=" . $id . "";

        $runQuery = $conn->query($query);

        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        //return $result;
        echo (json_encode($result));
    }