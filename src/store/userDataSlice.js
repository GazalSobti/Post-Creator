import {createSlice ,createAsyncThunk} from "@reduxjs/toolkit";

//create
export const createUser=createAsyncThunk("createUser",async(data,{rejectWithValue})=>{
    const response=await fetch("https://650741db3a38daf4803f51bb.mockapi.io/userData",{
    method : 'POST',
    headers : {
    "Content-Type":"application/json"},
    body:JSON.stringify(data)
});

    try{
        const result=await response.json();
        return result;
    }
    catch(error){
        return rejectWithValue(error);
    }
});

//read
export const showUser=createAsyncThunk("showUser",async(args,{rejectWithValue})=>{
    const response= await fetch("https://650741db3a38daf4803f51bb.mockapi.io/userData",{
    method : 'GET',
    headers : {
    "Content-Type":"application/json"},
    
});

    try{
        const result=await response.json();
        console.log(result);
        return result;
    }
    catch(error){
        return rejectWithValue(error);
    }
});

//update
export const updateUser=createAsyncThunk("updateUser",async(data,{rejectWithValue})=>{
    const response= await fetch(`https://650741db3a38daf4803f51bb.mockapi.io/userData/${data.id}`,{
    method : 'PUT',
    headers : {
    "Content-Type":"application/json"},
    body:JSON.stringify(data),
    
});

    try{
        const result=await response.json();
        console.log(result);
        return result;
    }
    catch(error){
        return rejectWithValue(error);
    }
});

//delete

export const deleteUser=createAsyncThunk("deleteUser",async(id,{rejectWithValue})=>{
    const response= await fetch(`https://650741db3a38daf4803f51bb.mockapi.io/userData/${id}`,{
    method : 'DELETE',
    headers : {
    "Content-Type":"application/json"},
    
});

    try{
        const result=await response.json();
        console.log(result);
        return result;
    }
    catch(error){
        return rejectWithValue(error);
    }
});


export const userDetail = createSlice({
    name:"userDetail",
    initialState:{
        users:[],
        loading:false,
        error:null,
    },
    extraReducers:{

        //create
        [createUser.pending]:(state)=>{
            state.loading=true;
        },
        [createUser.fulfilled]:(state,action)=>{
            state.loading=false;
            state.users.push(action.payload);
        },
        [createUser.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        },

        //read
        [showUser.pending]:(state)=>{
            state.loading=true;
        },
        [showUser.fulfilled]:(state,action)=>{
            state.loading=false;
            state.users=action.payload;
        },
        [showUser.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        },
        
        //update
        [updateUser.pending]:(state)=>{
            state.loading=true;
        },
        [updateUser.fulfilled]:(state,action)=>{
            state.loading=false;
            const { id } = action.payload;
            state.users = state.users.map((ele) =>ele.id === id ? action.payload : ele);
        },
        [updateUser.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        },

        //delete
        [deleteUser.pending]:(state)=>{
            state.loading=true;
        },
        [deleteUser.fulfilled]:(state,action)=>{
            state.loading=false;
            const { id } = action.payload;
            state.users=state.users.filter((ele)=>ele.id!==id);
        },
        [deleteUser.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        },
    }
})

export default userDetail.reducer;