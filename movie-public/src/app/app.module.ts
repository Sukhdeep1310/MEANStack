import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeListComponent } from './home-list/home-list.component';
import {HttpClientModule} from "@angular/common/http";
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FrameworkComponent } from './framework/framework.component';
import {APP_BASE_HREF} from "@angular/common";
import {RouterModule} from "@angular/router";
import { CreateComponent } from './create/create.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import {createComponent} from "@angular/compiler/src/core";
import { FormsModule } from "@angular/forms";
import { IntroPageComponent } from './intro-page/intro-page.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    HomeListComponent,
    AboutComponent,
    HomepageComponent,
    HeaderComponent,
    FrameworkComponent,
    CreateComponent,
    DetailsPageComponent,
    IntroPageComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: IntroPageComponent
      },
      {
        path: 'list',
        component: HomepageComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'update/:movieid',
        component: UpdateComponent
      },
      {
        path: 'movie/:movieid',
        component: DetailsPageComponent
      }
    ])
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
