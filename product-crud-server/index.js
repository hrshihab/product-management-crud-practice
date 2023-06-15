const express = require('express');
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const port = process.env.PORT || 5000;

const app = express();
app.use(cors())
app.use(express.json())



const uri = "mongodb+srv://dbuser3:VbZAmaJAyS9i4Vjc@cluster0.wwvmwag.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    
    const database = client.db('productDB');
    const testing = database.collection('testing');

    app.post('/add',async(req,res)=> {
      const data = req.body;
      const result = await testing.insertOne(data);
      console.log(result);
      res.send(result)
    })

    app.get('/products',async(req,res)=> {

      const query = {};
      const cursor =  testing.find(query);
       const result =await cursor.toArray();
       res.send(result)
    })

    app.get('/products/:id',async(req,res)=> {
      const id = req.params.id;
      //const data= req.body;
      const search = {_id: new ObjectId(id)}
      const result = await testing.findOne(search);
      console.log(result);
      res.send(result)

    })

    app.put('/products/:id',async(req,res)=> {
      const data = req.body;
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const options = {upsert:true};

      const updateDoc = {
        $set : {
          productName : data.productName,
          quantity : data.quantity,
          amount : data.amount
        }
      }
      const result = await testing.updateOne(query,updateDoc,options);
      console.log(result);
      res.send(result)

    })

    app.delete('/products/:id',async(req,res)=> {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result =  await testing.deleteOne(query);
      console.log(result);
      res.send(result);
    })


  } finally {
   
  }
}
run().catch(console.dir);


app.listen(port,()=> {
  console.log('port is running on ',port);
})