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
	.when('/restaurant/:id', {         //----":id" yh hai variables ka route ---
		templateUrl: 'pages/restaurant.html', //--yeh restaurant ka url show krega like as:-'/restaurant/'------------
		controller: 'restaurantController'
	})
})

//---------------- restaurant.html page ka controller(hod)------------------
foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
    $scope.ingredients = [];        //-----------ingredients ka array bnaya-------
	$scope.restaurantId = $routeParams.id; //---------variable ki value catch krta hai-------------
	//console.log($routeParams.id)
	var restaurants = [{
//-----------restaurants no.1 ki details------------------------------
	name: 'Barbeque Nation',
		address: 'SCO 39, Madhya Marg, Sector 26, Chandigarh',
		location: ' Chandigarh',
		category: 'Casual Dining, Bar',
		vote: '4.6',
		cuisines: 'Modern Indian',
		cost: '1300',
		id: '1' ,
		hours: '12 Noon to 1 AM (Mon-Sun)',
		bestDish: {
			name: 'Corn Pizza',
			image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
		},
		image: 'http://3.bp.blogspot.com/-6IGY5PzFPeY/VE6B5_v_e5I/AAAAAAAAYMI/gsoOGrDz-eg/s1600/2.jpg'
	},
	//-----------restaurants no.2 ki details---------------------------------
	{ 		name: 'Nihari',
		address: 'Booth 52, Sector 8 B, Sector 8, Chandigarh',
		location: 'Chandigarh',
		category: 'Casual Dining, Bar',
		vote: '4.3',
		cuisines: 'Modern Indian',
		cost: '800',
		id: '2' ,
		hours: '11 AM to 11 AM (Mon-Sun)',
		bestDish: {
			name: 'Jeera Rice',
			image: 'https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/16789494_1826634757561374_2917389899113955328_n.jpg'
		},
		image: 'https://content4.jdmagicbox.com/comp/chandigarh/s8/0172px172.x172.170128070315.w8s8/catalogue/nihari-chandigarh-hw4if.jpg'
	},
//-----------restaurants no.3 ki details---------------------------------
	{   name: 'Urban Cafe - Hyatt Regency',
		address: 'Hyatt Regency, 178, Chandigarh Industrial Area, Chandigarh',
		location: 'Chandigarh',
		category: 'Casual Dining, Bar',
		vote: '4.3',
		cuisines: 'Modern Indian',
		cost: '1800',
		id: '3' ,
		hours: '12 Noon to Midnight (Mon-Sun)',
		bestDish: {
			name: 'Strawberry-dream-Cake',
			image: 'http://img1.southernliving.timeinc.net/sites/default/files/styles/story_card_two_thirds/public/image/2016/04/main/strawberry-dream-cake-2428901_0.jpg?itok=61L4VQE_'
		},
		image: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/e8/e7/fe/multi-cuisine-restaurant.jpg'
	},
	//-----------restaurants no.4 ki details---------------------------------
	{
		name: 'The Willow Cafe',
		address: 'SCO 1, Sector 10D, Sector 10, Chandigarh',
		location: 'Chandigarh',
		category: 'Casual Dining, Cafe',
		vote: '4.1',
		cuisines: 'Modern Indian',
		cost: '1300',
		id: '4' ,
		hours: '12 Noon to 1 AM (Mon-Sun)',
		bestDish: {
			name: 'Corn Zone',
			image: 'http://www.louisvillehotbytes.com/wp-content/uploads/2011/12/Conefood.jpg'
		},
		image: 'http://www.happytrips.com/photo/55683580/.jpg'
	},
	//-----------restaurants no.5  ki details---------------------------------
	{
		name: 'All Day 99',
		address: 'SCO 676, Sector 70, Mohali',
		location: 'Mohali',
		category: 'Casual Dining, Bar',
		vote: '3.7',
		cuisines: 'Modern Indian',
		cost: '700',
		id: '5' ,
		hours: '11 AM to 10:30 PM (Mon-Sun)',
		bestDish: {
			name: 'ice-cream cone',
			image: 'https://cdn.theculturetrip.com/wp-content/uploads/2015/06/ice-cream2-pixabay.jpg'
		},
		image: 'http://www.10deals.in/uploads/images/thumbnails/b6a1310c557c794bf7008b46f523911e.jpg'
	}
	]
	$scope.restaurant = restaurants[$routeParams.id - 1];
	console.log($scope.restaurant.name);

	$scope.getIngredients = function(url) {
// Do something
// Write AJAX call here
					var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
						$http({
								'method': 'POST',
								'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
								'headers': {
								'Authorization': 'Key fafe2053a1cf48568234f1a76890614d',
								'Content-Type': 'application/json'
								 },
				                 'data': data,


							}).then(function success(response) {
								var ingredients = response.data.outputs[0].data.concepts;
											for (var i =0;i < ingredients.length;i++) {
											$scope.ingredients.push(ingredients[i].name);
											}

									}, function error(xhr) {
									    console.log(xhr);
									});

								}
		//----------to do list start-------------------------
								$scope.ingredients = [];              //array
		$scope.probabilityvalue=[];

		$scope.toDoList = function(){           //to do list for getting ingredients


			 var todoarray = angular.copy($scope.ingredients);

				$scope.todoList = [];
				for(var i = 0 ; i<todoarray.length; i++){
				  $scope.todoList.push({todoText:todoarray[i], done:false});
				}

			   $scope.remove = function() {                     // for removing the ingredients which are not required
			       var oldList = $scope.todoList;
			       $scope.todoList = [];
			       angular.forEach(oldList, function(x) {
			           if (!x.done) $scope.todoList.push(x);
			       });
			   };

			   $scope.done = function() {

			   		console.log("hahahah");
			   	//	donee=!donee;
			   		//$.text-decoration: overline;

			   }



		}


})

