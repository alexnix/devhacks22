export class DataRetriever {
  constructor() {
    this.mockData = {
      museums: [
        {
          id: 1,
          name: "Museum 1",
          cover: "images/museum1.jpeg",
        },
        {
          id: 2,
          name: "Museum 2",
          cover: "images/museum1.jpeg",
        },
        {
          id: 3,
          name: "Museum 3",
          cover: "images/museum1.jpeg",
        },
      ],
    };
  }

  getDataFor(target) {
    switch (target) {
      case "museums":
        return this.getMuseums();
    }
  }

  getMuseums() {
    return this.mockData.museums;
  }
}
