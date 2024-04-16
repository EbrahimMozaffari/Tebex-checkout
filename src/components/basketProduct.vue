<template>
<!--  <v-row>-->
<!--    <v-col v-if="!mobile"  lg="2" class="pa-1"></v-col>-->
<!--    <v-col lg="9" sm="12" md="12" class="d-flex align-content-space-between ml-5 pa-1 pr-9">-->
<!--      <v-col lg="1"   class="ma-0 pa-0 v-col-1" align="center"-->
<!--             justify="center" >-->
<!--        <v-img src="/images/small_coins.png" height="50" width="50" />-->
<!--      </v-col>-->
<!--      <v-col lg="11" md="11" sm="11" class="pa-0">-->
<!--        <div class="text-body-1">Medium Booster</div>-->
<!--        <div class="d-flex justify-space-between">-->
<!--          <span class="text-caption">Qnty:1</span>-->
<!--          <span  class="text-caption">9.99 USD</span>-->
<!--        </div>-->
<!--      </v-col>-->

<!--    </v-col>-->
<!--    <v-col v-if="!mobile" lg="2"></v-col>-->
<!--  </v-row>-->
  <v-row>
<!--    <v-col v-if="!mobile"  lg="2" class="pa-1"></v-col>-->
    <div class="v-col-12 v-col-lg-9 mx-auto">
      <v-col  class="d-flex align-content-space-between ml-5 pa-1 pr-9">
        <v-col lg="1"   class="ma-0 pa-0 v-col-1" align="center"
               justify="center" >
          <v-img :src="`/images/${prop.product.image}`" height="50" width="50" />
        </v-col>
        <v-col lg="11" md="11" sm="11" class="pa-0">
          <div class="text-body-1">{{prop.product.name}}</div>
          <div class="d-flex justify-space-between">
            <span class="text-caption">Qnty:{{prop.product.quantity}}</span>
            <span  class="text-caption">{{prop.product.price}} USD</span>
          </div>
        </v-col>

      </v-col>
    </div>

<!--    <v-col v-if="!mobile" lg="2"></v-col>-->
  </v-row>

</template>

<script setup>
//import { useDisplay } from 'vuetify'
//const { mobile } = useDisplay()
const prop = defineProps({
  product: Object
})


</script>

<style scoped>

</style>
