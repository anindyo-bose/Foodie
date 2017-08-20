// Runs when HTML file is loaded
// $(document).ready(function() {
//   $('#user-email').on('input',function() {
//       var email = $('#user-email').val()
//       var message = 'Welcome Back, ' + email;
//       $('.welcome-message').text(message);
//   });
// });

var foodieApp = angular.module('foodieApp',['ngRoute']);
foodieApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
})
foodieApp.controller('loginController',function($scope) {
})
foodieApp.controller('mainController',function($scope) {
  $scope.restaurants = [{
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},{
name: 'Rajinder Da Dhaba',
address: 'AB-14, Safdarjung Enclave Market, Safdarjung, New Delhi',
location: 'Safdarjung',
category: 'Quick Bites',
vote: '4.2',
cuisines: 'North Indian, Mughlai, Chinese, Rolls, Kebab',
cost: '800',
hours: '12 Noon to 1 AM (Mon-Sun)',
image: 'https://b.zmtcdn.com/data/res_imagery/1777_RESTAURANT_5a6ec7deac163f634e288bfb2ebf3380.jpg'
},{
name: 'Big Dragon',
address: 'B-41, Ground Floor, Main Market, Kalkaji, New Delhi',
location: 'Kalkaji',
category: 'Casual Dining',
vote: '3.5',
cuisines: 'Chinese, Thai',
cost: '800',
hours: '10 AM to 10 PM (Mon-Sun)',
image: 'https://b.zmtcdn.com/data/res_imagery/309737_RESTAURANT_cfe34e4b9b85facf1b53ae373ed0b927.jpg'
},{
name: 'Trend',
address: 'CG 2-3, Ground Floor, Ansal Plaza, Khel Gaon Marg, New Delhi',
location: 'Khel Gaon Marg',
category: 'Casual Dining',
vote: '4.4',
cuisines: 'European, North Indian, Salad',
cost: '2000',
hours: '12 Noon to 1 AM (Mon-Sun)',
image: 'https://b.zmtcdn.com/data/res_imagery/18511032_RESTAURANT_8866eba94cb02e910640d75661e01fd0.jpg'
},{
name: 'Hong Kong Express',
address: '127, Flyover Market, Defence Colony, New Delhi',
location: 'Defence Colony',
category: 'Takeaway, Delivery',
vote: '4.0',
cuisines: 'Chinese, Thai',
cost: '700',
hours: '11 AM to 11:30 PM',
image: 'https://b.zmtcdn.com/data/res_imagery/566_CHAIN_bedb587561a89ebf8e7d710ab20b887c.jpg'
},{
name: 'Cafe Yell',
address: '35, Ground Floor, Defence Colony Market, Defence Colony, New Delhi',
location: 'Defence Colony',
category: 'Café',
vote: '4.4',
cuisines: 'Cafe, Continental, Italian',
cost: '1000',
hours: '12 Noon to 1 AM (Mon-Sun)',
image: 'https://b.zmtcdn.com/data/res_imagery/18415346_RESTAURANT_5daa9e1c5f86214c44cfb4b4124a76c3.jpg'
},{
name: 'Wok Me ',
address: '38, Ground Floor, Zamrudpur, Greater Kailash (GK) 1, New Delhi',
location: 'Greater Kailash (GK) 1',
category: 'Casual Dining',
vote: '4.0',
cuisines: 'Chinese, Asian, Healthy Food',
cost: '550',
hours: '12 Noon to 1 AM (Mon-Sun)',
image: 'https://b.zmtcdn.com/data/res_imagery/18533596_CHAIN_4baa4678f248523fe576a07c49d5edb8.png'
},{
name: 'TukTuk',
address: 'Plaza II, South Extension 2, New Delhi',
location: 'South Extension 2',
category: 'Quick Bites',
vote: '4.3',
cuisines: 'Thai, Malaysian, Chinese',
cost: '1000',
hours: '12 Noon to 1 AM (Mon-Sun)',
image: 'https://b.zmtcdn.com/data/res_imagery/18451269_RESTAURANT_a4356b83a7e134d4e1defbb80a4110a2.png'
} ]

})
