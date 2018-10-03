import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {CorsiModule} from './corsi/corsi.module';
import {StudentiModule} from './studenti/studenti.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuleModule } from './aule/aule.module';
import { DocentiModule } from './docenti/docenti.module';
import { StarModule } from './shared/star.module';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    CorsiModule, StudentiModule, AuleModule, DocentiModule, StarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
