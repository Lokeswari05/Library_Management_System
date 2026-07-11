import mongoose from 'mongoose';

export const connectDB = async () => {
    // mongoose.connect("mongodb://lokeshwariramakrishnan05_db_user:Lokes123@ac-hojosvu-shard-00-00.4hm5x43.mongodb.net:27017,ac-hojosvu-shard-00-01.4hm5x43.mongodb.net:27017,ac-hojosvu-shard-00-02.4hm5x43.mongodb.net:27017/?ssl=true&replicaSet=atlas-13sd9w-shard-0&authSource=admin&appName=Cluster0")
    //     .then(() => {
    //         console.log("DB connected")
    //     })
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
    }
}