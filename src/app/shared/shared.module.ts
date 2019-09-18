import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReUsableOneComponent } from './components/re-usable-one/re-usable-one.component';
import { ReUsableTwoComponent } from './components/re-usable-two/re-usable-two.component';
import { ReUsableDirectiveOneDirective } from './directives/re-usable-directive-one.directive';
import { ReUsablePipeOnePipe } from './pipes/re-usable-pipe-one.pipe';



@NgModule({
  declarations: [ReUsableOneComponent, ReUsableTwoComponent, ReUsableDirectiveOneDirective, ReUsablePipeOnePipe],
  imports: [
    CommonModule
  ],
  exports: [ReUsableOneComponent, ReUsableTwoComponent, ReUsableDirectiveOneDirective, ReUsablePipeOnePipe]
})
export class SharedModule { }
