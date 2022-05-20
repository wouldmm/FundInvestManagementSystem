<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <navbar />
      </div>
      <!-- <app-main /> -->
      <div id="v-cotent" v-bind:style="{minHeight:Height+'px'}"><router-view/></div>
      <sysfooter></sysfooter>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain,sysfooter } from './components'
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'Layout',
  data() {
    return {
      Height:0
    }
  },
  components: {
    Navbar,
    Sidebar,
    AppMain,
    sysfooter
  },
  mounted() {
    this.Height = document.documentElement.clientHeight - 80;
    window.onresize = ()=>(this.Height = document.documentElement.clientHeight - 80)
  },
  mixins: [ResizeMixin],
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    },
    
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  },
  
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
    min-height: 100%;
  }

  .sysfooter{
    text-align: center;
    font-size: 16px;
    height: 40px; 
    
    bottom: 0px;
    left: 0px;
    color: #666;
    width: 100%;
    clear: both;//清除浮动
    line-height: 90px;
    background-color: #ebebed;
  }
  
  .hideSidebar .fixed-header {
    width: calc(100% - 54px)
  }

  .mobile .fixed-header {
    width: 100%;
  }

  
</style>
