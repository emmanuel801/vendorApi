import userModel from '../models/userModel.js';
import bcrypt from "bcryptjs"


//Read All Operations
export const getUser = async (req, res)=>{
       try {
        const users = await userModel.find()
        if(users.length === 0){
            return res.status(404).json({ message: 'no users found'})
        }
       return res.status(200).json({ users: users, message: "Users fetched successfully"})     
    } catch (error) {
        return res.status(500).json({ error: error.message})   
    }
}

//Read Single Operation
export const getSingleUser =async (req,res)=>{
        try {
            const id= req.params.id
            const users = await userModel.findById(id)
            if (!users) {
                return res.status(404).json({message: "users not found"})
                
            }
            return res.status(200).json({users:users,message:"Users fetched successfully"})
            
        } catch (error) {
            return res.status(500).json({error: error.message})
            
        }
}


//CREATE OPERATION
export const createUser = async (req,res)=>{
    try {
        const {body} = req
        const users = new userModel(body)
        await users.save()
        return res.status(201).json({message: "user created successfully", users:users})
    } catch (error){
        return res.status(500).json({error: error.message})
    }
}

//PUT OPERATION
export const putUser = async (req,res)=>{
    try {
        const id = req.params.id
        const updatedUser = req.body
        const users = await userModel.findByIdAndUpdate(id, updatedUser, {new: true})
        if(!users){
            return res.status(404).json({message: "user not found "})
        }
        return res.status(200).json({message: "user updated successfully", users: users})
        
    } catch (error) {
        return res.status(500).json({error: error.message})
        
    }
}

//DELETE OPERATION
export const deleteUser =async(req,res)=>{
    try {
        const id = req.params.id
        const users = await userModel.findByIdAndDelete(id)
        if(!users){
            return res.status(404).json({message: "Cannot delete non-existent user"})
        }
        return res.status(200).json({message: "User sucessfully deleted"})

    } catch (error) {
        return res.status(500).json({"error fetching users": error.message})
    }
} 

//REGISTER USER
export const registerUser = async(req,res)=>{
    try {
        const {body} = req
        const   {username, phonenumber, email, password, gender, author} = body

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const user = new userModel({
            password: hashedPassword,
            ...body
        })
        await user.save()
        return res.status(201).json({message: "user created successfully",user})

        
    } catch (error) {
        return res.status(500).json({"error fetching users": error.message})

    }
}

