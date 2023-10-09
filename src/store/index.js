import {configureStore} from "@reduxjs/toolkit"
import  userDetail  from "./userDataSlice"

export const store=configureStore({
    reducer:{
        app:userDetail,
    },

})