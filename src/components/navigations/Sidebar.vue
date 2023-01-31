<script setup lang="ts">
import { ref, onMounted } from 'vue';
// import { useRouter, useRoute } from 'vue-router';
// Should use persistent stroage 
import { navOptions } from '@/components/navigations/NavOptions'
// const router = useRouter()
// const route = useRoute()
const collapsed = ref(false)
// const state = reactive({
//     selectedKeys: [route.name] as string[],
// })
// const selectedKeys = ref([route.name])
// const selectedKeys = ref([navOptions[0].route])
// const state = reactive({
//     matched: route.matched
// })

// watch (
//     () => route,
//     (route) => {
//         state.matched = route.matched
//     },
//     {
//         immediate: true,
//         deep: true,
//     }
// )

// const handleRouterClick = (key: string) => {
//     // router.push(`/${route}`)
//     // const currentRoute = route.matched.concat()
//     // console.log([currentRoute.pop().path])
//     router.push(key)
// }
// const clickMenuItem = ({ key }) => {
//     // if (key === route.name) return
//     console.log(key)
//     // router.push(key)
// }
onMounted(() => {
    console.log('onMounted: Sidebar')
})
</script>


<template>
    <a-layout-sider collapsible v-model:collapsed="collapsed">
        <div class="app-logo"></div>
        <!-- <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys"> -->
        <a-menu theme="dark" mode="inline">
            <!-- <a-menu-item
                v-for="option in navOptions"
                :key="option.route"
            >
                <component :is="option.icon" />
                <span>{{ option.name }}</span>
            </a-menu-item> -->
            
            <a-menu-item :key="navOptions[0].route">
                <MenuOutlined />
                <span>{{ navOptions[0].name }}</span>
            </a-menu-item>
            <a-menu-item :key="navOptions[1].route">
                <AppstoreOutlined />
                <span>{{ navOptions[1].name }}</span>
            </a-menu-item>

        </a-menu>
    </a-layout-sider>
</template>


<!-- <script lang="ts">
export default {
    data() {
        return {
            collapsed: false,
            selectedKeys: [this.$route.path], 
            navOptions: [
                {name: 'Flex Menus', route: '/menu', color: '#f44336', icon: 'menu-outlined'},
                {name: 'Cards Flow', route: '/flow', color: '#ffa117', icon: 'appstore-outlined'},
            ]
        }
    },
    created() {
        console.log('component created')
        this.logRoute()
    },
    watch: {
        selectedKeys(n, o) {
            console.log('selectedKeys changed')
            this.logRoute()
        }
    },
    methods: {
        clickMenuItem( key:string ) {
            if (key === this.$route.path) {
                return
            }
            this.$router.push(key)
        },
        logRoute() {
            console.log(this.$route.path)
        },
    }
}
</script> -->


<style scoped lang="scss">
.app-logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}
</style>