import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImageDetailsComponent } from './image-details.component';

@NgModule({
  imports: [ CommonModule, FormsModule,IonicModule,],
  declarations: [ImageDetailsComponent],
  exports: [ImageDetailsComponent]
})
export class ImageDetailsComponentModule {}
