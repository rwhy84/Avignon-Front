import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { blog } from '../models/blog.model';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-etablissement',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blog: blog;
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map((params) => params.get('id')),
        switchMap((id) => this.blogService.find(id))
      )
      .subscribe(
        (blog) => {
          this.blog = blog;

        },
        (error) => {
          this.errorMessage = "L'article demandé n'existe pas";
        }
      );
  }

}
