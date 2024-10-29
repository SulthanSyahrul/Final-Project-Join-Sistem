<script setup lang="ts">
import HeaderContent from '@/components/HeaderContent.vue'
import FooterContent from '@/components/FooterContent.vue'
import CategoryHeroContent from '@/components/Category/CategoryHeroContent.vue';
import CategorySectionContent from '@/components/Category/CategorySectionContent.vue';
</script>

<template>
    <HeaderContent/>
    <main>
        <CategoryHeroContent/>
        <CategorySectionContent/>
    </main>
    <FooterContent/>
</template>