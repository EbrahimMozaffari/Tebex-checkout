<template>
  <v-overlay :model-value="layout" class="align-center justify-center">
    <v-progress-circular
      indeterminate
      size="64"
      color="primary"
    ></v-progress-circular>
  </v-overlay>
</template>

<script setup>
import {storeToRefs} from 'pinia'
import {useAppStore} from "@/store/app";
const appStore = useAppStore()
const {layout} = storeToRefs(appStore)

</script>

<style scoped>

</style>
