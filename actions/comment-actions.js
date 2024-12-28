'use server'

const { default: connectToDb } = require("@/utils/db/connectToDb")
const { getUser } = require("./user-actions")
const { getMe } = require("./auth-actions")
const { default: commentsModel } = require("@/utils/models/comment")

export const createCommentAction = async (comment)=>{
    try {
        await connectToDb()
        const user = await getMe()
        
        const {body , postId} = comment
        const commentData = {
            name : user.user.name,
            email : user.user.email,
            body,
            post : postId
        }
        const newComment = await commentsModel.create(commentData)
        return {
            message : 'comment created successfully',
            success : true,
            comment : JSON.parse(JSON.stringify(newComment))
        }
    } catch (error) {
        return {
            message : 'Error creating comment',
            error
        }
    }
}

export const getCommentsByPostId = async (postId)=>{
    try {
        await connectToDb()
        const comments = await commentsModel.find({post : postId})
        return JSON.parse(JSON.stringify(comments))
    } catch (error) {
        return {
            message : 'Error fetching comments',
            error
        }
    }
}