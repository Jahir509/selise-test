import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookmarkComponent} from "./bookmark/bookmark.component";
import {AppComponent} from "./app.component";
import {ErrorComponent} from "./error/error.component";

const routes: Routes = [
  {
    path:'bookmark/:url',
    component:BookmarkComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
