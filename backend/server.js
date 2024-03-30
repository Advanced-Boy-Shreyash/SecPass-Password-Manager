const express = require('express')
const dotenv = require('dotenv')
const { MongoClient } = require('mongodb');
const bodyparser = require('body-parser')
const cors = require('cors')

dotenv.config()

const app = express()
const port = process.env.PORT
const url = process.env.MONGO_URI;
const client = new MongoClient(url);
const dbName = 'secpass';

app.use(bodyparser.json())
app.use(cors())

client.connect()

// Get all pass
app.get('/', async (req, res) => {
    const db = client.db(dbName)
    const collection = db.collection('passwords')
    const findResult = await collection.find({}).toArray()
    res.json(findResult)
})

// save a pass
app.post('/', async (req, res) => {
    const password = req.body
    const db = client.db(dbName)
    const collection = db.collection('passwords')
    const findResult = await collection.insertOne(password)
    res.send({ success: true, result: findResult })
})

// delete a pass
app.delete('/', async(req,res)=>{
    const password = req.body
    const db = client.db(dbName)
    const collection = db.collection('passwords')
    const findResult = await collection.deleteOne(password)
    res.send({ success: true, result: findResult })
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})