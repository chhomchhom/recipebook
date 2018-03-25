var PersonalRecipeBook = (function () {
    function PersonalRecipeBook() {
        this.category = null;
    }
    PersonalRecipeBook.prototype.setCategory = function (name) {
        this.category = name;
    };
    PersonalRecipeBook.prototype.getCategory = function () {
        return this.category;
    };
    return PersonalRecipeBook;
}());
PersonalRecipeBook["__class"] = "PersonalRecipeBook";
