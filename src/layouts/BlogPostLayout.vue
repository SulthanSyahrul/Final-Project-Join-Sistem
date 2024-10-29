<script setup lang="ts">
import HeaderContent from '@/components/HeaderContent.vue'
import FooterContent from '@/components/FooterContent.vue'
import JoinTeamContent from '@/components/JoinTeamContent.vue';
import BlogHeroContent from '@/components/BlogPost/BlogHeroContent.vue';
import BlogImageContent from '@/components/BlogPost/BlogImageContent.vue';
import BlogBodyContent from '@/components/BlogPost/BlogBodyContent.vue';
import BlogRelatedPost from '@/components/BlogPost/BlogRelatedPost.vue';
</script>

<template>
    <HeaderContent/>
    <main>
        <BlogHeroContent/>
        <BlogImageContent/>
        <BlogBodyContent/>
        <BlogRelatedPost/>
        <JoinTeamContent/>
    </main>
    <FooterContent/>
</template>