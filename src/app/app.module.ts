import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { PartnersSectionComponent } from './partners-section/partners-section.component';
import { LogoSvgComponent } from './svgs/logo/logo-svg.component';
import { ConversionLabsLogoSvgComponent } from './svgs/conversion-labs-logo/conversion-labs-logo-svg.component';
import { VshredLogoSvgComponent } from './svgs/vshred-logo/vshred-logo-svg.component';
import { PhiloroLogoSvgComponent } from './svgs/philoro-logo/philoro-logo-svg.component';
import { ChevronSvgComponent } from './svgs/chevron/chevron-svg.component';
import { HeroPictureComponent } from './pictures/hero-picture/hero-picture.component';
import { DevicesBurgerComponent } from './header/devices-burger/devices-burger.component';
import { DevicesButtonsComponent } from './hero-section/devices-buttons/devices-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    HeaderComponent,
    ButtonComponent,
    PartnersSectionComponent,
    LogoSvgComponent,
    ConversionLabsLogoSvgComponent,
    VshredLogoSvgComponent,
    PhiloroLogoSvgComponent,
    ChevronSvgComponent,
    HeroPictureComponent,
    DevicesBurgerComponent,
    DevicesButtonsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
