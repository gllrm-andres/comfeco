import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HeaderComponent } from './layout/main-layout/header/header.component';
import { FooterComponent } from './layout/main-layout/footer/footer.component';
import { NbLayoutModule, NbThemeModule } from '@nebular/theme';
import { SharedModule } from '../shared/shared.module';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [MainLayoutComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    NbLayoutModule,
    NbEvaIconsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    SharedModule,
  ],
  exports: [MainLayoutComponent],
})
export class CoreModule {}
