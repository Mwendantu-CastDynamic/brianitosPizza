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

// We then use the Object 'Prototype' method to set the initial value 
// of the price component, the initial value of the crust to be selected 
// and the initial value of the toppings to be selected.

// Lets now define the components interacting with the Pizza Object,
// that will enable the Pizza Object to generate its expected outcomes.

/*   i) PizzaVariety Names:  The types of Pizza's on offer

    ii) Sizes: An array of the multiple Pizza sizes available to select from.
          i.e Large, Medium and Small

    iii) Crust: The types of Crusts available and their prices:
           i.e. Stuffed, Crispy and Gluten Free

    iv)Toppings: The topping types available and their prices:
            i.e. Anchovies, Pepperoni, Chicken       

*/

