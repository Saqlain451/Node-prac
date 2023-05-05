const query =async (doc)=>{
const data = await doc.find({$or : [{type : "Js Wallah"},{type : "Back-end"}]})
console.log(data)
}

export default query;