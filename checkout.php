<?php
// Database connection details
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "customer";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch form data
$fullName = $_POST['fullName'];
$email = $_POST['email'];
$address = $_POST['address'];
$totalPrice = $_POST['totalPrice'];
$productNames = $_POST['productNames'];
$paymentMethod = $_POST['paymentMethod'];

// Insert data into database
$sql = "INSERT INTO orders (fullName, email, address, totalPrice, productNames, paymentMethod)
        VALUES ('$fullName', '$email', '$address', '$totalPrice', '$productNames', '$paymentMethod')";

if ($conn->query($sql) === TRUE) {
    echo "Order placed successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();
?>
