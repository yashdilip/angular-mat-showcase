import { BrowserModule } from '@angular/platform-browser';

import { MyMaterialModule } from './material.module';


import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCompShowcaseComponent } from './showcase/mat-comp-showcase.component';
import {ErrorComponent} from './error.component';

const appRoutes: Routes = [
  { path: 'customer-create',      component: MatCompShowcaseComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MatCompShowcaseComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MyMaterialModule,
    RouterModule.forRoot(
      appRoutes,
    )    
  ],
  entryComponents: [ErrorComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
