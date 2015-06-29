(function() {

	angular.module('appRaje').controller('detailController',detailController);

	function detailController($scope,$stateParams,$filter){
		$scope.$parent.wall = $filter('filter')($scope.friends, { id: $stateParams.friendId})[0];
	}

})();