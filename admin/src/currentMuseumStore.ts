import create from 'zustand';
import to from "await-to-js";
import { z } from "zod";
import { useAuthStore } from './authStore';
import { REST_URL } from './constants';

export const ExhibitParser = z.object({
    name: z.string(),
    clusterID: z.string(),
    img: z.string().url(),
    description: z.string(),
})

export type Exhibit = z.infer<typeof ExhibitParser>;

interface MuseumStore {
    loading: boolean;
    exhibits: Exhibit[];
    fetchExhibits: () => Promise<void>,
    addExhibit: (e: Exhibit) => Promise<boolean>,
}

const headers = () => ({
    "Content-Type": "application/json",
    "Authorization": useAuthStore.getState().token,  
});

const useCurrentMuseumStore = create<MuseumStore>()((set) => ({
    loading: true,
    exhibits: [],
    fetchExhibits: async () => {
        const r = await fetch(`${REST_URL}/api/collections/exhibits/records`, {
            headers: headers(),
        });
        const json = await r.json();

        set({
            exhibits: json.items,
            loading: false,
        })
    },
    addExhibit: async (e: Exhibit) => {
        const [err] = await to(fetch(`${REST_URL}/api/collections/exhibits/records`, {
            method: "POST",
            headers: headers(),
            body: JSON.stringify(e)
        }));

        if(err) {
            return false;
        }

        set((prev) => ({
            exhibits: [...prev.exhibits, e],
        }));

        return true;
    }
}))

export {
    useCurrentMuseumStore
};