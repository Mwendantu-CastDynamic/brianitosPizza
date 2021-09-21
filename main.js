/*

Brianitos Pizza Deli Application

Business Logic

We begin by defining and/ or initializing all the Objects,
Arrays and Variables that are required to enable our Pizza
Web Application to accomplish the major business objectives 
for which has been designated to it to achieve.

*/

// a. Define all the major Objects our Pizza Application is to 
//    consist of, and include all the variables / arrays the Objects
//    shall require to interact with to achieve its business objectives

// 1. We begin by defining and initializing our main Object the Pizza
//    using the special Constructor Object Declaration Function.

      function PizzaVariety(name, image, description){
            this.name = name;
            this.image= image;
            this.description = description;

// Within the PizzaVariety Object, we define an object nested in the
// Pizza Variety Object.            

            this.prices={
              "Small": 600,
              "Medium":900,
              "Large":1200

            }
      }

// This implies that the prices according to size will be fixed for all
// the various Pizza varieties.


// Lets now define the components interacting with the Pizza Object,
// that will enable the Pizza Object to generate its expected outcomes.

/*   i) PizzaVariety Names:  The types of Pizza's on offer

    ii) Sizes: An array of the multiple Pizza sizes available to select from.
          i.e Large, Medium and Small

    iii) Crust: The types of Crusts available and their prices:
           i.e. Stuffed, Crispy and Gluten Free

    iv)Toppings: The topping types available and their prices:
            i.e. Anchovies, Pepperoni, Chicken    

            

            
// We then use the Object 'Prototype' method to set the initial value 
// of the price component, the initial value of the crust to be selected 
// and the initial value of the toppings to be selected as follows:

*/

PizzaVariety.prototype.price= 0;
PizzaVariety.prototype.crust= null;
PizzaVariety.prototype.topping=[];

// We then define the Constructors to create the Crusts and Toppings Objects 
// whose properties we shall use to complete each Customers customized Pizza
// and determine the additional cost of customization

function Crust(name, price){

      this.name = name;
      this.price = price;
}

function Topping(name, price){

      this.name= name;
      this.price=price;

}
// According to our Business logic, given that our Brianitos Pizza customers 
// can purchase multiple Pizza Varieties each with their varying options,
// create a Cart object using a cart Constructor function to manage 
// each Customer's order according to the array of Pizza Variety items in the cart 
// and the optional cost of delivery where applicable. 

// We define our Cart using a Constructor Function as follows:


function Cart(){

    const cart = this;
    this.cartItems= [];
    this.delivery= null;
    this.addToCart= function(item){
      cart.cartItems.push(item);
     $("#cartItems").html(cartItems.length);

    }
}

// Introduce a new Zone Object to determine the cost of delivery according 
// to the respective zone within which each order delivery is to be made.



function Zone(zoneName, price){

      this.zoneName = zoneName;
      this.price = price;

}

let cart = new Cart();
let selectedPizza;
let cartItemHtml;

// We then initialize a newly declared Pizza list array 
// which we shall use to hold our newly instantiated Pizza varieties

const pizzaList = [

new PizzaVariety("Anchovy","anchovia1.jpg","Anchovy Deli Special"),

new PizzaVariety("Mushroom","musroompizza2.jpg","The Mushroom Medley"),

new PizzaVariety("TripleCheese","3cheesesGouda3.png","Triple Cheese Gouda"),

new PizzaVariety("PepperoniSausage", "peperroniSausage4.jpg","Pepperoni N Sausage"),

new PizzaVariety("Hawaiian","hawaiian5.jpg","Aloha Flavour"),

new PizzaVariety("Chicken","chickenalfredo6.jpg","ChickenAlfredo")

];

// We also create an array to hold all instances of the Crust Object
// defined to be applied in our Pizza Application.

const CrustsList = [

new Crust("Crispy", 100),
new Crust("Stuffed", 200),
new Crust("GlutenFree", 150)

];

const toppingsList= [

new Topping("Cheese", 100),
new Topping("Pepperoni", 150),
new Topping("Chicken",200 )

];

