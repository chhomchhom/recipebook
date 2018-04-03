/**
 * A very simple example to give a taste of what is possible.
 * @class
 */
var Recipe = (function () {
    function Recipe() {
        this.recipeID = null;
        this.recipeName = null;
        this.recipeDescription = null;
        this.rating = null;
        this.prepTime = null;
        this.cookTime = null;
        this.difficulty = null;
        this.favourite = null;
        this.ingredients = null;
        this.recipeSteps = null;
    }

    //setters
    Recipe.prototype.setRecipeName = function (name) {
        this.recipeName = name;
    };
    Recipe.prototype.setRecipeDescription = function (description) {
        this.recipeName = description;
    };
    Recipe.prototype.setRating = function (rating) {
        this.rating = rating;
    };
    Recipe.prototype.setPrepTime = function (time) {
        this.prepTime = time;
    };
    Recipe.prototype.setCookTime = function (time) {
        this.cookTime = time;
    };
    Recipe.prototype.setDifficulty = function (diff) {
        this.difficulty = diff;
    };
    Recipe.prototype.setFavouriteTrue = function () {
        this.favourite = true;
    };
    Recipe.prototype.setFavouriteFalse = function () {
        this.favourite = false;
    };
    Recipe.prototype.setIngredients = function (ingredients) {
        /* add */ (this.ingredients.push(ingredients) > 0);
    };
    Recipe.prototype.setRecipeSteps = function (steps) {
        /* add */ (this.recipeSteps.push(steps) > 0);
    };

    //getters
    Recipe.prototype.getRecipeID = function () {
        return this.recipeID;
    };
    Recipe.prototype.getRecipeName = function () {
        return this.recipeName;
    };
    Recipe.prototype.getRecipeDiscription = function () {
        return this.recipeDescription;
    };
    Recipe.prototype.getRating = function () {
        return this.rating;
    };
    Recipe.prototype.getPrepTime = function () {
        return this.prepTime;
    };
    Recipe.prototype.getCookTime = function () {
        return this.cookTime;
    };
    Recipe.prototype.getIngredients = function () {
        return this.ingredients;
    };
    Recipe.prototype.getRecipeSteps = function () {
        return this.recipeSteps;
    };
    return Recipe;
}());
Recipe["__class"] = "Recipe";
