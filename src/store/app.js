// Utilities
import { defineStore } from 'pinia'
 import {appService} from "@/services/appService";
export const useAppStore = defineStore('app', {
  state: () => ({
    layout: false,
    snackbar: false,
    snackColor:'',
    snackbarMessage:'',
    basket:{},
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
      console.log(data)
      this.basket = data;
    },
    async addCoupon(payload) {
      const {data} = await appService().addCoupon(payload);
      this.basket = data;
    },
  }




})
