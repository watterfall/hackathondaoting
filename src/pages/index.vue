<template>
  <q-page class="flex flex-center">
    <baidu-map class="bm-view" :center="center" :zoom="zoom" @ready="handler" ak="r9U9wyyvxi6tLfKmQsmpLYS2syCxAzi2">
      <bm-city-list anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-city-list>
      <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_LEFT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
      <bm-marker :position="{lng: 113.9144566, lat: 22.4838345}" :dragging="true" title="蛇口">
        <bm-label :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
      </bm-marker>
      <bm-marker :position="{lng: 114.122794, lat: 22.550547}" :dragging="true" title="老街">
        <bm-label :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
      </bm-marker>
      <bm-marker :position="{lng: 114.005927, lat: 22.528507}" :dragging="true" title="红树林生态园">
        <bm-label :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
      </bm-marker>
      <bm-marker :position="{lng: 113.980442, lat: 22.542145}" :dragging="true" title="世界之窗">
        <bm-label :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
      </bm-marker>
      <bm-marker :position="{lng: 114.1870758, lat: 22.561808}" :dragging="true" title="梧桐山">
        <bm-label :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
      </bm-marker>
      <bm-marker :position="{lng: 104.195397, lat: 35.86166}" :dragging="true" title="七娘山">
        <bm-label :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
      </bm-marker>
      <bm-marker :position="{lng: 113.958686, lat: 22.553979}" :dragging="true" title="深圳南山外国语学校">
        <bm-label :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
      </bm-marker>
    </baidu-map>
  </q-page>
</template>

<style>
.bm-view {
  width: 95%;
  height: 600px;
}
</style>

<script>
import {BaiduMap, BmCityList, BmGeolocation, BmMapType, BmMarker, BmInfoWindow} from 'vue-baidu-map'
export default {
  name: 'PageIndex',
  components: {
    BaiduMap,
    BmCityList,
    BmGeolocation,
    BmMapType,
    BmMarker,
    BmInfoWindow
  },
  data () {
    return {
      center: {lng: 114.060034, lat: 22.55955},
      zoom: 13,
      points: []
    }
  },
  methods: {
    handler ({BMap, map}) {
      console.log(BMap, map)
      this.center.$lng = 114.060034
      this.center.$lat = 22.55955
      this.$zoom = 13
    }
  }
}
</script>
