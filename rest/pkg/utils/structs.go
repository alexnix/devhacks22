package utils

type Exhibit struct {
	Name            string `json:"name"`
	Description     string `json:"description"`
	ClusterID       string `json:"clusterID"`
	Img             string `json:"img"`
	EngagementScore string `json:"engagementScore"`
}

type ViewEntry struct {
	UserID    string `json:"userID"`
	ExhibitID string `json:"exhibitID"`
	Time      string `json:"time"`
	Like      string `json:"like"`
}
