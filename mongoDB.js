const mongo=require('mongodb').MongoClient;
const url='mongodb://localhost:27017';
const client=new mongo(url);

async function dbConnect(){
    let result= await client.connect();
    let db= result.db('company');
    return db.collection('users');
}

module.exports=dbConnect;