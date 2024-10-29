<script setup lang="ts">
import HeaderContent from '@/components/HeaderContent.vue'
import FooterContent from '@/components/FooterContent.vue'
import FeaturedPostContent from '@/components/Blog/FeaturedPostContent.vue';
import AllPostContent from '@/components/Blog/AllPostContent.vue';
import PaginationContent from '@/components/Blog/PaginationContent.vue';
import AllCategoriesContent from '@/components/Blog/AllCategoriesContent.vue';
import JoinTeamContent from '@/components/JoinTeamContent.vue';
</script>

<template>
    <HeaderContent/>
    <main>
        <FeaturedPostContent/>
        <AllPostContent/>
        <PaginationContent/>
        <AllCategoriesContent/>
        <JoinTeamContent/>
    </main>
    <FooterContent/>
</template>