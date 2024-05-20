const mongoose = require('mongoose');
    const connectMongoDB=async()=>{
        try { 
            const mongoUrl=process.env.MONGODB_URL 
        await mongoose.connect(mongoUrl);
            console.log("/*------------------ Conection -----------------*/");
        } catch (error) {
            console.log("/*------------------ Not Conection -----------------*/",error);        
        }
    }

    export default connectMongoDB;