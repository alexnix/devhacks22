export class DataRetriever {
    constructor() {
        this.mockData = {
            museums: [
                {
                    id: 1,
                    name: "Museum",
                    cover: "https://www.logomoose.com/wp-content/uploads/2017/10/museum_logo_pczohtas-01.png",
                },
                {
                    id: 2,
                    name: "Australian Museum",
                    cover: "https://miro.medium.com/max/1400/1*PZEZ0KKLRQS3ueyPLTFCsw.png",
                },
                {
                    id: 3,
                    name: "Science Museum Group",
                    cover: "https://centaur-wp.s3.eu-central-1.amazonaws.com/designweek/prod/content/uploads/2017/10/10170829/NORTH_SMG_002_LOGO.jpg",
                },
            ],
            items: [
                {
                    id: "30c05452-685c-11ed-9022-0242ac120002",
                    museumId: 1,
                    name: "Mona Lisa",
                    description: "Mona Lisa is a half-length portrait painting by the Italian Renaissance artist Leonardo da Vinci. It is considered an archetypal masterpiece of the Italian Renaissance, and has been described as the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world.",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
                },
            ],
        };
    }

    getMuseums() {
        return this.mockData.museums;
    }

    getMuseumItemByCode(museumId, code) {
        return this.mockData.items[0];
    }
}
