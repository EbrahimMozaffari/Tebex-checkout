<template>

  <v-snackbar
  style="z-index:20002"
    v-model="snackbar"
    location="top"
    :color="snackColor"
    :timeout="3000"
     class="elevation-6"
  >
  <span >
    {{ snackbarMessage }}

  </span>

    <template v-slot:actions>

      <!-- <v-btn color="black" variant="text" @click="snackbar = false">
        <v-icon color="red">mdi-close</v-icon>
      </v-btn> -->
    </template>
  </v-snackbar>
</template>
<script setup>
import {storeToRefs} from 'pinia'
import {useAppStore} from "@/store/app";
const appStore = useAppStore()
const {snackbar,snackbarMessage,snackColor} = storeToRefs(appStore)


// const prop = defineProps({
//   color: {
//     default: "success",
//   },
//   location: {
//     default: "top",
//   },
//   multiLine: {
//     type: Boolean,
//     default: false,
//   },
//   timeout:{
//     type:Number,
//     default:4000
//   }
// })

</script>
<style scoped></style>
