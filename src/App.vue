
<template>

  <main  class="max-w-2xl mx-auto px-4">
    <nav class="font-medium text-center text-gray-500 border-b border-gray-200 mb-4">
      <ul class="flex flex-wrap -mb-px">
        <li v-for="tab in tabs" :key="tab.key">
            <TapLink 
            :tab="tab" 
            :currentTab="currentTab"  
            @click="currentTab=tab.key">
          </TapLink>
        </li>
      </ul>
    </nav>
    <Transition mode="out-in">
      <component :is="currentTabComponent" />
    </Transition>

  </main>
</template>

<script setup lang="ts">

import type { Tab, TabKey } from '@/types';
import { computed, ref } from 'vue';
import TapLink from '@/components/TapLink.vue';
import GeneralTab from '@/components/GeneralTab.vue';
import NotificationTab from '@/components/NotificationTab.vue';
import PrivacyTab from '@/components/PrivacyTab.vue';

  const tabs: Tab[] = [
    {
      key: 'General',
      label: 'General',
      component: GeneralTab
    },
    {
      key: 'Notifications',
      label: 'Notifications',
      component: NotificationTab
    },
    {
      key: 'Privacy',
      label: 'Privacy',
      component: PrivacyTab
    }
  ]
  
  const currentTab = ref<TabKey>('General');
    const currentTabComponent = computed(() => tabs.find(tab => tab.key === currentTab.value)?.component);

</script>

<style scoped>
    .v-enter-active,
    .v-leave-active {
    transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
    opacity: 0;
    }
</style>
