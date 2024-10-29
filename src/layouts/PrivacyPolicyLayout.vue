<script setup lang="ts">
import HeaderContent from '@/components/HeaderContent.vue'
import FooterContent from '@/components/FooterContent.vue'
import PrivacyHeroContent from '@/components/PrivacyPolicy/PrivacyHeroContent.vue';
import PrivacyBodyContent from '@/components/PrivacyPolicy/PrivacyBodyContent.vue';

</script>

<template>
    <HeaderContent/>
    <main>
        <PrivacyHeroContent/>
        <PrivacyBodyContent/>
    </main>
    <FooterContent/>
</template>