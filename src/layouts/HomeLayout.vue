<script setup lang="ts">
import HeaderContent from '@/components/HeaderContent.vue'
import FooterContent from '@/components/FooterContent.vue'
import HeroContent from '@/components/Home/HeroContent.vue'
import BlogContent from '@/components/Home/FeaturedPostContent.vue'
import AboutUsContent from '@/components/Home/AboutUsContent.vue'
import CategoriesContent from '@/components/Home/CategoriesContent.vue'
import SpecialPostContent from '@/components/Home/SpecialPostContent.vue'
import AuthorListContent from '@/components/Home/AuthorListContent.vue'
import FeaturedLogoContent from '@/components/Home/FeaturedLogoContent.vue'
import JoinTeamContent from '@/components/JoinTeamContent.vue'
</script>

<template>
  <HeaderContent/>
  <main>
    <HeroContent/>
    <BlogContent/>
    <AboutUsContent/>
    <CategoriesContent/>
    <SpecialPostContent/>
    <AuthorListContent/>
    <FeaturedLogoContent/>
    <JoinTeamContent/>
  </main>
  <FooterContent/>
</template>
