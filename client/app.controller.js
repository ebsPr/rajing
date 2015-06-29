(function() {
	angular.module('appRaje').controller('appController',appController);

	function appController($scope){
		$scope.friends = [
			{id:0,nick:'mc34',name:'Mathiew',secondName:'Thompson',lastName:'Gonzalez',
				confessions: [
					{text:'I like potatoes',points:35},
					{text:'I like eat rats',points:3},
					{text:'I never been in Paris',points:13}
				]
			},
			{id:1,nick:'solnaciente',name:'Maria',secondName:'Garcia',lastName:'Martinez',
				confessions: [
					{text:'All sucks',points:35},
					{text:'I never see a fish',points:3}
				]
			},
			{id:2,nick:'marta95',name:'Marta',secondName:'Maria',lastName:'mcEnzie',
				confessions: [
					{text:'I never seen Barrio Sesamo',points:35},
					{text:'I drive every day without license',points:3},
					{text:'I kill birds every month',points:13},
					{text:'I saw old people in your houses',points:3},
					{text:'I eat paper',points:56},
					{text:'I saw a police kill his mother',points:1},
					{text:'I steal kids',points:32}
				]
			},
			{id:3,nick:'EPC_crazy',name:'Eduardo',secondName:'Poca',lastName:'Cosa',
				confessions: [
					{text:'I eat other people',points:35},
					{text:'I sleep with dogs',points:3},
					{text:'I take baths with tomatoes',points:13},
					{text:'I dream with my dog',points:3}
				]
			}
		];

		$scope.wall = $scope.friends[0];

		$scope.confessions = [
			{id:1,nick:'mc34',name:'Mathiew',secondName:'Thompson',lastName:'Gonzalez',confession:'I like eat patatoes',points:35},
			{id:2,nick:'solnaciente',name:'Maria',secondName:'Garcia',lastName:'Martinez',confession:'I am fat',points:35},
			{id:3,nick:'marta95',name:'Marta',secondName:'Maria',lastName:'mcEnzie',confession:'bla bla confession',points:3},
			{id:4,nick:'test5',name:'Eduardo',secondName:'Poca',lastName:'Cosa',confession:'test test confession test',points:112}
		]; 
	}
})();