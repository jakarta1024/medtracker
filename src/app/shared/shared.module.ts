import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavibarComponent } from './navibar/navibar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SidebarComponent, NavibarComponent]
})
export class SharedModule { }
