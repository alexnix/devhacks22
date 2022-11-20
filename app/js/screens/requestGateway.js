export class RequestGateway {
    constructor(auth) {
        this.auth = auth;
    }

    post(data) {
        $.ajax({
            headers: {
                "Authorization": this.auth.getAuthToken()
            }
        });
    }
}