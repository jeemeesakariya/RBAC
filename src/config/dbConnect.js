const mongoose = require('mongoose');


const mongoConnect = async(url) => {
    try {
        const connect = await mongoose.connect(url)
        console.log(`database connected : ${connect.connection.host}, ${connect.connection.name}`);
    } catch (err) {
        console.log(err)
        process.exit(1);
    }
}

module.exports = { mongoConnect };