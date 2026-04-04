import { data } from "react-router-dom";
import taskModel from "../model/taskModel.js";

export const createTask = async (req, res) => {
    try {
        const {title, description} = req.body;
        console.log(req.body);
        if(!title || title.trim() === ""|| !description){
            return res.status(400).json({
                status : false ,
                message : "title, description is required"
            })
        }
        const task = await taskModel.create({
            title,
            description
        })
        return res.status(201).json({
            status : true ,
            message : "task is created successfully",
            data : task
        })
    } catch (error) {
        console.log("error in creating task", error.message)
        return res.status(500).json({
            status : false,
            message : "internal server error"
        })
    }
}

export const getAllTask = async (req, res) => {
    try {
        const task = await taskModel.find().sort({createdAt : -1})
        if(!task){
            return res.status(400).json({
                status : false ,
                message : "can't find the tasks"
            })
        }
        return res.status(200).json({
            status : true,
            message : "getting all tasks successfully",
            data : task
        })
    } catch (error) {
        console.log("error in getting all task", error.message)
        return res.status(500).json({
            status : false,
            message : "internal server error"
        })
    }
}

export const updateTask = async (req, res) => {
    try {
        const {id} = req.params;
        const {title , description, completed} = req.body;

        const task = await taskModel.findById(id);
        if(!task){
            return res.status(404).json({
                status : false ,
                message : "not found the task"
            })
        } 
        if(!title && title.trim() === ""){
            return res.status(400).json({
                status : false ,
                message : "title can not be empty"
            })
        }

        if(task.completed && completed === true){
            return res.status(400).json({
                status : false ,
                message : "task is already completed"
            })
        }

        if(title !== undefined) task.title = title;
        if(description !== undefined) task.description = description;
        if(completed !== undefined ) task.completed = completed

        const updatedTask = await task.save();

        return res.status(200).json({
            status : true,
            message : "Task updated successfully",
            data : updateTask
        })
    } catch (error) {
        console.log("error in updating task", error.message)
        return res.status(500).json({
            status : false,
            message : "internal server error"
        })
    }
}


export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;

        const task = await taskModel.findById(id)
        if(!task.completed){
            return res.status(400).json({
                status : false ,
                message : "imcompleted task will not be deleted",
            })
        }

        await task.deleteOne();
        console.log("task", task)

        return res.status(200).json({
            status : true,
            message : "Task deleted successfully",
            data : deletedTask
        })
    } catch (error) {
        console.log("error in deleting task", error.message)
        return res.status(500).json({
            status : false,
            message : "internal server error"
        })
    }
}
