import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header/header-component/header-component.component';
import { VideolistComponentComponent } from './videolist/videolist-component/videolist-component.component';
import { VideocardComponentComponent } from './videolist/videocard-component/videocard-component.component';
import { SidebarComponentComponent } from './sidebar/sidebar-component/sidebar-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    VideolistComponentComponent,
    VideocardComponentComponent,
    SidebarComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
