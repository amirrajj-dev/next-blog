'use server'

import postsModel from "@/utils/models/post"
import { revalidatePath } from "next/cache"
import path from 'path'
import { writeFile } from "fs/promises" 

const { default: connectToDb } = require("@/utils/db/connectToDb")

export const createPostAction = async (formdata)=>{
    try {
        await connectToDb()
        const {title , body , image , author} = Object.fromEntries(formdata)
        
        
        if (!title || !body || !image){
            return {
                message : 'Please fill all required fields'
            }
        }
        const address = String(title).split('').join('-');
        const buffer = Buffer.from(await image.arrayBuffer())
        const fileName = Date.now() + image.name;
        await writeFile(path.join(process.cwd(),  'public/blogs/' + fileName), buffer)
        const post = await postsModel.create({
            title , body , image : fileName , address , author
        })
        revalidatePath('/admin-pannel/blogs')
        if (post){
            return {
                message : 'Post created successfully :)',
                status : 201
            }
        }
    } catch (error) {
        return {
            message : 'Error creating post',
            error
        }
        
    }
}

export const deletePostAction = async (postId)=>{
    try {
        await connectToDb()
        await postsModel.findByIdAndDelete(postId);
        revalidatePath('/admin-pannel/blogs')
        return {
            message : 'Post deleted successfully :)',
            status : 200
        }
    } catch (error) {
        return  {
            message : 'Error deleting post',
            error
        }
    }
}

export const getPostsAction = async ()=>{
    try {
        await connectToDb()
        const posts = await postsModel.find({}).lean().sort({_id : -1})
        return JSON.parse(JSON.stringify(posts))
        
    } catch (error) {
        return {
            message : 'Error fetching posts',
            error
        }
    }
}

export const getPostAction = async (postId)=>{
    try {
        await connectToDb()
        const post = await postsModel.findById(postId).lean()
        
        return JSON.parse(JSON.stringify(post))
    } catch (error) {
        return {
            message : 'Error fetching post',
            error
        }
    }
}

export const updatePostAction = async (blogId , blogData)=>{
    try {
        await connectToDb()
        const blog = await postsModel.findById(blogId)
        
        if(!blog) return {message : 'Blog not found' , success : false}
        blog.title = blogData.title
        blog.body = blogData.body
        await blog.save()
        
        return {message : 'Blog updated successfully' , success : true}
    } catch (error) {
        return {message : 'Error updating blog' , success : false}
    }
}