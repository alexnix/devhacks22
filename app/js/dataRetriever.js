export class DataRetriever {
    constructor() {
        this.mockData = {
            museums: [
                {
                    id: 1,
                    name: "Muzeul De Geologie",
                    cover: "https://geology.ro/wp-content/uploads/2022/07/logo-mgn-2022.jpg",
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
                    name: "AUR",
                    description: "Aurul este elementul cunoscut din cele mai vechi timpuri. Fiind răspândit în stare nativă în natură, el se putea obține ușor în cantități mici. Se crede că aurul a fost descoperit înaintea cuprului. Cules sub forma unor bucăți strălucitoare din nisipurile râurilor și din depunerile aluvionare, aurul a fost dintotdeauna un metal de ornament, apreciat pentru luciul său galben, dar mai ales pentru stabilitatea sa față de agenții corozivi.",
                    image: "https://cdn7.avanticart.ro/graveazapovesteata.ro/pictures/blog/129/La-producci%c3%b3n-de-oro-registrar%c3%a1-m%c3%adnimos-hist%c3%b3ricos-en-algunos-pa%c3%adses.jpg.jpg"
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
