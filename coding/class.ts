class User {
    private _courseCount = 1;
    public email: string;
    public name: string;

    readonly city: string = "Serra";
    // constructor(
    //     public email: string,
    //     public name: string,
    //     // private userId: string
    // ){}
    
    constructor(email: string, name: string){
        this.email = email
        this.name = name
        // private userId: string
    }

    get courseCount(): number{
        return this._courseCount
    }

    set courseCount(courseNum: number){
        this._courseCount = courseNum
    }
}

