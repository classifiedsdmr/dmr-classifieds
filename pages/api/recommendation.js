import data from "./data";
//api/recommendation

export default function handler(req,res) {
    const{Cards} =data;

if(Cards) return res.staus(200).json(Cards)
return res.status(404).json({error: "Data Not Found" })
}