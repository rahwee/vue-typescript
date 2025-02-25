import { ref } from "vue"

interface GeneralSettings {
    about: string;
    country: string;
    gender: string;
    email: string;
    username: string;
}

interface NotificationSettings {
    email: boolean;
    sms: boolean;
}

type Visibility = "public" | "private";
interface PrivacySettings {
    visibility: Visibility;
    searchEngineIndex: boolean;
}

const general = ref<GeneralSettings>({
    about: "",
    country: "USD",
    gender: "male",
    email: "",
    username: ""
});


const notifications = ref<NotificationSettings>({
    email: false,
    sms: false
})

const privacy = ref<PrivacySettings>({
    visibility: "public",
    searchEngineIndex: false
})

export function useSettings() {
    return {
        general,
        notifications,
        privacy
    }
}
