interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAccountAdmin(account: User | Admin){
    // return account.isAdmin;
    if("isAdmin" in account) {
        return account.isAdmin
    }
}
