<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>
        <img style="width:40px" src="../statics/quasar-logo.png">
        <q-toolbar-title>
          道听途说
          <!-- <div slot="subtitle">道听途说</div> -->
        </q-toolbar-title>
        <q-btn flat color="white" label="首页" @click="clickMethod1" />
        <q-btn flat color="white" label="未知旅行" @click="clickMethod2" />
        <q-btn flat color="white" label="旅行家说" @click="clickMethod3" />
        <q-btn dense flat color="white" icon="ic_forum" @click="clickMethod4" />
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>登出</q-list-header>
        <q-item>
          <q-item-side icon="ic_settings" />
          <q-item-main label="设置" />
        </q-item>
        <q-item>
          <q-item-side icon="ic_info_outline" />
          <q-item-main label="关于" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL,
    clickMethod1 () {
      this.$router.push({ path: '/' })
    },
    clickMethod2 () {
      this.$router.push({ path: 'weizhi' })
    },
    clickMethod3 () {
      this.$router.push({ path: 'lvxingjia' })
    },
    clickMethod4 () {
      window.open('http://localhost:4567/')
    }
  }
}
</script>

<style>

</style>
