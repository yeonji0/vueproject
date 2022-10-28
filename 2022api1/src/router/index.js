import {createRouter,createWebHistory} from "vue-router"
import HomeView from '@/components/HomeView.vue'
import PostView from '@/components/PostView.vue'
import PhotoView from '@/components/PhotoView.vue'

const routes = [
    {
        path:'/',
        name:'home',
        component:HomeView
    },
    {
        path:'/post',
        name:'post',
        component:PostView
    },
    {
        path:'/photo',
        name:'photo',
        component:PhotoView
    }
]

const router = createRouter(
    {
        history:createWebHistory(),
        routes
    }
)

export default router;