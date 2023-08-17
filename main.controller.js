angular.module("app").controller("mainController",function($scope){
    $scope.show=true;
    $scope.hide=false;
    $scope.tobuy=[
        {name:"cookies",quantity:10},
        {name:"apples",quantity:7},
        {name:"baby corn",quantity:5},
        {name:"chocolates",quantity:4},
        {name:"dry fruits",quantity:5}
    ];
    $scope.alreadyBought=[];
    if($scope.alreadyBought==""){
        $scope.msg="Nothing bought yet";
    }
    $scope.bought=function(data){
        $scope.alreadyBought.push($scope.tobuy[data]);
        $scope.show=false;
        $scope.tobuy.splice(data,1);
        if($scope.tobuy==""){
            $scope.Allbought="Everything is bought";
        }
    }
})