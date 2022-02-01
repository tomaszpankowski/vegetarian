import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from './about/about.module';
import { BlogModule } from './blog/blog.module';
import { ContactModule } from './contact/contact.module';
import { ErrorModule } from './error/error.module';
import { EventModule } from './event/event.module';
import { FooterComponent } from './footer/footer.component';
import { GalleryModule } from './gallery/gallery.module';
import { HomeModule } from './home/home.module';
import { NavbarComponent } from './navbar/navbar.component';
import { PrivacyModule } from './privacy/privacy.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    BlogModule,
    ContactModule,
    EventModule,
    GalleryModule,
    HomeModule,
    PrivacyModule,
    UserModule,
    ErrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
