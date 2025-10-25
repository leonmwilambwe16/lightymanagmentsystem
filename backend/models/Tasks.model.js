import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
  userId:{type:String,required:true},
  name:{type:String,required:true},
  startDate:{type:Date,required:true},
  dueDate:{type:Date,required:true},
  priority:{
    type:String,
    enum:["high","medium","low"],
    default:"medium",
  },
  status:{type:String,
    enum:["pending","inprogress","completed"],
    default:"pending"
  }
},{timestamps:true});

export default mongoose.model("Task", taskSchema);