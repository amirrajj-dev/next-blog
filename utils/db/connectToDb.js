const mongoose = require('mongoose')

const connectToDb = async ()=>{
    try {
        if (mongoose.connections[0].readyState){
            console.log('already connected to db')
            return
        }
        await mongoose.connect(process.env.MONGO_DB_URL).then('connected to db Succcesfully 🍎')
    } catch (error) {
        console.log('sth gose wrong connecting to db => ' , error)
    }
}

export default connectToDb;