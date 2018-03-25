/**
 * A very simple example to give a taste of what is possible.
 * @class
 */
var RecipeBook = (function () {
    function RecipeBook() {
        this.recipeBookID = null;
        this.recipeBookName = null;
        this.recipeBook = null;
    }

    //Setters
    RecipeBook.prototype.setRecipeBookID = function (ID) {
        this.recipeBookID = ID;
    };
    RecipeBook.prototype.setRecipeBookName = function (name) {
        this.recipeBookName = name;
    };
    RecipeBook.prototype.addRecipeToBook = function (recipe) {
        /* add */ (this.recipeBook.push(recipe) > 0);
    };
    //getters
    RecipeBook.prototype.getRecipeBookID = function () {
        return this.recipeBookID;
    };
    RecipeBook.prototype.getRecipeBookName = function () {
        return this.recipeBookName;
    };
    RecipeBook.prototype.getRecipe = function (name) {
        var i = 0;
        var result;
        while ((i < this.recipeBook.length)) {
            if ((function (o1, o2) { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(/* get */ this.recipeBook[i], name)) {
                result = this.recipeBook[i];
            }
            i++;
        }
        ;
        return result;
    };
    return RecipeBook;
}());
RecipeBook["__class"] = "RecipeBook";
