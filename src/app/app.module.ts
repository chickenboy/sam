import { UserDataSourceService } from './user-data-source.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { HttpModule } from '@angular/http';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';


import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FollowerComponent } from './follower/follower.component';
import { LstProdutTypeComponent } from './lst-produt-type/lst-produt-type.component';

import { SliderModule } from 'angular-image-slider';
import { ImageZoomModule } from 'angular2-image-zoom';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    MenuComponentComponent,
    HomeComponent,
    AboutComponent,
    FollowerComponent,
    LstProdutTypeComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatTableModule,
    HttpModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule.forRoot([
      { path : '', component : HomeComponent},
      { path : 'about', component : AboutComponent},
      { path : 'follower', component : FollowerComponent},
      { path : 'detail', component : ProductDetailComponent}
    ]),
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    SliderModule,
    MatGridListModule,
    MatInputModule,
    ImageZoomModule,
  ],
  providers: [
    UserDataSourceService
  ],
  bootstrap: [AppComponent]
})


export class AppModule {
}


