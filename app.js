(function(){

	var app=angular.module('funwithcountries',[]);
	app.controller('CountryController', function(){
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
	})
})();