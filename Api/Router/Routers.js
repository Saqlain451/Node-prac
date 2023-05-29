import express from "express";
import { Student } from "../Models/Schema.js";
const router = new express.Router();

// insert documents ----->
const insertDocs = async (arr, response) => {
  try {
    const insertData = await Student.insertMany([...arr]);
    response.status(201).send(insertData);
    console.log(insertData);
  } catch (error) {
    response.status(401).send(error);
  }
};

router.post("/student", (req, res) => {
  insertDocs(req.body, res);
});

// Read Data using get methode ----->

router.get("/student", async (req, res) => {
  try {
    const readData = await Student.find({});
    console.log(readData);
    res.status(201).send(readData);
  } catch (error) {
    res.send(error)
  }
});

router.get("/student/:id",async (req, res)=>{
    try {
        const studentData = await Student.findById({_id: req.params.id});
        res.status(201).send(studentData);
    } catch (error) {
        res.status(502).send(error);
    }
})


// update Data using patch methode ----->

router.patch("/student/:id",async (req,res)=>{
    try {
        const updateData = await Student.findByIdAndUpdate({_id:req.params.id},req.body,{new : true})
        res.status(201).send(updateData)
        
    } catch (error) {
        res.status(501).send(error)
    }
})



// delete by using delete methode -------------->

router.delete("/student/:id", async(req, res)=>{
    try {
        const delDta = await Student.deleteOne({_id:req.params.id});
        console.log(delDta);
        res.send(delDta);
    } catch (error) {
      res.send(501).send(error)  
    }
})

export { router };