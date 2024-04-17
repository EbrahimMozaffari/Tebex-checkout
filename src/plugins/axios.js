//import Vue from "vue";
import axios from "axios";

import router from "@/router";

import pinia from "@/store/index.js";
import {useAppStore} from "@/store/app";
//import {storeToRefs} from 'pinia'


const axiosInstance = axios.create({
  //baseURL: `http://127.0.0.1:3001/api/`,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers["Access-Control-Allow-Origin"] = `*`;
  // config.headers["Authorization"] = `Bearer ${mainOidc.accessToken}`;
  // config.headers["Authorization"] = `Bearer ${authService().getToken()}`;
  //config.headers["Authorization"] = `Bearer ${mainAuth.accessToken}`;

  const appStore = useAppStore(pinia)
//const {rail, drawer} = storeToRefs(appStore)
  const {setLayout} = appStore;
  setLayout(true)
  //store.commit("app/SET_OVERLAY", true);
  // if(config.method == 'get'){
  //   let userInfo = store.getters["userInfo/getUserInfo"];
  //   if(userInfo){
  //     if(userInfo.level != 0){
  //     config.params = { scope: userInfo.scope}
  //     }
  //
  //   }
  // }
  return config;
});

axiosInstance.interceptors.response.use(

  (response) => {
    //store.dispatch("app/setOverlay", false);
    const appStore = useAppStore(pinia)
    const {setLayout,setSnackbar} = appStore;
    setLayout(false)
    // if (
    //   response.status === 200 && response?.data?.data?.items?.length==0
    // ) {
    //   let text = "موردی یافت نشد";
    //   setSnackbar({ snackbar: true, message: text ,color:'blue'})
    //  // store.commit("app/SET_SNACKBAR", { snackbar: true, message: text ,color:'blue'});
    //   // Vue.$toast.success(text);
    // }

    if (
      response.status === 201 ||
      response.status === 202 ||
      response.status === 204
    ) {
      let text = "successfully done!";
      setSnackbar({ snackbar: true, message: text,color:'green' })
      //store.commit("app/SET_SNACKBAR", { snackbar: true, message: text });
      // Vue.$toast.success(text);
    }
    // setTimeout(() => {
    //   store.commit("SET_OVERLAY", false);
    // }, 3000);

    //store.commit("app/SET_OVERLAY", false);

    return response;
  },
  (error) => {
    const appStore = useAppStore(pinia)
    const {setLayout,setSnackbar} = appStore;
    //console.log(error, "axios error");
    setTimeout(() => {


      //store.commit("app/SET_OVERLAY", false);
      setLayout(false)
    }, 1500);
    //store.dispatch("app/setOverlay",false);

    if (error.response.status) {
      if (error.response.status === 404) {
        let text = error.response.data.msg;
        // console.log('error',text);

        setSnackbar({ snackbar: true, message: text , color:'red'})


        //router.push({ name: "Page404" });
      } else if (error.response.status === 403) {
        // store.commit("app/SET_SNACKBAR", {
        //   snackbar: true,
        //   message: "Access denied",
        //   color:'red'
        // });

        router.push({ name: "Page403" });
      } else if (error.response.status === 401) {
        setSnackbar({
            snackbar: true,
            message: "Access denied",
            color:'red'
          })

        // store.commit("app/SET_SNACKBAR", {
        //   snackbar: true,
        //   message: "Access denied",
        //   color:'red'
        // });
        router.push({ name: "Page403" });
      } else if (error.response.status >= 400 && error.response.status <= 500) {
        //console.log("error.response",error.response)
        // let text =`کد خطا ${error.response.data.error.code}-${error.response.data.error.description}` ;
         if (error.response.data.message){
          setSnackbar({ snackbar: true, message:error.response.data.message  ,color:'red'})
          //store.commit("app/SET_SNACKBAR", { snackbar: true, message: text ,color:'red'});
        }

        else{
          setSnackbar({
              snackbar: true,
              message: "something went wrong!!" ,
              color:'red'
            })
          // store.commit("app/SET_SNACKBAR", {
          //   snackbar: true,
          //   message: " خطایی رخ داده است" ,
          //   color:'red'
          // });
        }


        // Vue.$toast.error(text);
        // console.log("axios config");
        // router.push({ name: "Login" });
        //return error.response;
      } else if (error.response.status >= 500) {
        setSnackbar({
          snackbar: true,
          message: "something went wrong!!" ,
          color:'red'
        })
        // store.commit("app/SET_SNACKBAR", {
        //   snackbar: true,
        //   message: " خطایی رخ داده است",
        //   color:'red'
        // });
        // let text = "عملیات انجام نشد";
      } else {
        console.log("error!!!")
      }
    }
    console.log(error.response)

    return error.response;
    // return Promise.reject(error);
  }
);

export default axiosInstance;
