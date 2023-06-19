<template>
    <div v-for="article in articles" :key="article.id">
        <RouterLink :to="{name: 'articles.comments', params: {id: article.id}}">
            {{article.title}}
        </RouterLink>
    </div>
</template>
<script>
import { RouterLink } from 'vue-router';

export default{
    props: {
        articles: Object,
    },
    components: { RouterLink }
}
</script>