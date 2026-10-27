const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
let inspections = [
 {id:1,business:'Green Leaf Restaurant',location:'Andheri',inspector:'Rahul',score:92,notes:'Clean kitchen and proper storage'},
 {id:2,business:'Fresh Bites Cafe',location:'Bandra',inspector:'Priya',score:65,notes:'Food storage needs improvement'},
 {id:3,business:'City Food Corner',location:'Dadar',inspector:'Amit',score:78,notes:'Minor cleanliness issues'}
];
app.get('/api/inspections',(req,res)=>res.json(inspections));
app.get('/api/summary',(req,res)=>{const total=inspections.length,passed=inspections.filter(x=>x.score>=70).length,attention=total-passed,average=total?Math.round(inspections.reduce((s,x)=>s+x.score,0)/total):0;res.json({total,passed,attention,average});});
app.post('/api/inspections',(req,res)=>{const {business,location,inspector,score,notes}=req.body||{},n=Number(score);if(typeof business!=='string'||!business.trim()||typeof location!=='string'||!location.trim()||typeof inspector!=='string'||!inspector.trim()||score===''||score===undefined||!Number.isFinite(n)||n<0||n>100)return res.status(400).json({message:'Enter valid details and a score from 0 to 100.'});const item={id:Date.now(),business:business.trim(),location:location.trim(),inspector:inspector.trim(),score:n,notes:typeof notes==='string'?notes.trim():''};inspections.unshift(item);res.status(201).json(item);});
app.delete('/api/inspections/:id',(req,res)=>{const before=inspections.length;inspections=inspections.filter(x=>x.id!==Number(req.params.id));if(before===inspections.length)return res.status(404).json({message:'Inspection not found.'});res.json({message:'Inspection deleted.'});});
app.listen(PORT,()=>console.log(`Food Safety Inspection Viewer running at http://localhost:${PORT}`));
