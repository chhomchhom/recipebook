var User = (function () {
    function User() {
        this.email = null;
        this.recipeBook = null;
        this.userName = null;
    }
    User.prototype.setEmail = function (email) {
        this.email = email;
    };
    User.prototype.setUserName = function (name) {
        this.userName = name;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.getRecipeBook = function () {
        return this.recipeBook;
    };
    User.prototype.getUserName = function () {
        return this.userName;
    };
    return User;
}());
User["__class"] = "User";
