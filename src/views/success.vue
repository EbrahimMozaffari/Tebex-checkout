<template>
  <TebexIcon class="mx-auto my-15 w-100"  />
  <v-row>
    <v-col class="mx-auto v-col-4 pa-6 text-center border">
        <SuccessIcon />
      <h2 class="my-3">Order Complete</h2>
      <p class="text-caption">
        Thank you for your payment. You will receive your purchased products shortly.
      </p>
      <v-sheet class="border mt-4 pa-2 w-75 mx-auto">
        <h4 class="text-subtitle-1">
          Order Number: {{transactionId}}
        </h4>
      </v-sheet>


    </v-col>

  </v-row>

</template>

<script setup>
import pinia from "@/store/index.js";
import {useAppStore} from "@/store/app";
const appStore = useAppStore(pinia)
import {storeToRefs} from 'pinia'
const {transactionId} = storeToRefs(appStore)


import TebexIcon from "@/components/TebexIcon";
import SuccessIcon from "@/components/successIcon";



</script>

<style scoped>

</style>
