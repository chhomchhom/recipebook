/* Generated from Java with JSweet 2.0.0 - http://www.jsweet.org */
/**
 * A very simple example to give a taste of what is possible.
 * @class
 */
var Ingredient = (function () {
    function Ingredient() {
        this.ingredientName = null;
        this.quantity = null;
        this.unit = null;
    }
    Ingredient.prototype.setIngredientName = function (name) {
        this.ingredientName = name;
    };
    Ingredient.prototype.setQuantity = function (quantity) {
        this.quantity = quantity;
    };
    Ingredient.prototype.setUnit = function (unit) {
        this.unit = unit;
    };
    Ingredient.prototype.getIngredientName = function () {
        return this.ingredientName;
    };
    Ingredient.prototype.getQuantity = function () {
        return this.quantity;
    };
    Ingredient.prototype.getUnit = function () {
        return this.unit;
    };
    return Ingredient;
}());
Ingredient["__class"] = "Ingredient";
