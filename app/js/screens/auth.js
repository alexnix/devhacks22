export class Auth {
    constructor() {
        this.screenId = "auth-screen";
        this.authToken = null;
        this.authRoute = "http://127.0.0.1:8090/api/admins/auth-with-password";
        console.log(this.authRoute);
        this.identity = "dev@hacks.com";
        this.pass = "devhacks2022";
    }

    autoLogin() {
        const _self = this;
        $.ajax({
            url: this.authRoute,
            method: "POST",
            dataType: "json",
            data: {
                "identity": this.identity,
                "password": this.pass
            }
        }).done(function (response) {
            localStorage.setItem("token", response.token);
        });
    }

    getAuthToken() {
        return localStorage.getItem("token");
    }
}