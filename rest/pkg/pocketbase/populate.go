package pocketbase

import (
	"devhacks/pkg/utils"
	"encoding/json"
)

const (
	EXHIBIT_ENDPOINT = "/api/collections/exhibits/records"
)

var (
	exhibits = []utils.Exhibit{
		{
			Name:        "Mona Lisa",
			Description: "Mona Lisa is a half-length portrait painting by the Italian Renaissance artist Leonardo da Vinci. It is considered an archetypal masterpiece of the Italian Renaissance, and has been described as the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world.",
			ClusterID:   "1",
			Img:         "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
		},
		{
			Name:        "Venus de Milo",
			Description: "The Venus de Milo is a marble sculpture of Aphrodite, the Greek goddess of love and beauty. It was created sometime between 130 and 100 BC by Alexandros of Antioch, a sculptor from the Hellenistic city of Antioch. It is believed to have been created for the island sanctuary of Aphrodite Pandemos, which was located on the island of Milos, in the Aegean Sea. The sculpture is now in the Louvre in Paris, France.",
			ClusterID:   "2",
			Img:         "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Venus_de_Milo.jpg/1200px-Venus_de_Milo.jpg",
		},
		{
			Name:        "Starry Night",
			Description: "The Starry Night is an oil on canvas by the Dutch post-impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an idealized village. It has been in the permanent collection of the Museum of Modern Art in New York City since 1941, acquired through the Lillie P. Bliss Bequest. Widely regarded as Van Gogh's magnum opus, The Starry Night is one of the most recognized paintings in Western culture.",
			ClusterID:   "3",
			Img:         "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
		},
		{
			Name:        "The Last Supper",
			Description: "The Last Supper is a late 15th-century mural painting by Leonardo da Vinci housed by the refectory of the Convent of Santa Maria delle Grazie in Milan, Italy. The painting is a depiction of the scene from the Gospel of John in which Jesus shares the Last Supper with his disciples, hours before his crucifixion. It is one of the most reproduced religious paintings in history.",
			ClusterID:   "4",
			Img:         "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Leonardo_da_Vinci_-_The_Last_Supper_-_Google_Art_Project.jpg/1200px-Leonardo_da_Vinci_-_The_Last_Supper_-_Google_Art_Project.jpg",
		},
		{
			Name:        "The Scream",
			Description: "The Scream is an expressionist painting created by Norwegian artist Edvard Munch in 1893. It is one of the most famous paintings in the history of Western culture. The painting depicts a figure with an agonized expression against a landscape with a setting sun. It is in oil, tempera and pastel on cardboard. It is Munch's best-known work, and is regarded as one of the most important works of late 19th-century Symbolism or late 19th-century Expressionism.",
			ClusterID:   "5",
			Img:         "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/The_Scream.jpg/1200px-The_Scream.jpg",
		},
		{
			Name:        "The Persistence of Memory",
			Description: "The Persistence of Memory is a 1931 painting by Spanish surrealist artist Salvador Dalí. It depicts melting watches against a landscape with a distant mountain. The painting is one of Dalí's best-known works, and is often interpreted as a symbol of the passage of time. It is currently in the collection of the Museum of Modern Art in New York City.",
			ClusterID:   "6",
			Img:         "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Salvador_Dali%2C_1931%2C_The_Persistence_of_Memory%2C_oil_on_canvas%2C_10_x_8_inch%2C_Metropolitan_Museum_of_Art%2C_New_York.jpg/1200px-Salvador_Dali%2C_1931%2C_The_Persistence_of_Memory%2C_oil_on_canvas%2C_10_x_8_inch%2C_Metropolitan_Museum_of_Art%2C_New_York.jpg",
		},
		{
			Name:        "The Creation of Adam",
			Description: "The Creation of Adam is a fresco painting by Michelangelo, which forms part of the Sistine Chapel's ceiling, painted c. 1508–1512. It illustrates the Biblical creation narrative from the Book of Genesis in which God breathes life into Adam",
			ClusterID:   "7",
			Img:         "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Michelangelo_-_The_Creation_of_Adam_-_Google_Art_Project.jpg/1200px-Michelangelo_-_The_Creation_of_Adam_-_Google_Art_Project.jpg",
		},
		{
			Name:        "The Night Watch",
			Description: "The Night Watch is a 1642 painting by Rembrandt. It depicts a militia company of the civic guard of Amsterdam, the local militia of the Dutch Republic, which was called the 'Night Watch'. The painting is 4.5 metres (15 ft) wide and 3.6 metres (12 ft) high. It is currently on display in the Rijksmuseum in Amsterdam.",
			ClusterID:   "8",
			Img:         "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Rembrandt_-_The_Night_Watch_-_Google_Art_Project.jpg/1200px-Rembrandt_-_The_Night_Watch_-_Google_Art_Project.jpg",
		},
		{
			Name:        "Guernica",
			Description: "Guernica is a large oil painting on canvas by Spanish artist Pablo Picasso completed in June 1937. It is 3.49 m (11 ft 5 in) wide and 2.5 m (8 ft 2 in) high. The work is now in the Museo Reina Sofía in Madrid, Spain.",
			ClusterID:   "10",
			Img:         "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Picasso%2C_Pablo_-_Guernica%2C_1937_-_Google_Art_Project.jpg/1200px-Picasso%2C_Pablo_-_Guernica%2C_1937_-_Google_Art_Project.jpg",
		},
	}
)

func AddExhibits() error {
	for _, e := range exhibits {
		data, err := json.Marshal(e)
		if err != nil {
			return err
		}

		PostRequest(EXHIBIT_ENDPOINT, data)
	}

	return nil
}
