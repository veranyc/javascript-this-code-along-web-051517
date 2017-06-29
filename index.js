// const app = "I don't do much."
// var pbj = {
//   bread: "white",
//   ingredients: ["peanut butter", "jelly"],
//   cut: "triangles"
// }
//
// function Sandwich(bread, ingredients, cut) {
//   this.bread = bread
//   this.ingredients = ingredients
//   this.cut = cut
//   this.serve = function() {
//     console.log("here's your " + this.name + ", enjoy!")
//   }
// }
//
// var blt = new Sandwich("while", ["bacon", "lettuce", "tomato", "mayo"], "rectangle")
// var reuben = new Sandwich("rye", ["corned beef", "sauerkraut", "swiss", "russian dressing"], "diagonal")
//
// var pbj = {
//   bread: "white",
//   ingredients: ["peanut butter", "jelly"],
//   cut: "triangles",
//   name: "peanut butter and jelly",
//   serve: function() {
//     console.log("here's your " + this.name + ", enjoy!")
//   }
// }
//
// pbj.serve()
//
// blt.name = "BLT"
// blt.serve()
//
// function serve() {
//   console.log("here's your " + this.name + ", enjoy!")
// }
//
// serve()


// function Sandwich(bread, ingredients, name) {
//   this.bread = bread
//   this.ingredients = ingredients
//   this.name = name
//
// }
//
// function serve(customer) {
//   console.log("Hey " + customer + ", here's your " + this.name + ", enjoy!")
// }
//
// function deliverFood(customer, table) {
//   console.log("Delivering " + this.name + " to " + customer + " at table " + table)
// }
//
// var gc = new Sandwich("white", ["cheese"], "Grilled Cheese")
// var pbj = new Sandwich("wheat", ["peanut butter", "raspberry jam"], "Peanut Butter & Jelly")
// //
// // serve.call(gc, "Terry")
// // serve.call(pbj, "Jesse")
//
// deliverFood.call(gc, "Terry", "4")
// deliverFood.apply(pbj, ["Jesse", "15"])
//
// function serve() {
//   if(arguments.length > 0) {
//     var customers = Array.prototype.slice.call(arguments)
//     last = customers.pop();
//     console.log(this.name + " for " + customers.join(", ") + " and " + last + ". Enjoy!")
// } else {
//     console.log(this.name + ". Order up!")
// }
// }
//
// serve.call(gc)
// serve.apply(pbj, ["Terry", "Tom", "Tabitha"])
//

function Sandwich(bread, ingredients, name) {
  this.bread = bread
  this.ingredients = ingredients
  this.name = name
  this.describe = function() {
    console.log("Your " + this.name + " includes: " + this.ingredients.join(", ") + ". Yum!")
  }
}
var pbj = new Sandwich("wheat", ["chunky peanut butter", "blackberry preserves"], "PB&Jam")

pbj.describe()

var salad = {
  ingredients: ["croutons", "romaine hearts", "steak", "parmesan", "caesar dressing"],
  name: "Steak Caesar"
}


let describeSalad = pbj.describe.bind(salad)

describeSalad()
