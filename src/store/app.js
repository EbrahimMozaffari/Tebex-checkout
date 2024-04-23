// Utilities
import { defineStore } from 'pinia'
import {appService} from "@/services/appService";
import router from "@/router";
export const useAppStore = defineStore('app', {
  state: () => ({
    layout: false,
    snackbar: false,
    snackColor:'',
    snackbarMessage:'',
    basket:{},
    transactionId:'',
    //
  }),
  getters: {},
  actions: {
    setLayout(value) {
      this.layout = value;
    },
    setSnackbar(data) {
      this.snackbarMessage = data.message,
        this.snackColor = data.color,
        this.snackbar = data.snackbar;
    },

    async fetchBasket() {
      const {data} = await appService().fetchBasket();
      this.basket = data;
    },
    async addCoupon(payload) {
      const {data} = await appService().addCoupon(payload);
      if(data.couponCode){
        this.basket = data;
      }
    },
    async checkout(payload) {
      const {data} = await appService().checkout(payload);
      if(data.success){
        this.transactionId = data.transactionId;
        await router.push({name:'Success'})
      }
    },
  }




})
