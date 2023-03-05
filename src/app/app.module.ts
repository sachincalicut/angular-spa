import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    ListDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        {path: 'listing', component: ListingComponent},
        {path: 'Detail', component: ListDetailComponent},
        {path: '', redirectTo: '/listing', pathMatch: 'full'},
        {path: '**', component: PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
