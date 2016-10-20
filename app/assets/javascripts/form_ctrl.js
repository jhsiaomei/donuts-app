(function() {
  'use strict';
  angular.module('app').filter('currentDate', function() {
    return function() {
        (new Date, 'yyyy-MM-dd');
    };
  })

  angular.module('app').controller('formCtrl', function($scope, $http) {
    $http.get('api/v1/donuts.json').success(function(data, status, headers, config) {
      $scope.donuts = data;
    });


    // $scope.people = [
    //   {
    //     name: 'Sally Jones',
    //     bio: 'Long walks on a beach and short naps in the sand.',
    //     bioVisible: false
    //   },
    //   {
    //     name: 'Bob Barker',
    //     bio: 'Retired from a life of television, because he has a face for radio.',
    //     bioVisible: false
    //   }
    // ];
    
    // $scope.toggleBioVisible = function(inputIndex) {
    //   $scope.people[inputIndex].bioVisible = !$scope.people[inputIndex].bioVisible;
    // };

    // $scope.addBio = function(inputName, inputBio) {
    //   if (inputName !== '' && inputBio !== '') {
    //     $scope.people.push({
    //       name: inputName,
    //       bio: inputBio,
    //       bioVisible: false
    //     });
    //     $scope.newName = '';
    //     $scope.newBio = '';
    //   };
    // };

    // $scope.deleteBio = function($index) {
    //   $scope.people.splice($index, 1);
    // };

    window.$scope = $scope;
  });
})();
