require.config({
    paths: {angular: 'https://ajax.googleapis.com/ajax/libs'
	+'/angularjs/1.3.0-beta.4/angular'},
    shim: {angular: {exports: 'angular'}}
})

require(['wow_such_app'])
