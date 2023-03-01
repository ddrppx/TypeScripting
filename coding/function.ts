function addTwo(num: number): number{
    return num + 2;
}

function getUpper(str: string): string{
    return str.toUpperCase()
}

function signUpUser(name: string, email:string, isPaid: boolean = false): string{
    return `${name}, ${email}, Paid: ${isPaid}`;
}

function getValue(val: number): any{
    if(val > 5){
        return true;
    }
    return "200 OK";
}

const getHello = (s: string): string => {
    return "..."
}

const cars = ["VW", "BMW", "Volvo"];
cars.map(
    (car): string => {
        return `Car: ${car}`;
    }
)


console.log(addTwo(5));

console.log(getUpper("pedro"));

console.log(signUpUser("pedro", "pe@dro.com", false));
console.log(signUpUser("ph", "p@h.com"));
