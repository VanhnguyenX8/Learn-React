export class BaseNetwork {

    constructor(baseURL = "", token = null) {
        this.baseURL = baseURL;
        this.token = token;
    }
    setToken(token) {
        this.token = token;
    }

    async request(url, method = "GET", body = null) {
        const fullUrl = `${this.baseURL}${url}`;
        const options = {
            method,
            headers: { "Content-Type": "application/json" },
        };

        if (this.token) {
            options.headers["Authorization"] = `Bearer ${this.token}`;
        }

        if (body) options.body = JSON.stringify(body);

        const res = await fetch(fullUrl, options);
        const data = await res.json();
        return data;
    }
}
