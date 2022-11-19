import create from 'zustand';

const exhibitsDummy = [
    {
        name: "Fier",
        cluster: "Metal",
        img: "https://z4y6y3m2.rocketcdn.me/blog/wp-content/uploads/2016/09/Magnetic-Pyrites.jpg"
    },
    {
        name: "Aur",
        cluster: "Metal",
        img: "https://p.turbosquid.com/ts-thumb/s5/eJ4tYQ/Nb/goldmineral01_a0000/jpg/1631567616/600x600/fit_q87/82cde42f2862e3d59d6fdafebec208bd4b7e4d09/goldmineral01_a0000.jpg"
    },
    {
        name: "Argint",
        cluster: "Metal",
        img: "https://geology.com/minerals/photos/silver-crystals.jpg"
    },
];

type Any = any;

interface Exhibit extends Any {}

interface MuseumStore {
    loading: boolean;
    exhibits: Exhibit[];
    fetchExhibits: () => Promise<void>,
    addExhibit: (e: Exhibit) => Promise<void>,
}

const useMuseumStore = create<MuseumStore>()((set) => ({
    loading: true,
    exhibits: [],
    fetchExhibits: async () => {
        setTimeout(() => {
            set({
                exhibits: exhibitsDummy,
                loading: false,
            })
        }, 1000)
    },
    addExhibit: async (e: Exhibit) => set((prev) => ({
        exhibits: [...prev.exhibits, e],
    }))
}))

export {
    useMuseumStore
};