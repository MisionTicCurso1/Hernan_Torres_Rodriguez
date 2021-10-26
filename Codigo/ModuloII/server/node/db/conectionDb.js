const mongo = require(mongoose);
mongo.Promise = global.Promise;
module.exports = {
    conectar:async (app) =>{
        await mongo.connect('mongodb:localhost:',{
            userNewUrlParse: true,
        });
        app.listen(5000,()=>{
            console.log('Uwu');
        })
    },
};