export class User {
  constructor({ id, email, username }) {
    this.id = id;
    this.email = email;
    this.username = username || "";
  }

  static fromApi(data) {
    return new User({
      id: data.id,
      email: data.email,
      username: data.username,
    });
  }
}
