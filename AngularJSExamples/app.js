(function(){
var app= angular.module('Assets', []);

	app.controller('EquipmentController', function(){
		this.products = equipments;
		this.lableNames = fieldNames;
		//Verified this.fieldNames = fieldNames;  is not working, The property name of the controller and 
		//java script object variable name which holds the data should not be same
	});

	//Note:here we have not mentioned the canDelete value then Angular JS will take this value as false.
	var equipments =[
		{
			ModelName   : 'Meter',
			ModelNumber : '1000-01-320RA',
			SerialNumber: 'ACDS1241414',
			LocationName: 'Store-1234',
			UnitCost    : '2000',
			Quantity    : 1,
			canTransfer : true,
			isTrashed   : false    
		},
		{
			ModelName   : 'Battery',
			ModelNumber : '1001-01-320RA',
			SerialNumber: 'ACDS12333',
			LocationName: 'Store-1234',
			UnitCost    : '500',
			Quantity    : 1,
			canTransfer : true,
			isTrashed   : true
		}
	];

	var fieldNames = {
		ModelName   : 'Model Name',
		ModelNumber : 'Model Number',
		SerialNumber: 'Serial Number',
		LocationName: 'Location Name',
		UnitCost    : 'Unit Cost',
		Quantity    : 'Quantity'
	};

})();

