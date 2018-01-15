<?php
require '../classes/CountryRepository.php';	
header('Content-type:application/json');
$countries=CountryRepository::getCountries();
$count=CountryRepository::getCount();
echo "}])'\n";
$countries= json_encode($countries);
echo $countries;
/*$countries= json_decode($countries);
var_dump($countries);
$count= json_encode($count);
echo $count.PHP_EOL;
$count= json_decode($count);
var_dump($count);*/