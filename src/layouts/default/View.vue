<template>
  <v-main>
    <overlay />
    <base-snack-bar />
    <router-view />
  </v-main>
</template>

<script setup>
  //
import Overlay from "@/components/Overlay";
  import BaseSnackBar from "@/components/BaseSnackBar";
</script>
