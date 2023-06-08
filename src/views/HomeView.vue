<script setup>
import PostView from "@/components/posts/PostView.vue";
import PostWritter from "@/components/posts/PostWritter.vue";
import {useAuthStore} from "@/stores/auth";
import {ref} from "vue";
import {useQuery} from "@vue/apollo-composable";
import {GET_ALL_POSTS} from "@/graphql-operations";

const auth = useAuthStore()

const allPostsQuery = useQuery(GET_ALL_POSTS)

const posts = ref([])

allPostsQuery.onResult((result) => {
  console.log(result)
  posts.value = result.data?.posts
})

</script>

<template>
    <div class="p-1 py-3 col-12 col-md-8 col-lg-6 col-xl-5">
      <post-writter/>
      <post-view v-for="post in posts" :key="post.id" :post="post"/>
    </div>
</template>

<style scoped>
</style>
