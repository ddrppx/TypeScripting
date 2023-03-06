var User = /** @class */ (function () {
    // constructor(
    //     public email: string,
    //     public name: string,
    //     // private userId: string
    // ){}
    function User(email, name) {
        this._courseCount = 1;
        this.city = "Serra";
        this.email = email;
        this.name = name;
        // private userId: string
    }
    Object.defineProperty(User.prototype, "courseCount", {
        get: function () {
            return this._courseCount;
        },
        set: function (courseNum) {
            this._courseCount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
