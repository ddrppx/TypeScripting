function isAccountAdmin(account) {
    // return account.isAdmin;
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
