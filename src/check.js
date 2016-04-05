function  getMessage(a, b) {
	if (typeof(a) =='boolean'){
		if(a){
			return 'Я попал в ' + b;
		};
		return 'Я никуда не попал';
	} else {
		if (typeof(a) =='number'){
			return 'Я прыгнул на ' + (a*100) + ' сантиметров';
		} else {
			if (Array.isArray(a) && Array.isArray(b)){
				var leigth = 0;
				a.forEach(function(item, index) {
					length += item * b[index];
				});
				return 'Я прошёл ' + length + ' метров';
			} else {
				if (Array.isArray(a)){
					var sum = 0;
					a.forEach(function(item){
						sum += item;
					});
					return 'Я прошёл ' + sum + ' шагов';
				};
			}
		}
	}
};