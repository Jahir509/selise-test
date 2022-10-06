import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import { BookmarkComponent } from './bookmark/bookmark.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    BookmarkComponent,
    ErrorComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatTooltipModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
