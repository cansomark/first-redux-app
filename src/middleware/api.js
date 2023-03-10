import axios from "axios";
import * as actions from "../module/api";
const api=({dispatch})=>next=>async action=>{
    if(action.type!==actions.API_CALL.type) 
        return      next(action);
        const {url,method,data,onStart,onSuccess,onError}=action.payload;

        if(onStart) dispatch({type:onStart})
        
    

        try{
            const responce= await axios.request({
                baseURL:"http://localhost:9001/api",
                url,
                method,
                data
            })
            dispatch({type:onSuccess,payload: responce.data});
            console.log("API call succeeded:", responce.data);
        }catch(error){
            dispatch({type:onError,payload: error});
            console.log("API call failed:", error);
        }

};

export default api;