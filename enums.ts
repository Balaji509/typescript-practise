// const ADMIN = 0;
// const READADMIN = 1;
// const TEST =2;

enum Role{
    ADMIN = 'admin',
    READADMIN = 100,
    TEST
}


const testObject = {
    name: 'test',
    age: 17,
    role: Role.ADMIN
}

if(testObject.role === Role.ADMIN) {
     
}