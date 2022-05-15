<template>
  <div class="green-box"></div>
  <ion-row class="ion-align-items-center">
    <ion-col size="9" style="margin-left: 12px">
      <ion-text color="light">
        <span class="user-title-text">Hello Awesome_69,</span>
        <br />
        <span class="small-text"
          ><slot>Let's Discover Our Beautifull Planet together</slot></span
        >
      </ion-text>
    </ion-col>
    <ion-col size="auto">
      <ion-avatar>
        <img
          src="https://www.t2transfer.com/wp-content/uploads/2021/10/83-836357_greg-ezeilo-avatar-icon-png.jpg"
        />
      </ion-avatar>
    </ion-col>
  </ion-row>
  <div class="header-ends"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonRow, IonCol, IonAvatar, IonText } from "@ionic/vue";

export default defineComponent({
  name: "Tab1Page",
  components: { IonRow, IonCol, IonAvatar, IonText },
});
</script>
<style scoped>
.small-text {
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #ffffff;

  mix-blend-mode: normal;
  opacity: 0.8;
}
.user-title-text {
  font-size: 21px;
  line-height: 25px;
  color: #ffffff;
}
.custom-input {
  width: 80%;
  height: 50px;
  left: 10%;
  right: 10%;
  margin-top: 11px;

  background: #ffffff;
  box-shadow: 3px 5px 20px rgba(182, 182, 182, 0.15);
  border-radius: 3100px;
  box-shadow: 5px 10px 18px #888888;
}
.green-box {
  position: absolute;
  width: 100%;
  height: 172px;
  left: 0px;
  top: 0px;

  background: linear-gradient(107.16deg, #61d2c4 -9.45%, #29d890 85.23%);
}
::v-deep .native-input {
  margin-left: 20px;
  /* padding-right: auto; */
}

.header-ends {
  margin-bottom: 48px;
}
</style>
