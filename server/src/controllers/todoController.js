import TODO from '../models/todoModel.js';

export const createTodo = async (req, res) =>{
    
    try {

        const { title, description, priority } = req.body;

        // basic validation
        if(!title && description && priority) {
            return res.status(400).json({ success : false , messege : 'All feilds are required!!' , data : todo });
        }

        // create and save todo
        const todo = await TODO.create({
            title, 
            description,
            priority
        });

        // status
        return res.status(200).json({ success : true, messege : 'Todo created Successfully!!'});

    } catch (error) {
         console.error("Error creating todo:", error);
        res.status(500).json({success : false, message : 'Internal Server error'});
    }
}


export const getTodoList = async (req, res) =>{
    try {
        // 1) get data
        const todos = await TODO.find();

        // 3) send success response
        res.status(200).json({ sucess : true , data : todos});

    } catch (error) {
       console.error('Error in fetching data' , error.message);
       res.status(500).json({success : false, message : 'Internal Server Error'}); 
    }
}


export const updateTodo = async (req,res) =>{
    try {
        const { id } = req.params;

        const updateTodo = await TODO.findByIdAndUpdate(
            id,
            req.body,
            {
                new : true,
                runValidators : true
            })

            if(!updateTodo) {
                return res.status(404).json({
                    success : false,
                    message : 'Todo not found'    
                })
            }

            return res.status(200).json({message : 'Todo item updated Successfully!!', data : updateTodo});

    } catch (error) {
        console.error('Error updating the todo item!!' , error.message);
        return res.status(500).json({success : true , message : error.message});
    }
}


export const removeTodo = async ( req, res) => {
    try {
        const { id } = req.params; 

        const deletedTodo = await TODO.findByIdAndDelete(id);

        if(!deletedTodo) { 
            return res.status(404).json({
                status  : false,
                message : 'Todo not found'
            })
        }

        return res.status(200).json({
            status : true,
            message : "Todo item deleted successfully!!"
        })

    } catch (error) {
       console.error('Error in deleting the todo item' , error.message);
       return res.status(500).json({success : false, message : error.message }); 
    }
}


export const viewTodoItem =  async ( req, res ) =>{   
    try {
        const  { id } = req.params;

        const todoItem = await TODO.findById(id);

        if(!todoItem){
            return res.status(404).json({ success : false, message : 'Todo not found'});
        }

        return res.status(200).json({ success : true ,  data : todoItem })

    } catch (error) {
        console.error('Error viewing the todo item details!!' , error.message);
        return res.status(500).json({ success : false, message : error.message});
    }
}