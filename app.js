(function(){

	var app=angular.module('funwithcountries',[]);
	//app.controller('CountryController', function(){
		/*
		this.countries=[
		{
			name:"Germany",
			code:'de',
			states:[
			{
				name:"Bavaria"
			},{
				name:"Berlin"
			}]
		},
		{
			name:"United states",
			code:'us',
			states:[
			{
				name:"California"
			},{
				name:"Maryland"
			}]
		},
		{
			name:"Luxembourg",
			code:'lu',
			
		}];

		});
		*/

		//$http act as dependency injection
		/*app.controller('CountryController', function($http){
		
		var that=this;
		$http({
			method: 'GET',
			url: 'services/getCountries.php'
		}).success(function(data){
			// with controller 'this' not work

			//$this.countries=data;

			// u need use
			that.countries=data;
		});
	});*/
	app.factory('countryService',function($http){
		var baseUrl='services/'
		return{
			//method name:
			getCountries:function(){
				return $http.get(baseUrl+'getCountries.php');
			}
		};
	}])
	app.controller('CountryController',function(countryService){
		var that=this;
		countryService.getCountries().success(function(data){
			that.countries=data;
		}
	});
})();