var app = angular.module('palladioApp', [
	'palladio',
	'palladio.controllers',
	'palladio.services',
	'palladio.directives',
	'palladio.filters',
	'ui.codemirror',
	'ui.router',

	'palladioDataUpload',
	'palladioDataDownload',

	// Palette
	'palladioPalette',
	
	// Filters
	'palladioTimelineFilter',
	'palladioFacetFilter',
	'palladioTimespanFilter',
	'palladioPartimeFilter',
	// Views
	'palladioListView',
	'palladioMapView',
	'palladioTableView',
	'palladioSelectionView',
	'palladioGraphView',
	'palladioDurationView']
	)
	.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state('/', {
				url: '/',
				templateUrl: 'partials/start.html',
			})
			.state('/upload', {
				url: '/upload',
				templateUrl: 'partials/upload.html',
				controller: 'UploadRefineCtrl'
			})
			.state('/link', {
				url: '/link',
				templateUrl: 'partials/link.html'
			})
			.state('/visualization', {
				url: '/visualization',
				templateUrl: 'partials/visualization.html',
				controller: 'VisualizationCtrl',
				resolve: {
					data: function (dataService) {
						return dataService.getData();
					}
				}
			});
	})
	.value('$strapConfig', {
		datepicker: {
			orientation : 'top'
		}
	});