export class Post {
  id: number;
  title: string;
  description: string;
  done: boolean;

  constructor(title: string, description: string) {
    this.id = Date.now();
    this.title = title;
    this.description = description;
    this.done = false;
  }
}
