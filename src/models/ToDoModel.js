export class Todo {
  constructor({ id, text, completed }) {
    this.id = id;
    this.text = text;
    this.completed = completed || false;
  }

  static fromApi(data) {
    return new Todo({
      id: data.id,
      text: data.text,
      completed: data.completed,
    });
  }
}
