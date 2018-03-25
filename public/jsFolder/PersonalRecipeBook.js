var PersonalRecipeBook = (function () {
    function PersonalRecipeBook() {
        this.recipeBookName = null;
        this.__ifViewable = null;
    }
    PersonalRecipeBook.prototype.setRecipeBookName = function (name) {
        this.recipeBookName = name;
    };
    PersonalRecipeBook.prototype.setViewToTrue = function () {
        this.__ifViewable = true;
    };
    PersonalRecipeBook.prototype.setViewToFalse = function () {
        this.__ifViewable = false;
    };
    PersonalRecipeBook.prototype.getRecipeBookName = function () {
        return this.recipeBookName;
    };
    PersonalRecipeBook.prototype.ifViewable = function () {
        return this.__ifViewable;
    };
    return PersonalRecipeBook;
}());
PersonalRecipeBook["__class"] = "PersonalRecipeBook";
