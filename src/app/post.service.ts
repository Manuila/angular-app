import { Injectable } from '@angular/core';
import { Post } from './post.model';


@Injectable()
export class PostService {
  private data: Post[] = [
    { id: 1, title: 'title1', description: 'description1', done: false },
    { id: 2, title: 'title2', description: 'description2', done: true }
  ];

  getAllPosts(): Post[] {
    return this.data;
  }

  addPost(name: string, description: string): Post[] {
    if (name == null || name.trim() === '') {
      return;
    }
    this.data.unshift(new Post(name, description));
    return this.data;
  }

  removePost(id: number): Post[] {
    this.data = this.data.filter(post => post.id !== id);
    return this.data;
  }

  updatePost(updatedPost): Post[] {
    const index = this.data.findIndex(post => post.id === updatedPost.id);
    this.data[index] = updatedPost;
    return this.data;
  }
}
