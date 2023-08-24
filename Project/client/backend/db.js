const mongoose = require('mongoose');
const mongoURI="mongodb+srv://fdapp:Tushar123@cluster0.dumjkvo.mongodb.net/gofoodmern?retryWrites=true&w=majority";
const mongoDB=async()=>{
   await mongoose.connect(mongoURI,{ useNewUrlParser : true}, async (err,result)=>{
        if(err) console.log("---",err)
        else{
            console.log("connected");
            //connecting the collection
            const fetched_data= await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray( async function(err,data){
                const foodCategory=await mongoose.connection.db.collection("food_category");
                foodCategory.find({}).toArray(async function(err,catData){
                    if(err)
               { console.log(err);}
              else 
              {
                global.food_items=data;
                global.foodCategory=catData;
                
             }
                })
            //    if(err)
            //    { console.log(err);}
            //    else 
            //    {
            //     global.food_items=data;
                
            //    }
            })
        }  
    });
}
module.exports=mongoDB;
