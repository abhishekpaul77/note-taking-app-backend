import bcrypt from 'bcrypt';

export const hashing={
    SALT:10,
    passwordHash(plainpwd){
        return bcrypt.hashSync(plainpwd, this.SALT);
    },
    comparePassword(plainpwd,dbPassword){
        return bcrypt.compareSync(plainpwd,dbPassword);
    }
}