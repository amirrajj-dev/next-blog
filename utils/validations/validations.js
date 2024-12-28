import {sign , verify} from 'jsonwebtoken'
import {compare , hash} from 'bcrypt'

const verifyToken = async (token)=>{
    try {
        const decodedToken = verify(token , process.env.SECRET_KEY)
        return decodedToken;
    } catch (error) {
        console.log('error verifying token => ' , error);
        return false;
    }
}

const generateToken = async (data)=>{
    const token =  sign(data , process.env.SECRET_KEY , {
        expiresIn: '1h',
    })
    return token;
}

const generateRefreshToken = async (data)=>{
    const token =  sign(data , process.env.SECRET_KEY , {
        expiresIn: '7d',
    })
    return token;
}

const hashedPassword = async (password)=>{
    const hashedPassword = await hash(password , 10)
    return hashedPassword
}

const comparePassword = async (password , hashedPassword)=>{
    const isValidPassword = await compare(password , hashedPassword)
    return isValidPassword;
}

export {
    verifyToken ,
    generateToken ,
    generateRefreshToken,
    hashedPassword ,
    comparePassword
}