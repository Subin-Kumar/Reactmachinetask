import axios from 'axios'
// import { publicRequest } from '../Requestt/rqst';


export const Ftab=async()=>{
    try{
        const All = await axios.get('http://localhost:3001/api/table')
        console.log("Alltab",All.data);
        return All.data
    }catch(err){
        console.log('error--', err);
    }
}
export const FPie=async()=>{
    try{
        const All = await axios.get('http://localhost:3001/api/pie-chart')
        console.log("Alltab",All.data);
        return All.data
    }catch(err){
        console.log('error--', err);
    }
}
export const FLine=async()=>{
    try{
        const All = await axios.get('http://localhost:3001/api/graph')
        console.log("Alltab",All.data);
        return All.data
    }catch(err){
        console.log('error--', err);
    }
}