const { MongoClient } = require('mongodb')

const url = "mongodb+srv://princemishra:0PDMMsDdqlPlWM3J@namastenodejs.9y5srxi.mongodb.net/"

const client = new MongoClient(url)

const dbName = "HelloWorld"

async function main() {
    await client.connect();
    console.log("Connected sucessfully to server");
    const db = client.db(dbName);
    const collection = db.collection('User');

    // Insert
    // const data = {
    //     firstname: "Rahul",
    //     lastname: "chapri",
    //     city: "Mumbai",
    //     phoneNumber: "9843803408"
    // }
    // const insertResult = await collection.insertMany([data]);
    // console.log('Insert docs =>', insertResult);

    // ! Update - Filter
    const filter = { firstname: "Rahul" }

    const updateDoc = {
        $set: {
            lastname: "Kumar"
        }
    }

    const result= await collection.updateOne(filter,updateDoc)

    // Read
    const findResult = await collection.find({}).toArray()
    console.log('found Docs =>', findResult);


    return 'done'
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());