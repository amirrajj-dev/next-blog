'use server'

import connectToDb from "@/utils/db/connectToDb"
import usersModel from "@/utils/models/user"

export const getUsersAction = async ()=>{
    try {
        await connectToDb()
        const users = await usersModel.find({}).lean().sort({_id : -1})
        return JSON.parse(JSON.stringify(users))
        
    } catch (error) {
        return {
            message : 'Error fetching users',
            error
        }
    }
}

export const deleteUser = async (userId)=>{
    try {
        await connectToDb()
        const user = await usersModel.findById(userId)
        if(!user){
            return {
                message : 'User not found',
                success : false
            }
        }
        await usersModel.findByIdAndDelete(userId)
        return {
            message : 'User deleted successfully',
            success : true
        }
    } catch (error) {
        return {
            message : 'Error deleting user',
            error
        }
    }
}

export const updateUser = async (userId, updatedUser)=>{
    try {
        await connectToDb()
        const user = await usersModel.findByIdAndUpdate(userId, updatedUser, {new : true})
        if(!user){
            return {
                message : 'User not found',
                success : false
            }
        }
        return {
            message : 'User updated successfully',
            success : true,
            user
        }
    } catch (error) {
        return {
            message : 'Error updating user',
            error
        }
    }
}

export const getUser = async (userId) =>{
    try {
        await connectToDb()
        const user = await usersModel.findById(userId)
        if (!user){
            return {
                message : 'User not found',
                success : false
            }
        }
        return {
            message : 'User fetched successfully',
            success : true,
            user : JSON.parse(JSON.stringify(user))
        }
    } catch (error) {
        return {
            message : 'Error fetching user',
            error
        }
    }
}