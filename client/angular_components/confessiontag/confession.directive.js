angular.module('confessionModule',[]).directive('confession',confessionDirective);

function confessionDirective(){
  return {
    restrict: 'E',
     scope: {
      friend: '=friend'
    },
     controller: function($scope) {
     	$scope.showAdd = true;
	    $scope.addPoint = function (friend){
	     	friend.points++;
	     	$scope.showAdd = false;
	    };
    },
    templateUrl: '../../angular_components/confessiontag/confession.html'
  }
};