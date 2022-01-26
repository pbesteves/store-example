import bcrypt from bcrypt;

// TODO: implement CRUD functionality
interface UserPayload {
    name: string;
    email: string;
    password: string;
}

interface IUsers {
    [id: string]: {
    name: string;
    email: string;
    passwordHash: string;
};
}

let users: IUsers = {};

export async function create({ name, email, password }: UserPayload) {
    if (!name || !email || !password) {
        throw new Error("Missing required field");
    }
    
    let id: string = ''
    bcrypt.hash(email, 10, (_: any, hash: string) => { id = hash });
    
    if (users[id]) {
        throw new Error("Sorry try again with a different email")
    }
    
    let passwordHash: string = '';
    bcrypt.hash(password, 10, (_: any, hash: string) => {passwordHash = hash});
    users[id] = { name, email, passwordHash }
    
    return read(id);
}

export async function read(id: string) {
    const { passwordHash, ...rest } = users[id];
    return rest
}

export async function authenticate({ email, password }: {email: string, password: string}) {
    if (!email || !password) {
        throw new Error("Invalid Credentials");
    }

    let id: string = '';
    bcrypt.hash(email, 10, (_: any, hash: string) => { id = hash });

    let enteredPasswordHash: string = ''
    bcrypt.hash(password, 10, (_: any, hash: string) => { enteredPasswordHash = hash })

    const user = users[id] || {};

    if (user.passwordHash !== enteredPasswordHash) {
        throw new Error("Invalid credentials.")
    }

    const { passwordHash, ...rest } = user;
    return rest

}

export async function reset() {
    users = {}
}