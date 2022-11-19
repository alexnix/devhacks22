import create from "zustand";
import { REST_URL } from "./constants";

interface AuthStore {
    token: string,
    loading: boolean,
    doAuth: () => Promise<void>
};

export const useAuthStore = create<AuthStore>()((set) => ({
    token: "",
    loading: true,
    doAuth: async () => {
        const r = await fetch(`${REST_URL}/api/admins/auth-with-password`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                identity: "dev@hacks.com",
                password: "devhacks2022"
            })
        });

        const rj = await r.json();

        set({
            token: rj.token,
            loading: false,
        });
    }
}));