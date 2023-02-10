import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Article } from './article.model';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input()
  article!: Article; 
  constructor() {
    
  }

  ngOnInit(): void {}

  voteUp(): boolean {
    this.article.voteUp();
    return false; //This tells the browswer to no progate this event to his parent
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }
}
