<template>
  <v-row class="fill-height ma-0 pa">
    <v-col lg="6" md="6" sm="12" class="bg-greyCustom v-col-sm-12">

      <TebexIcon class="customMargin mt-9 mb-7"  />
      <p class="text-left customMargin fontSize-15 mb-9">Your order</p>

<!--      <v-row v-for="i in 3" :key="i" class="">-->
<!--        <v-col v-if="!mobile"  lg="2" class="pa-1"></v-col>-->
<!--        <v-col lg="9" sm="12" md="12" class="d-flex ml-5 pa-1 pr-9">-->
<!--            <v-col lg="1"   class="ma-0 pa-0 v-col-1" align="center"-->
<!--                   justify="center" >-->
<!--              <v-img src="/images/small_coins.png" height="50" width="50" />-->
<!--            </v-col>-->
<!--            <v-col lg="11" md="11" sm="11" class="pa-0">-->
<!--              <div class="text-body-1">Medium Booster</div>-->
<!--              <div class="d-flex justify-space-between">-->
<!--                <span class="text-caption">Qnty:1</span>-->
<!--                <span  class="text-caption">9.99 USD</span>-->
<!--              </div>-->
<!--            </v-col>-->

<!--        </v-col>-->
<!--        <v-col v-if="!mobile" lg="2"></v-col>-->
<!--      </v-row>-->

  <basketProduct v-for="i in 5" :key="i" />
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

            ></v-text-field>
          </v-col>
          <v-col lg="2" class="pl-2 v-col-1">
            <v-btn
            class="text-none"
            color="grey-lighten-3"

            variant="flat"

          >
            Confirm
          </v-btn></v-col>
        </v-row>

        <div class="mt-5 d-flex justify-space-between ">
          <p>Subtotsl:</p>
          <p>$13.98</p>
        </div>
        <div class="mt-5 d-flex justify-space-between ">
          <p>Sale Tax:</p>
          <p>$0.00</p>
        </div>
        <div class="mt-5 d-flex justify-space-between text-h5">
          <p >Totsl Price:</p>
          <p>$13.98</p>
        </div>
      </div>





    </v-col>


    <v-col lg="6" md="6" sm="12" class="v-col-12">
      <p>dsfdsfdf</p>

    </v-col>
  </v-row>

</template>

<script setup>

import TebexIcon from "@/components/TebexIcon";
import { useDisplay } from 'vuetify'

import basketProduct from '@/components/basketProduct'
// import {computed} from "vue";
const { mobile } = useDisplay()
// const isMobile = computed(()=>{
//   return
// })

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
