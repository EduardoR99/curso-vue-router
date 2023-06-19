

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

router.beforeEach((to, from) => {
    console.log(`Global beforeEach, from ${from.name} to ${to.name}`)

    if(['login', 'home', 'about'].includes(to.name)){
        return true;
    };
    return { name: 'login', query: {redirect: to.fullPath}};
})
app.mount('#app')
