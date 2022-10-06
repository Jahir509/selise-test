import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }
  data:any = {}
  ngOnInit(): void {
    this.router.url.subscribe((url)=>{
      // @ts-ignore
      this.data = JSON.parse(localStorage.getItem("bookmark")).filter(x=>x.url === url[1].path)[0]
    })

  }

}
