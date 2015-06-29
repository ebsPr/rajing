(function() {

	angular.module('appRaje').config(navigationConfig);

	function navigationConfig($stateProvider){
		
		 $stateProvider
		    .state('mywall.detail', {
		      url: "/detail/{friendId}",
		      templateUrl: "../../../components/mywall/detail/detail.html",
		      controller : 'detailController'
		    });
	}
})();