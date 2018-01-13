<?php

require 'Country.php';
require 'State.php';
class CountryRepository{

	private static $countries=array();

	protected static function init(){
		$countries=array();

		array_push($countries, 
			new Country('Australia','at',array(
				new State('Stria'),new State('Vienna')))
		);
		array_push($countries, 
			new Country('Canada','ca',array(
				new State('Ontario'),new State('Quebec')))
		);
		array_push($countries, 
			new Country('Luxemburg','lu')
		);

		self::$countries=$countries;
	}

	public static function getCountries()
	{
		if(count(self::$countries)===0){
			self::init();
		}
		return self::$countries;
	}
}