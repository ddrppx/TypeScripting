var Instagram = /** @class */ (function () {
    function Instagram(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    return Instagram;
}());
var Youtube = /** @class */ (function () {
    function Youtube(cameraMode, filter, burst, short // New
    ) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    Youtube.prototype.createStory = function () {
        console.log("Story created");
    };
    return Youtube;
}());
