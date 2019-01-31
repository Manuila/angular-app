import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Post } from './post.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PostService]
})
export class AppComponent implements OnInit {
  modalRef: BsModalRef;
  posts: Post[] = [];
  post: Post;
  id: number;
  title: string;
  description: string;

  constructor(private postService: PostService, private modalService: BsModalService) { }

  ngOnInit() {
    this.posts = this.postService.getAllPosts();
  }

  addPost(name: string, description: string) {
    this.postService.addPost(name, description);
    this.closeModal();
  }

  removePost(id: number) {
    this.posts = this.postService.removePost(id);
    this.closeModal();
  }

  editPost(post: Post, title: string, description: string) {
    post.title = title;
    post.description = description;
    this.posts = this.postService.updatePost(post);
    this.closeModal();
  }

  openAddForm(template: TemplateRef<any>) {
    this.title = '';
    this.description = '';
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    this.modalRef.hide();
    this.modalRef = null;
  }

  openEditForm(post: Post, template: TemplateRef<any>) {
    this.post = post;
    this.title = post.title;
    this.description = post.description;
    this.modalRef = this.modalService.show(template);
  }

  openDeleteForm(id: number, template: TemplateRef<any>) {
    this.id = id;
    this.modalRef = this.modalService.show(template);
  }
}
