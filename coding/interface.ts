interface User {
    readonly userId: number,
    email: string,
    googleId?: string,
    // startTrial: () => string
    startTrial(): string
    getCoupon(couponName: string, value: number): number
}

// interface reopening
interface User{
    githubToken: string;
}

const pp: User = {
    userId: 20,
    email: "p@ff.com",
    startTrial: () => {
        return "Trial Started";
    },
    getCoupon: (couponName: "10DISC", off: 10) => {
        return off
    },
    githubToken: "h4gkghk2jg3132h"
}

interface Admin extends User {
    role: "Admin";
}

const hh: Admin = {
    userId: 42,
    role: "Admin",
    email: "h@hf.com",
    startTrial: () => {
        return "Trial Started";
    },
    getCoupon: (couponName: "20DISC", off: 20) => {
        return off
    },
    githubToken: "s89vd7asd980v7as"
}
