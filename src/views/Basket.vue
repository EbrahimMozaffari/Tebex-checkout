<template>
  <v-row class="fill-height ma-0 pa">
    <v-col lg="6" md="6" sm="12" class="bg-greyCustom v-col-sm-12">

      <TebexIcon class="customMargin mt-9 mb-7"  />
      <p class="text-left customMargin fontSize-15 mb-9">Your order</p>
  <basketProduct v-for="product in basket.products" :product="product" :key="i" />
      <div class="v-col-12 v-col-lg-9  mx-auto pl-5  mt-10" >
        <p class="my-3">Coupon/Gift Card</p>
        <v-row>
          <v-col lg="10"  class="mr-0 pr-0 v-col-10">
            <v-text-field
              density="compact"
              label="Enter code here"
              variant="solo"
              hide-details
              single-line
              v-model="couponCode"

            ></v-text-field>
          </v-col>
          <v-col lg="2" class="pl-2 v-col-1">
            <v-btn
            class="text-none"
            color="grey-lighten-3"
            variant="flat"
            @click="addCouponBasket"

          >
            Confirm
          </v-btn></v-col>
        </v-row>

        <div class="mt-5 d-flex justify-space-between ">
          <p>Subtotsl:</p>
          <p>${{basket.subTotal}}</p>
        </div>
        <div class="mt-5 d-flex justify-space-between ">
          <p>Sale Tax:</p>
          <p>${{basket.salesTax}}</p>
        </div>
        <div class="mt-5 d-flex justify-space-between text-h5">
          <p >Totsl Price:</p>
          <p>${{basket.total}}</p>
        </div>
      </div>





    </v-col>


    <v-col lg="6" md="6" sm="12" class="v-col-12">
      <div class="v-col-9 mx-auto mt-16">
        <v-breadcrumbs :items="items" class="ml-0 pl-2">
          <template v-slot:divider>
            <v-icon icon="mdi-chevron-right"></v-icon>
          </template>
        </v-breadcrumbs>

        <div class="v-col-12">
          <label>Email*</label>
          <v-text-field
            v-model="email"
            density="compact"
            label="Enter your email address"
            variant="solo"
            hide-details
            single-line

          ></v-text-field>
        </div>
        <div class="v-col-12">
          <label>Card number*</label>
          <v-text-field
            v-model="cardNumber"
            density="compact"
            label="1234 5678 9101 1121"
            variant="solo"
            hide-details
            single-line

          ></v-text-field>
        </div>
        <v-row class="v-col-12 pr-0">
          <v-col class="v-col-12 v-col-lg-3">
            <label>Expiry Date*</label>
            <v-text-field
              v-model="cardExpiry"
              density="compact"
              label="MM/YY"
              variant="solo"
              hide-details
              single-line

            ></v-text-field>
          </v-col>
          <v-col class="v-col-12 v-col-lg-3">
            <label>CVC/CVV*</label>
            <v-text-field
              v-model="cardCvc"
              density="compact"
              label="123"
              variant="solo"
              hide-details
              single-line

            ></v-text-field>
          </v-col>
          <v-col class="v-col-12 v-col-lg-6 pr-0">
            <label>Zip Code / Postal Code*</label>
            <v-text-field
              v-model="postalCode"
              density="compact"
              label="N12 3ET"
              variant="solo"
              hide-details
              single-line
            ></v-text-field>
          </v-col>
        </v-row>
        <div class="v-col-12">
          <label>Name on card*</label>
          <v-text-field
            v-model="nameOnCard"
            density="compact"
            label="Enter your name as shown"
            variant="solo"
            hide-details
            single-line

          ></v-text-field>
        </div>
        <div class="v-col-12">
          <v-btn block flat color="#41C4C3" @click="checkoutBasket">Pay by Card</v-btn>
        </div>


      </div>



    </v-col>
  </v-row>

</template>

<script setup>

import TebexIcon from "@/components/TebexIcon";
import basketProduct from '@/components/basketProduct'
// import { useDisplay } from 'vuetify'
import {onMounted, ref} from "vue";
import pinia from "@/store/index.js";
import {useAppStore} from "@/store/app";
const appStore = useAppStore(pinia)
import {storeToRefs} from 'pinia'
const {basket} = storeToRefs(appStore)
const {fetchBasket,addCoupon,checkout} = appStore;

const couponCode = ref('')
const cardCvc = ref('')
const cardExpiry = ref('')
const cardNumber = ref('')
const email = ref('')
const nameOnCard = ref('')
const postalCode = ref('')

onMounted(async ()=>{
  await fetchBasket();
})

const addCouponBasket = async () => {
  await addCoupon({
    id:basket.value.id,
    couponCode:couponCode.value,
  })
  //await fetchBasket();
}
const checkoutBasket = async () => {
  await checkout({
    id:basket.value.id,
    body:{
      cardCvc:cardCvc.value,
      cardExpiry:cardExpiry.value,
      cardNumber:cardNumber.value,
      email:email.value,
      nameOnCard:nameOnCard.value,
      postalCode:postalCode.value
    }
  })
  //await fetchBasket();
}

//

// import {computed} from "vue";
// const { mobile } = useDisplay()
// const isMobile = computed(()=>{
//   return
// })

const items = [
  {
    title: 'Make Payment',
    disabled: false,
    href: 'breadcrumbs_dashboard',
  },
  {
    title: 'Order Confirmed',
    disabled: true,
    href: 'breadcrumbs_link_1',
  },

]

</script>

<style scoped>
.customMargin{
  margin-left: 145px;
}
.customMarginRight{
  margin-right: 150px;
}
.customMarginTop{
  margin-top: 250px !important;
}
.fontSize-15{
  font-size: 15px !important;
}
.fontSize-12{
  font-size: 12px !important;
}
</style>
