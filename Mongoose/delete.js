// delete the documents

const delDocs = async (collection)=>{
    try{
        const del = await collection.deleteMany({type : "Back-end"})
        console.log(del);
    }
    catch(err){
        console.log(err);
    }
    
}

export default delDocs;