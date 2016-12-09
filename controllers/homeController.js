app.controller("homeCtrl", ['$scope', '$location', '$timeout', function($scope, $location, $timeout){

	$scope.regIt = function(valid){
		if(valid){
			$scope.goProceed();
		}
	}

	$scope.goProceed = function(){
		$location.path('aadhar');
	}

	$scope.aadharOtp = function(){
		$scope.otp = "123456";
		console.log($scope.otp);
		$scope.aadhar_otp =  true;
	}

	$scope.verifyOtp = function(){
		console.log($scope.otp_view, $scope.otp)
		if($scope.otp_view == $scope.otp){
			$scope.otp_verified = true;
			$('.aadhar_number').attr('disabled', 'disabled');
		}
	}

	$scope.success = function(){
		$('#aadharModal').hide();
	    $('.modal-backdrop').remove();
	    $('body').removeClass('modal-open');
	    $('body').css({'padding-right': '0px'});
		$('.flash-message').fadeIn();
		setTimeout(
		  function() 
		  {
		    $('.flash-message').fadeOut();
		  }, 5000);
	}
	
}]);