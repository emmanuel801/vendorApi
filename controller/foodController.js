import foodModel from '../models/foodModel.js'
import userModel from '../models/userModel.js'



//Read All Operations
export const getFood = async (req, res)=>{
       try {
    
        const foods = await foodModel.find()
        if(foods.length === 0){
            return res.status(404).json({message: 'no users found'})
        }
       return res.status(200).json({foods:foods,message:"Users fetched successfully"})     
    } catch (error) {
        return res.status(500).json({"error fetching users": error.message})   
    }
}

//Read Single Operation
export const getSingleFood = async (req,res)=>{
        try {
            const id= req.params.id
            const foods = await foodModel.findById(id)
            if (!foods) {
                return res.status(404).json({message: "users not found"})
                
            }
            return res.status(200).json({foods:foods,message:"Users fetched successfully"})
            
        } catch (error) {
            return res.status(500).json({"error fetching users": error.message})
            
        }
}

//CREATE OPERATION
export const createFood = async (req,res)=>{
    try {
        const{body} =req
        const foods = new foodModel(body)
        await foods.save()
        return res.status(201).json({message: "user created successfully", foods:foods})
    } catch (error){
        return res.status(500).json({error: error.message})
    }
}

//DELETE OPERATION 
export const deleteFood = async(req,res)=>{
       try {
        const id = req.params.id
        const users = await foodModel.findByIdAndDelete(id)
        if(!users){
            return res.status(404).json({message: "Cannot delete non-existent user"})
        }
        return res.status(200).json({message: "User sucessfully deleted"})
        
    } catch (error) {
        return res.status(500).json({error:error.message})
        
    }
}

//PUT OPERATION
export const putFood = async(req,res)=>{
    try {
        const id = req.params.id
        const updatedUser = req.body
        const users = await foodModel.findByIdAndUpdate(id, updatedUser, {new: true})
        if(!users){
            return res.status(404).json({message: "user not found "})
        }
        return res.status(200).json({message: "user updated successfully", users: users})
    } catch (error) {
        return res.status(500).json({error: error.message})
        
    }

} 