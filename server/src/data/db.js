import mongoose from 'mongoose'

const startDb = async (uri) => {
    await mongoose.connect(uri)
    return `Database connected at ${uri}`
}

const stopDb = async () => await mongoose.connection.close()
const dbStatus = async () => await mongoose.connection.db.stats();

export {
    startDb,
    stopDb,
    dbStatus
}