//-------------------- login page ka controller(hod)----------------------
	foodieApp.controller('loginController',function($scope,$location) {
		$scope.goToHome = function() {     //-----define kiya gotoHome function ko yha---
		//console.log('Do Something')        //----jb hum information fill krke login krenge to console pe 'do Something' ans ayega-----
    $location.url('home')               //---- change the url of the browser to the 'home' route------
	}
})
	//--------------------main page ka controller(hod)----------------

	foodieApp.controller('mainController',function($scope) {
      //$scope.restaurants = ['Farzi Cafe','Pizza Hut','Wenger\'s Deli','Sagar Ratna'];
	  $scope.restaurants = [{
//-----------restaurants no.1 ki details------------------------------
		name: 'Barbeque Nation',
			address: 'SCO 39, Madhya Marg, Sector 26, Chandigarh',
			location: ' Chandigarh',
			category: 'Casual Dining, Bar',
			vote: '4.6',
			cuisines: 'Modern Indian',
			cost: '1300',
		  id: '1' ,
			hours: '12 Noon to 1 AM (Mon-Sun)',

			image: 'http://3.bp.blogspot.com/-6IGY5PzFPeY/VE6B5_v_e5I/AAAAAAAAYMI/gsoOGrDz-eg/s1600/2.jpg'
		},
		//-----------restaurants no.2 ki details---------------------------------
		{ 		name: 'Nihari',
			address: 'Booth 52, Sector 8 B, Sector 8, Chandigarh',
			location: 'Chandigarh',
			category: 'Casual Dining, Bar',
			vote: '4.3',
			cuisines: 'Modern Indian',
			cost: '800',
			id: '2' ,
			hours: '11 AM to 11 AM (Mon-Sun)',
			image: 'https://content4.jdmagicbox.com/comp/chandigarh/s8/0172px172.x172.170128070315.w8s8/catalogue/nihari-chandigarh-hw4if.jpg'
		},
//-----------restaurants no.3 ki details---------------------------------
		{   name: 'Urban Cafe - Hyatt Regency',
			address: 'Hyatt Regency, 178, Chandigarh Industrial Area, Chandigarh',
			location: 'Chandigarh',
			category: 'Casual Dining, Bar',
			vote: '4.3',
			cuisines: 'Modern Indian',
			cost: '1800',
			id: '3' ,
			hours: '12 Noon to Midnight (Mon-Sun)',
			image: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/e8/e7/fe/multi-cuisine-restaurant.jpg'
		},
		//-----------restaurants no.4 ki details---------------------------------
		{
			name: 'The Willow Cafe',
			address: 'SCO 1, Sector 10D, Sector 10, Chandigarh',
			location: 'Chandigarh',
			category: 'Casual Dining, Cafe',
			vote: '4.1',
			cuisines: 'Modern Indian',
			cost: '1300',
			id: '4' ,
			hours: '12 Noon to 1 AM (Mon-Sun)',
			image: 'http://www.happytrips.com/photo/55683580/.jpg'
		},
		//-----------restaurants no.5  ki details---------------------------------
		{
			name: 'All Day 99',
			address: 'SCO 676, Sector 70, Mohali',
			location: 'Mohali',
			category: 'Casual Dining, Bar',
			vote: '3.7',
			cuisines: 'Modern Indian',
			cost: '700',
			id: '5' ,
			hours: '11 AM to 10:30 PM (Mon-Sun)',
			image: 'http://www.10deals.in/uploads/images/thumbnails/b6a1310c557c794bf7008b46f523911e.jpg'
		}
		]

	}
		)
