<template>
    <div>
        <h2 class="text-2xl mb-4">Notification</h2>
        <form class="space-y-4 mx-auto">
        <div class="flex items-center gap-1">
            <input type="checkbox" v-model="notifications.email"/>
            <label>Email notifications</label>
        </div>
        <div class="flex items-center gap-1">
            <input type="checkbox" v-model="notifications.sms"/>
            <label>Sms notifications</label>
        </div>
        <button type="submit" class="btn-primary">Save</button>
        </form>
    </div>
</template>

<script setup lang="ts">
    import { useSettings } from '@/compossible/useSettings';
    const { notifications } = useSettings();
</script>