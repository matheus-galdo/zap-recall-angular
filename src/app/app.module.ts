import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PlayComponent } from './pages/play/play.component';
import { CardComponent } from './components/card/card.component';
import { GameFooterComponent } from './components/footer/game-footer.component';
import { GameHeaderComponent } from './components/game-header/game-header.component';
import { CardIconComponent } from './components/card-icon/card-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayComponent,
    CardComponent,
    GameFooterComponent,
    GameHeaderComponent,
    CardIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
