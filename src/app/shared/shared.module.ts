import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavbarComponent, SvgIconComponent],
  imports: [CommonModule, TranslateModule],
  exports: [TranslateModule, HeaderComponent, FooterComponent, NavbarComponent],
})
export class SharedModule {}
