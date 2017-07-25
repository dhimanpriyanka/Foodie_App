	//--------------------variable for app--------------
	var foodieApp = angular.module('foodieApp',['ngRoute']) //------------superpower = module---------
//----------------------
	foodieApp.config(function ($routeProvider) {           //---- pass the function as a parameter-------
	$routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',   // first parameter is the url of route and yeh login page ka url btayega like as:- '/'---
		controller: 'loginController'     // second parameter is an object
	})
	.when('/home',{
		templateUrl: 'pages/main.html',  //-- yeh main page ka url show krega like as:- '/home'-----------
		controller: 'mainController'
	})
})
//--------------------login controller name----------------------
	foodieApp.controller('loginController',function($scope) {
})
	//-------------------- main controller name----------------

	foodieApp.controller('mainController',function($scope) {
      //$scope.restaurants = ['Farzi Cafe','Pizza Hut','Wenger\'s Deli','Sagar Ratna'];
	  $scope.restaurants = [{

		name: 'Barbeque Nation',
			address: 'SCO 39, Madhya Marg, Sector 26, Chandigarh',
			location: ' Chandigarh',
			category: 'Casual Dining, Bar',
			vote: '4.6',
			cuisines: 'Modern Indian',
			cost: '1300',
			hours: '12 Noon to 1 AM (Mon-Sun)',
			image: 'http://3.bp.blogspot.com/-6IGY5PzFPeY/VE6B5_v_e5I/AAAAAAAAYMI/gsoOGrDz-eg/s1600/2.jpg'
		},
		{ 		name: 'Nihari',
			address: 'Booth 52, Sector 8 B, Sector 8, Chandigarh',
			location: 'Chandigarh',
			category: 'Casual Dining, Bar',
			vote: '4.3',
			cuisines: 'Modern Indian',
			cost: '800',
			hours: '11 AM to 11 AM (Mon-Sun)',
			image: 'https://content4.jdmagicbox.com/comp/chandigarh/s8/0172px172.x172.170128070315.w8s8/catalogue/nihari-chandigarh-hw4if.jpg'
		},

		{   name: 'Urban Cafe - Hyatt Regency',
			address: 'Hyatt Regency, 178, Chandigarh Industrial Area, Chandigarh',
			location: 'Chandigarh',
			category: 'Casual Dining, Bar',
			vote: '4.3',
			cuisines: 'Modern Indian',
			cost: '1800',
			hours: '12 Noon to Midnight (Mon-Sun)',
			image: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/e8/e7/fe/multi-cuisine-restaurant.jpg'
		},
		{
			name: 'The Willow Cafe',
			address: 'SCO 1, Sector 10D, Sector 10, Chandigarh',
			location: 'Chandigarh',
			category: 'Casual Dining, Cafe',
			vote: '4.1',
			cuisines: 'Modern Indian',
			cost: '1300',
			hours: '12 Noon to 1 AM (Mon-Sun)',
			image: 'http://www.happytrips.com/photo/55683580/.jpg'
		},
		{
			name: 'All Day 99',
			address: 'SCO 676, Sector 70, Mohali',
			location: 'Mohali',
			category: 'Casual Dining, Bar',
			vote: '3.7',
			cuisines: 'Modern Indian',
			cost: '700',
			hours: '11 AM to 10:30 PM (Mon-Sun)',
			image: 'http://www.10deals.in/uploads/images/thumbnails/b6a1310c557c794bf7008b46f523911e.jpg'
		}
		]

	}
		)
