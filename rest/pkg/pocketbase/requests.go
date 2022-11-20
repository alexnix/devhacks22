package pocketbase

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
)

const (
	POCKETBASE_URL      = "http://localhost:8090"
	POCKETBASE_EMAIL    = "dev@hacks.com"
	POCKETBASE_PASSWORD = "devhacks2022"
)

var POCKETBASE_TOKEN string

func connect() {
	client := &http.Client{}

	payload := []byte(fmt.Sprintf(`{"identity":"%s","password":"%s"}`, POCKETBASE_EMAIL, POCKETBASE_PASSWORD))

	req, err := createRequest("POST", POCKETBASE_URL+"/api/admins/auth-with-password", payload)
	if err != nil {
		log.Fatal(err)
	}

	res, err := client.Do(req)
	if err != nil {
		log.Fatal(err)
	}
	defer res.Body.Close()

	all, err := io.ReadAll(res.Body)
	if err != nil {
		log.Fatal(err)
	}

	tokenStruct := struct {
		Token string `json:"token"`
	}{}

	err = json.Unmarshal(all, &tokenStruct)
	if err != nil {
		log.Fatal(err)
	}

	POCKETBASE_TOKEN = tokenStruct.Token
}

func addHeaders(req *http.Request) {
	req.Header.Add("Content-Type", "application/json")
	req.Header.Add("Authorization", POCKETBASE_TOKEN)
}

func createRequest(method string, url string, payload []byte) (*http.Request, error) {
	req, err := http.NewRequest(method, url, bytes.NewBuffer(payload))
	if err != nil {
		return nil, err
	}
	addHeaders(req)
	return req, nil
}

func checkToken() {
	if POCKETBASE_TOKEN == "" {
		connect()
	}
}

func PostRequest(endpoint string, payload []byte) {
	checkToken()

	client := &http.Client{}

	req, err := createRequest("POST", POCKETBASE_URL+endpoint, payload)
	if err != nil {
		log.Fatal(err)
	}

	res, err := client.Do(req)
	if err != nil {
		log.Fatal(err)
	}
	defer res.Body.Close()
}
