var students = [{
	 name: 'Liz',
	 age: 25,
	 city: 'Boulder'
	},
	{
	 name: 'Meghan',
	 age: 27,
	 city: 'Denver'
	},
	{
	 name: 'Trent',
	 age: 32,
	 city: 'Boulder'
	},
	{
	 name: 'Chelsea',
	 age: 24,
	 city: 'Boulder'
	},
	{
	 name: 'Amir',
	 age: 18,
	 city: 'Denver'
}]

// 1. console.log() age
function age(arr) {
	for (var i = 0; i < arr.length; i++) {
		console.log(arr[i].age)
	}
}

// 2. console.log() name, city
function nameCity(arr) {
	for (var i = 0; i < arr.length; i++) {
		console.log(arr[i].name + ', ' + arr[i].city)
	};
}

// 3. name + ' is from '
function isFrom(arr) {
	for (var i = 0; i < arr.length; i++) {
		console.log(arr[i].name + ' is from ' + arr[i].city)
	}
}

// 4. older than 25
function olderThan25(arr) {
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].age > 25) {
			console.log(arr[i].name + ' is older than 25')
		}
		else {
			console.log(arr[i].name + ' is less than 25')
		}
	};
}

