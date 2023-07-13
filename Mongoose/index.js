import mongoose from "mongoose";
import chalk from "chalk";
import fs from "fs";
import allPlayLists from "./data.js";
import delDocs from "./delete.js";
// creating connection and new database if it does not present in mongodb

mongoose
  .connect("mongodb://127.0.0.1:27017/Courses")
  .then(() => console.log(chalk.inverse.green("Connection successful")))
  .catch((err) => console.error(chalk.red(err)));

// scheema ------->
// it defines the structures of the document
// default values, validators, etc.

const schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  type: String,
  videos: Number,
  author: String,
  active: Boolean,
});

// model =====>
// Mongoose model provides an interface to the database for creating model querying, updating, deleting records, etc.
// easy -- we will creating the collection

const model = new mongoose.model("Playlist", schema);

// Creating documents and inserting it

// 1. syncronus --->
/*
const cssPlaylists = new model({
  name: "Css 3",
  type: "Front-End",
  videos: 10,
  author: "Js walla",
  active: true,
});

cssPlaylists.save();
*/
// this is save method will return a promise
// so we can use then
// but we will use async await for best practice
/*
const createDoc = async () => {
  const htmlPlayList = new model({
    name: "Html",
    type: "Front-end",
    videos: 15,
    author: "Js Wallah",
    active: false,
  });

  try {
    const res = await htmlPlayList.save();
    console.log(res);
  } catch (err) {
    console.error(chalk.inverse.red(err));
  }
};

createDoc();
*/

// for insering many documents---------->
/* =================================Code==========================================>
const createDoc = async ()=>{

  const bootstrapPlaylist = new model({
    name : "Bootstrap",
    type : "Front-end",
    videos : 10,
    author : "Js wallah",
    active : false
  }) 

  
  const reactPlaylist = new model({
    name : "React Js",
    type : "Front-end",
    videos : 10,
    author : "Js wallah",
    active : false
  }) 

  const sqlPlaylist = new model({
    name : "SQL",
    type : "Database",
    videos : 10,
    author : "Js wallah",
    active : false
  }) 

  const mongoPlaylist = new model({
    name : "Mongo Db",
    type : "Database",
    videos : 10,
    author : "Js wallah",
    active : false
  }) 

  const mongosePlay = new model({
    name : "Mongoose",
    type : "Database",
    videos : 10,
    author : "Js wallah",
    active : false
  })

 

  try{
    const res = await model.insertMany([bootstrapPlaylist,reactPlaylist,sqlPlaylist,mongoPlaylist,mongosePlay])
    console.log(chalk.green (res));
  } catch(err){
    console.error(chalk.inverse.red(err))
  }
}

createDoc();
======================================= code end ====================================
*/

// trying new way ==>
// todo  ============================== Code start =====================================>
/*
const allPlayLists = [
  {
    name: "Html",
    type: "Front-end",
    videos: 15,
    author: "Js Wallah",
    active: true,
  },
  {
    name: "CSS 3",
    type: "Front-end",
    videos: 15,
    author: "Js Wallah",
    active: true,
  },

  {
    name: "Bootstrap",
    type: "Front-end",
    videos: 15,
    author: "Js Wallah",
    active: false,
  },
  {
    name: "JavaScript",
    type: "Front-end",
    videos: 15,
    author: "Js Wallah",
    active: false,
  },
  {
    name: "Mongoose",
    type: "Database",
    videos: 10,
    author: "Js wallah",
    active: false,
  },
  {
    name: "Mongo Db",
    type: "Database",
    videos: 12,
    author: "Js wallah",
    active: false,
  },

  {
    name: "Sql",
    type: "Database",
    videos: 11,
    author: "Js wallah",
    active: false,
  },
];

const insetDocs = async (arr) => {
  try {
    const res = await model.insertMany([...arr]);
    console.log(chalk.green(res));
  } catch (err) {
    console.log(chalk.red.inverse(err));
  }
};

insetDocs(allPlayLists);
*/

// todo ============================ code end =======================================

// !-------------------> Read operation ------------->

// const readDoc =async()=>{

//  try{
   // const data = await model.find({type : "Front-end"},{name:1,_id:0}); print the data of fronent
   // print the course name which is having video count greater than 14
   // const data = await model.find({videos:{$gt : 14}},{name:1,_id:0,videos:1})
   // print the course name which is having video count greater than 11
   // const data = await model.find({videos:{$lt:11}},{name:1,_id:0,videos:1})
   // print the course name which is having video count greater than  equalto 11
   // const data = await model.find({videos:{$lte:11}},{name:1,_id:0,videos:1})
   // print the course name which having type backend and database
   // const data = await model.find({type :{$in:["Database","Back-end"]}})
   // print this type of cocurse name which does not backend and database
   // const data = await model.find({type:{$nin:["Back-end","Database"]}},{name:1,_id:0})
   // print that course name which author name is sakil or type is backend
   // const data = await model.find({$or:[{type:"Back-end"},{author:"Js wallah"}]},{name:1,_id:0});
   // print that course name which author namse is js wallh and type is backend
   // const data= await model.find({$and : [{type:"Back-end"},{author : "Js wallah"}]},{name : 1,_id:0})
   // now we need count of it
   // const data= await model.find({$or : [{type:"Back-end"},{author : "Js wallah"}]},{name : 1,_id:0}).countDocuments();
   // now we will sort it
   // const data= await model.find({$or : [{type:"Back-end"},{author : "Js wallah"}]},{name : 1,_id:0}).sort();
   // by default it will provide data just like i have created
   // Ascending order--->
   // const data= await model.find({$or : [{type:"Back-end"},{author : "Js wallah"}]},{name : 1,_id:0}).sort({"name":1});

//   console.log(chalk.inverse.yellow(data));
//  } catch(err){
//   console.log(chalk.red.inverse(err));
//  }

// }

// readDoc()

// todo ==============start code=========>

// upadate the documents=============>

// const updateDoc =async ()=>{
//   try{
//     const upres = await model.updateMany({author: "Js wallah"}, {$set:{author : "Js Wallah"}})
//     console.log(upres);
//   }catch (err){
//     console.log(err)
//   }

// }

// updateDoc();



// fs.writeFile("delete.js","delete the documents",(err)=>console.log(chalk.green("File created")))

// delDocs(model);
// 

