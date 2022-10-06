import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "./dialog/dialog.component";
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})




export class AppComponent implements OnInit{
  // @ts-ignore
  category = JSON.parse(localStorage.getItem("categories")) || []
  // @ts-ignore
  bookmarks = JSON.parse(localStorage.getItem("bookmark")) || []

  title = 'selise-test';
  cat: any[] = []
  showData: any = {}
  timer:any
  constructor(public dialog: MatDialog,private router:Router) {
  }
  openDialog() {
      const dialogRef = this.dialog.open(DialogComponent);

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
  }

  ngOnInit(): void {

    // if(this.bookmarks.length > 0){
    //   this.category.for
    // }


    this.category.forEach((d:any)=>{
      let obj:any = {}
      obj.type=d
      obj.data= this.bookmarks.filter((x:any)=> x.category.toLowerCase() === d.toLowerCase())
      this.cat.push(obj)
    })
  }

  showDetails(data: any) {
    this.showData.title = data.title
    this.showData.url = data.url
    this.showData.category = data.category
  }

  goToLink(url:string) {
     this.timer = setTimeout(() => {
       this.router.navigateByUrl(`bookmark/${url}`)
    }, 3000);
  }

  // stopDoing(url:string) {
    // console.log("Close")
    // this.timer = setTimeout(() => {
    //   this.router.navigateByUrl(`bookmark/${url}`)
    // }, 3000);
  // }
}




export interface Category{
  name: string
  url: string
  type: string
}
