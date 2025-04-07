import vendorModel from '../models/vendorModel.js'



//Read All Operations
export const getVendor = async (req, res)=>{
       try {
    
        const vendors = await vendorModel.find()
        if(vendors.length === 0){
            return res.status(404).json({message: 'no vendors found'})
        }
       return res.status(200).json({vendors:vendors,message:"Vendors fetched successfully"})     
    } catch (error) {
        return res.status(500).json({"error fetching vendors": error.message})   
    }
}

//Read Single Operation
export const getSingleVendor =async (req,res)=>{
        try {
            const id= req.params.id
            const vendors = await vendorModel.findById(id)
            if (!vendors) {
                return res.status(404).json({message: "vendors not found"})
                
            }
            return res.status(200).json({vendors:vendors,vendorsmessage:"Vendors fetched successfully"})
            
        } catch (error) {
            return res.status(500).json({"error fetching users": error.message})
            
        }
}

//CREATE OPERATION
export const createVendor = async (req,res)=>{
    try {
        const{body} =req
        // console.log(req.body);
        const vendors = new vendorModel(body)
        await vendors.save()
        return res.status(201).json({message: "user created successfully", vendors:vendors})
    } catch (error){
        return res.status(500).json({error: error.message})
    }
}

//PUT OPERATION
export const putVendor = async (req,res)=>{
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