const zones = [

new Zone("ZoneA", 100),
new Zone("ZoneB", 200),
new Zone("ZoneC",300)


];

$(document).ready(function(){

/* Begin by formulating a function to Populate our Pizza List Array
  using the bootstrap jQuery Card component and a looping function 
  to loop through all the the Brianitos Pizza items on offer by embedding the
  cards html Div and referencing it using the DOM  */

  const pizzaListDiv = $('#pizzalisting');
  let pizzaItems = '';

  for (let i = 0; i < pizzaList.length; i++) {
      let pizzaItem = pizzaList[i];

      pizzaItems += `<div class="col-md-2 p-1">
      <div class="card" style="width: 18rem;">
      <div class="pizzaImage">
      <img src="./images/pizzaImages/${pizzaItem.image}" class="card-img-top" alt="...">
      </div>
      <div class="card-body">
        <h5 class="card-title">`+ pizzaItem.name + `</h5>
        <p class="card-text">`+ pizzaItem.description + `</p>

        <a href="#" data-index="`+ i + `" 
        class="btn btn-primary orderBtn"
        data-bs-toggle="offcanvas"
        data-bs-target="#pizzaCustomize"
        aria-controls="offcanvasBottom">Order</a>


      </div>
    </div>
      </div>`;
      pizzaItem = undefined;
  }

  pizzaListDiv.html(pizzaItems);
  pizzaListDiv.find('a.orderBtn').each(function () {
      $(this).on('click', function () {
          let pizzaIndex = $(this).data('index');
          selectedPizza = pizzaList[pizzaIndex];
          $('#pizzaCustomize img').attr('src', './images/pizzaImages/' + selectedPizza.image);
          
          $('select#size').val('');
          $('select#toppings').val('');
          $('select#crust').val('');
          $('#pizzaPrice').html('');
      });
  });
  /* Populating pizza list complete */


  

// Next we formulate a function to provide us with a drop down enabling us populate
// our Pizza Application with the size options available

    populateDropdowns($('select#size'), pizzaSizes);
    $('select#size').on('change', function(){
      const size =$(this).val();
      if(selectedPizza){
         selectedPizza.price = selectedPizza.prices[size];
      }
    updateUI()
});

 /* Populating Pizza size options complete */

/* Populate Toppings */
// Then we formulate a function to provide us with option selector enabling us to select one
// of the multiple Pizza Application's Toppings options available to a customer.
    for(let i=0; i<toppingsList.length; i++){
      let topping = toppingsList[i];
      $('#toppings').append(`<div class="form-check">
      <input class="form-check-input" type="checkbox" value="`+topping.name+`" id="flexCheckDefault`+i+`">
      <label class="form-check-label" for="flexCheckDefault`+i+`">
        `+topping.name+`
      </label>
    </div>`);
      
  }

  $('#toppings .form-check-input').on('change', function(){
      const isCheck = this.checked;
      
      const selectedToppingValue = $(this).val();
      let topping = toppingsList.find(function(topping){
          if(topping.name == selectedToppingValue) return true;
          else return false;
      });
      const indexOfSelectedTopping = selectedPizza.topping.findIndex(function(toppingItem){ 
          return toppingItem.name == topping.name;
       });

      if(indexOfSelectedTopping == -1 && isCheck) selectedPizza.topping.push(topping);
      else if(indexOfSelectedTopping > -1 && !isCheck){
          selectedPizza.topping.splice(indexOfSelectedTopping, 1);
      }
      updateUI()
  });
  /* end of Populate sizes */




//Then we formulate a function to provide us with a drop down enabling us populate
// our Pizza Application with the crust options available

 populateDropdowns($('select#crust'), crustList, 'name', 'name', 'price');
 $('select#crust').on('change', function(){
     const selectedCrustValue = $(this).val();
     let crust = crustList.find(function(crust){
         if(crust.name == selectedCrustValue) return true;
         else return false;
     });
     selectedPizza.crust = crust;
     updateUI();
 });

 /* Populating Pizza crust options complete */



});
