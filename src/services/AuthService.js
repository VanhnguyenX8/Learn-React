import { BaseNetwork } from "../network/BaseNetWork";
import { User } from "../models/UserModel";

const network = new BaseNetwork("https://www.vanhnguyenx8.com/api/");

export async function login(email, password) {
    const data = await network.request("auth/login", "POST", { email, password });
    if (data.data.token) network.setToken(data.data.token);
    console.log("Login response data:", data.data.user);
const user = User.fromApi(data.data.user);
    return {user, token: data.data.token};
}
