import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  // @ts-ignore
  form: FormGroup
  categoryFieldOpen:boolean = false
  // @ts-ignore
  existData = JSON.parse(localStorage.getItem("bookmark")) || []
  // @ts-ignore
  categories = JSON.parse(localStorage.getItem("categories")) || []

  @ViewChild('bookmarkForm') bookmarkForm: any

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
        this.form = new FormGroup({
          title: new FormControl(null,
            [Validators.required,Validators.maxLength(30)]
          ),
          url: new FormControl(null,
            [Validators.required,Validators.pattern('(www.)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]
          ),
          category: new FormControl(null),
          new_category: new FormControl(null)
        })
    }

  addCategory() {
    this.categoryFieldOpen = true
  }

  saveBookmark() {
    this.categoryFieldOpen = false
    let bookmark= {
      title : this.form.value.title,
      url : this.form.value.url,
      category : this.form.value.category,
      new_category : this.form.value.new_category
    }
    if(bookmark.category === null){
      bookmark.category = bookmark.new_category
    }
    let data = []

    if(!this.categories.find((x:any)=>x.toLowerCase() === bookmark.category.toLowerCase())){
      this.categories.push(bookmark.category)
    }
    localStorage.setItem("categories",JSON.stringify(this.categories))
    this.existData.push(bookmark)
    localStorage.setItem("bookmark",JSON.stringify(this.existData))
    this.resetForm()
  }

  resetForm() {
    this.form.reset()
    this.bookmarkForm.resetForm()
    window.location.reload();
  }
}

export interface Category{
  title:string,
  url:string,
  category:string
}
