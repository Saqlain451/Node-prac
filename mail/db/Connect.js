import mongoose from 'mongoose';

const mongoConnect = async (url) => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connect database");
    } catch (e) {
        console.log(e)
    }
}

export default mongoConnect;