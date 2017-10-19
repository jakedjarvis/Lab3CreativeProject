angular.module('app', [])
.factory('classFactory', [function(){
			var x = {
				classes: []
			};
			return x;
		}])
.controller('mainCtrl', [
	'$scope',
	'classFactory',
	mainCtrl]);

function mainCtrl ($scope, classFactory) {
	$scope.classes = classFactory.classes;

	$scope.classes.push({
		Grade: '',
		Credits: '3'
	});

	console.log($scope.classes);

	$scope.addClass = function(){
		$scope.classes.push({
			Grade: '',
			Credits: '3'
		});
		console.log($scope.classes);
	};

	$scope.calcGPA = function(){

		var gpaConvertArray = [];
		var creditsArray = [];

		console.log($scope.classes[1]);

		for (var i=0;i<$scope.classes.length;i++){

			console.log("in the for loop");

			if ($scope.classes[i].Grade == "A")
			{
				gpaConvertArray.push(4);
			}
			else if ($scope.classes[i].Grade == "A-")
			{
				gpaConvertArray.push(3.7);
			}
			else if ($scope.classes[i].Grade == "B+")
			{
				gpaConvertArray.push(3.3);
			}
			else if ($scope.classes[i].Grade == "B")
			{
				gpaConvertArray.push(3);
			}
			else if ($scope.classes[i].Grade == "B-")
			{
				gpaConvertArray.push(2.7);
			}
			else if ($scope.classes[i].Grade == "C+")
			{
				gpaConvertArray.push(2.3);
			}
			else if ($scope.classes[i].Grade == "C")
			{
				gpaConvertArray.push(2);
			}
			else if ($scope.classes[i].Grade == "C-")
			{
				gpaConvertArray.push(1.7);
			}
			else if ($scope.classes[i].Grade == "D+")
			{
				gpaConvertArray.push(1.3);
			}
			else if ($scope.classes[i].Grade == "D")
			{
				gpaConvertArray.push(1);
			}
			else if ($scope.classes[i].Grade == "D-")
			{
				gpaConvertArray.push(.7);
			}
			else if ($scope.classes[i].Grade == "F")
			{
				gpaConvertArray.push(0);
			}
			else if ($scope.classes[i].Grade == "")
			{
				gpaConvertArray.push(0);
			}


		}
		console.log(gpaConvertArray);


		for (var i=0;i<$scope.classes.length;i++){
			creditsArray.push(parseInt($scope.classes[i].Credits));
		}

		console.log(creditsArray);

		var total = 0;
		var creditTotal = 0;

		for(var i = 0; i < $scope.classes.length; i++){
			total = total + (gpaConvertArray[i] * creditsArray[i])
		}

		creditsArray.forEach(function(element){
			creditTotal = creditTotal + element;
		});

		console.log(total);
		console.log(creditTotal);

		var finalGPA = total/creditTotal;
		$scope.finalGPA = finalGPA.toFixed(2);
		console.log(finalGPA);


	};


}