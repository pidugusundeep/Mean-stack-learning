var app = angular.module('Kwitter',[]);

app.controller('mainController',function($scope){
    $scope.posts = [];
    $scope.newPosts = {
        createdBy:"",
        kweet:"",
        createdAt:""
    };
    $scope.post = function(){
        $scope.newPosts.createdAt = Date.now();
        $scope.posts.push($scope.newPosts)
        $scope.newPosts = {
            createdBy:"",
            kweet:"",
            createdAt:""
        };
        debugger
    }
});