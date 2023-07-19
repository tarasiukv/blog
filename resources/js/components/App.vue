<script setup>
    import {useRoute} from "vue-router"
    const route = useRoute();
    // import SidebarComponent from "./components/Sidebar/SidebarComponent.vue";
    // import FooterComponent from "./components/Footer/FooterComponent.vue";

// export default defineComponent({
//     components: {},
//     setup() {
//         return {
//             username:
//         }
//     }
// })
</script>

<template>
    <!-- ======= Header ======= -->
<!--    <sidebar-component />-->
    <router-view></router-view>
    HelloApp
    <!-- ======= Footer ======= -->
<!--    <footer-component />-->
    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
</template>

<style scoped>

</style>
