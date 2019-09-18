import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faHome, faInfo, faBars } from '@fortawesome/free-solid-svg-icons';


const FA_ICONS = [
  faHome, faInfo, faBars
];

const FA_ICON_PACKS = [];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [FontAwesomeModule]
})
export class SharedModule {
  constructor(faLibrary: FaIconLibrary) {
    faLibrary.addIconPacks(...FA_ICON_PACKS);
    faLibrary.addIcons(...FA_ICONS);
  }
}
