import mongoose from "mongoose";

const connectDB = () => {
    mongoose.connect("mongodb+srv://santhoshkannar802_db_user:L5Id3eoXNqtfeOHN@cluster0.hwimjcp.mongodb.net/Library_Managnment")
    .then(() => {
        console.log("DB Connected...")
    })
}


export default connectDB;