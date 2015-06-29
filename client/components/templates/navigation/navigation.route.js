(function() {
	angular.module('appRaje').config(navigationConfig);

	function navigationConfig($stateProvider,$urlRouterProvider){

		$urlRouterProvider.when('/mywall','/mywall/detail/99');

		 $stateProvider
		    .state('toplist', {
		      url: "/toplist",
		      templateUrl: "../../../components/toplist/toplist.html"
		    })
		    .state('mywall', {
		      url: "/mywall",
		      templateUrl: "../../../components/mywall/mywall.html"
		    })
	    
	}
})();