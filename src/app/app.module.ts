import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './components/home/home.component';
import {EditDialogComponent} from './dialogs/edit-dialog/edit-dialog.component';
import {YesNoDialogComponent} from './dialogs/yes-no-dialog/yes-no-dialog.component';
import {AddDialogComponent} from './dialogs/add-dialog/add-dialog.component';
import {MaterialModule} from './shared/material.module';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditDialogComponent,
    YesNoDialogComponent,
    AddDialogComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule,
    BrowserAnimationsModule

  ],
  providers: [],
  entryComponents: [EditDialogComponent, YesNoDialogComponent, AddDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
