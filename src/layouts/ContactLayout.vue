<script setup lang="ts">
import HeaderContent from '@/components/HeaderContent.vue'
import FooterContent from '@/components/FooterContent.vue'
import AboutUsHeaderContent from '@/components/Contact/AboutUsHeaderContent.vue';
import ContactTimeContent from '@/components/Contact/ContactTimeContent.vue';
import BoxContentFullName from '@/components/Contact/BoxContent.vue';

</script>

<template>
    <HeaderContent/>
    <main>
        <AboutUsHeaderContent/>
        <ContactTimeContent/>
        <BoxContentFullName/>
    </main>
    <FooterContent/>
</template>