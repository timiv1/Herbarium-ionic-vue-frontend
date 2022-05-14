<template>
  <ion-fab
    size="large"
    vertical="bottom"
    horizontal="center"
    slot="fixed"
    outline
  >
    <ion-fab-button color="primary">
      <ion-icon size="large" :icon="camera" @click="takePhoto()"></ion-icon>
    </ion-fab-button>
  </ion-fab>

  <!-- <ion-fab vertical="bottom" horizontal="center" slot="fixed">
      <ion-fab-button>
        <ion-icon name="homeOutline"></ion-icon>
      </ion-fab-button>
    </ion-fab> -->
</template>
<script lang="ts">
import { usePhoto } from "../composables/usePhoto";
import { IonIcon, IonFab, IonFabButton } from "@ionic/vue";
import { defineComponent } from "vue";
import { camera } from "ionicons/icons";
export default defineComponent({
  name: "PhotoFab",
  components: {
    IonIcon,
    IonFab,
    IonFabButton,
  },
  setup() {
    const { takePhoto } = usePhoto();

    return { camera, takePhoto };
  },
});
</script>
<style>
/* ion-fab-button {
  width: 80px;
  height: 80px;
} */
</style>
