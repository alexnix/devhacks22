import create from "zustand";

type Museum = {
    name: string;
    img: string;
    id: number;
};

interface MuseumsStore {
    museums: Museum[];
}

const dummyMuseums = [
    {
        id: 1,
        name: "Muzeul Antipa", 
        img: "https://media.hotnews.ro/media_server1/image-2013-12-27-16294963-41-muzeul-antipa.jpg"
    },
    {
        id: 2,
        name: "Muzeul de Geologie", 
        img: "https://img.observatornews.ro/0/2017/2/14/199311/14870776955fc89a8a.jpg?w=910"
    },
    {
        id: 3,
        name: "Muzeul berii",
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/a1/f6/e3/beer-museum-prague.jpg?w=1200&h=-1&s=1"
    }
];

export const useMuseumsStore = create<MuseumsStore>()((set) => ({
    museums: dummyMuseums, 
}));