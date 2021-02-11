import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HeaderComponent } from './layout/main-layout/header/header.component';
import { FooterComponent } from './layout/main-layout/footer/footer.component';
import { NbLayoutModule, NbThemeModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [MainLayoutComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbThemeModule.forRoot({ name: 'default' }),
  ],
  exports: [MainLayoutComponent],
})
export class CoreModule {}
