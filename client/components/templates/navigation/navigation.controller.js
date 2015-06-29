(function() {
	angular.module("appRaje").controller('navigationController',navigationController);

	function navigationController($state,$scope){
	
		$scope.selectedFriend = function(data){
			$state.go('mywall.detail',{friendId:data.originalObject.id})
		};

	
	};

})();