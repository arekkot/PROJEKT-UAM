app.service('cart', function(){
	
	this.cart = [];
	this.total = 0;
	this.extraIngredients = [];

	this.addExtraIng = function(ing){
		this.extraIngredients.push({
			id: ing.id,
			label: ing.label,
			price: ing.price
		});
	};

	this.addToCart = function(pizza){
		this.cart.push({
			id: pizza.id,
			name: pizza.name,
			price: pizza.price,
			ingredients: pizza.ingredients.concat(extraIngredients),
			extraIngredients: extraIngredients,
			quantity: pizza.quantity,
			totalPrice: pizza.price*pizza.qauntity
		});
	};
    
    this.expressOrder = function (pizzaOrder){
        this.cart.push({
			id: pizzaOrder.id,
			name: pizzaOrder.name,
			price: pizzaOrder.price,
			ingredients: pizza.ingredients,
			quantity: pizzaOrder.quantity,
			totalPrice: pizzaOrder.price*pizzaOrder.qauntity
		});
    };
    
    this.orderReturn = function(){
        return this.cart;
    };
    
  
    
 
});