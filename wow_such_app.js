define(['angular'], function(angular){
    var wow_such_app = angular.module('wow_such_app', [])
    wow_such_app.filter('reverse', function(){
	return function(str){ return str.split(' ').reverse().join(' ') }
    })
})
