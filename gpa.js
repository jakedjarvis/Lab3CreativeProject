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
		Grade: 'B',
		Credits: 4
	});

	console.log($scope.classes);

	$scope.addClass = function(){
		$scope.classes.push({
			Grade: $scope.letter,
			Credits: $scope.numCredits
		});
	};


}