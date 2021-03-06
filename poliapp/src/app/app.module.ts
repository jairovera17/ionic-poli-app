import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QuestionarioPage } from '../pages/questionario/questionario';
import { ListMasterPage } from '../pages/list-master/list-master';
import { ProvItemsProvider } from '../providers/prov-items/prov-items';
import { JuegoPage } from '../pages/juego/juego';
import { PuntuacionPage } from '../pages/puntuacion/puntuacion';
import { QuestProvider } from '../providers/quest/quest';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    QuestionarioPage,
    ListMasterPage,
    JuegoPage,
    PuntuacionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    QuestionarioPage,
    TabsPage,
    ListMasterPage,
    JuegoPage,
    PuntuacionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProvItemsProvider,
    QuestProvider
  ]
})
export class AppModule {}
