function detectType(val) {
    // console.log(val.toLowerCase()) // Error
    if (typeof val == "string") {
        return val.toLowerCase();
    }
    else {
        return val + 3;
    }
}
function provideId(id) {
    if (!id) {
        return "Insert ID";
    }
    return id.toLowerCase();
}
