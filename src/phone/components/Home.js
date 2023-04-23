// $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available


var _currentStep;


$scope.$watch('app.params.currentStep', function() {
  //console.log('event happened');
  var _currentStep = $scope.app.params.currentStep;
  $scope.Reset();
  
  
  if(_currentStep == 1){
    
    $scope.app.params.stepTitle = "Welcome Message";
    //ShowVideo
    $scope.showVideo(true);

  }
  else if(_currentStep ==2){
    $scope.app.params.stepTitle = "Safety";
    //Caution Strip
    $scope.showCautionStrip(true);

    
  }else if(_currentStep ==3){
    $scope.app.params.stepTitle = "Safety";
    //Standing Location
    $scope.showStandingLocation(true);
    
    
    
  }else if(_currentStep ==4){
    $scope.app.params.stepTitle = "Part Identification";  
    //ShowRobot Labels
    $scope.showRobotLabels(true);
    
    
    
  }else if(_currentStep ==5){
    $scope.app.params.stepTitle = "RealTime Data";
    //Show Gauges
    $scope.showGauges(true);
    
    
    
  }else if(_currentStep ==6){
    $scope.app.params.stepTitle = "Repair 3D Animation";
    
    
    
  }else{
    $scope.app.params.stepTitle = "out of range";
    $scope.Reset();
  }

});


$scope.Reset = function(){
  //this function turns everything off
  $scope.showCautionStrip(false);
  $scope.showStandingLocation(false);
  $scope.showRobotLabels(false);
  $scope.showVideo(false);
  $scope.showGauges(false);
}


$scope.showCautionStrip = function(bool) {
    $scope.app.view.Home.wdg["cautionStrip1"].visible = bool;
    $scope.app.view.Home.wdg["cautionStrip2"].visible = bool;
    $scope.app.view.Home.wdg["cautionStrip3"].visible = bool;
    $scope.app.view.Home.wdg["cautionStrip4"].visible = bool;

};


$scope.showStandingLocation = function(bool) {
  
    $scope.app.view.Home.wdg["StandHereSign"].visible = bool;
    $scope.app.view.Home.wdg["wayfinder-1"].enabled = bool;
}

$scope.showVideo = function(bool) {
    $scope.app.view.Home.wdg["3DVideo-1"].visible = bool;
};


$scope.showRobotLabels = function(bool) {
    $scope.app.view.Home.wdg["PartLabel1"].visible = bool;
    $scope.app.view.Home.wdg["partLine1"].visible = bool;
  $scope.app.view.Home.wdg["PartLabel2"].visible = bool;
    $scope.app.view.Home.wdg["partLine2"].visible = bool;
  $scope.app.view.Home.wdg["PartLabel3"].visible = bool;
    $scope.app.view.Home.wdg["partLine3"].visible = bool;
};


$scope.showGauges = function(bool) {
  $scope.app.view.Home.wdg["3DGauge-1"].visible = bool;
  $scope.app.view.Home.wdg["3DGauge-2"].visible = bool;
  $scope.app.view.Home.wdg["3DGauge-3"].visible = bool;
}



//Interval (to simulate data) 
$interval(function() { 

  $scope.view.wdg['3DGauge-1']['text'] = Math.floor(Math.random() * 2) + 55;
  $scope.view.wdg['3DGauge-2']['text'] = Math.floor(Math.random() * 2) + 60;
  $scope.view.wdg['3DGauge-3']['text'] = Math.floor(Math.random() * 2) + 70;

},1800); 




