<script setup lang="ts">
import HeaderContent from '@/components/HeaderContent.vue'
import FooterContent from '@/components/FooterContent.vue'
import StatisticsContent from '@/components/AboutUs/StatisticsContent.vue';
import AboutUsHeaderContent from '@/components/AboutUs/AboutUsHeaderContent.vue';
import MissionVissionContent from '@/components/AboutUs/MissionVissionContent.vue';
import KnowMoreAboutOurTeamContent from '@/components/AboutUs/KnowMoreAboutOurTeamContent.vue';
import WhyWeStartedContent from '@/components/AboutUs/WhyWeStartedContent.vue';
import AuthorListContent from '@/components/AboutUs/AuthorListContent.vue';
import JoinTeamContent from '@/components/JoinTeamContent.vue'

</script>

<template>
    <HeaderContent/>
    <main>
        <StatisticsContent/>
        <AboutUsHeaderContent/>
        <MissionVissionContent/>
        <KnowMoreAboutOurTeamContent/>
        <WhyWeStartedContent/>
        <AuthorListContent/>
        <JoinTeamContent/>
    </main>
    <FooterContent/>
</template>