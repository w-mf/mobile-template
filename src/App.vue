<template>
  <van-config-provider>
    <router-view />
    <!--    <router-view v-slot="{ Component,route }">-->
    <!--      <transition :name="route.meta.transitionName">-->
    <!--        <component :is="Component" />-->
    <!--      </transition>-->
    <!--    </router-view>-->
    <div style="text-align: center;position: fixed;bottom: 10%;width: 100%">
      <Button
        style="margin-right: 20px"
        @click="()=>go('/')"
      >
        Go to Home Page
      </Button>

      <Button @click="()=>go('/demo')">
        Go To Demo Page
      </Button>
    </div>
  </van-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Button } from 'vant';
import { useRouter } from 'vue-router';
import {postVrList} from './api';

export default defineComponent({
  name: 'App',
  components: {
    Button,
  },
  setup() {
    const router = useRouter();
    const go = (path:string) => {
      router.push(path);
    };
    postVrList({
      plantId: 1,
    }).then((res) => (res.length ? res[0].id : ''));
    return {
      go,
    };
  },
});
</script>

<style lang="less">
  @import "./styles/base.less";
  @import "~vant/es/style/normalize.less";
</style>
