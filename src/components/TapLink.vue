<template>
    <button :class="{'p-4 border-b-2': true, 'border-transparent': !isActive , 'border-blue-500 text-blue-500': isActive }" 
    @click="$emit('click')">
        {{ tab.label }}
    </button>
</template>

<script setup lang="ts">

import type { Tab } from '@/types';
import { computed } from 'vue';

    const isActive = computed(() => props.currentTab === props.tab.key);

    const props =  defineProps<{
        currentTab: string,
        tab: Tab
    }>();

    defineEmits<{
        click: [];
    }>();

</script>
