import { Component, HostBinding, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';

  article: Article;

  constructor() {
    this.article = new Article('Angular', 'http://angular.io', 10);
  }

  ngOnInit(): void {}

  voteUp() : boolean {
    this.article.voteUp();
    return false;  //This tells the browswer to no progate this event to his parent
  }

  voteDown() : boolean {
    this.article.voteDown();
    return false;
  }
}
