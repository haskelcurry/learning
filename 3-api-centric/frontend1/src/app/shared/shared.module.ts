import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

@NgModule({
  exports: [CommonModule, HttpClientModule]
})
export class SharedModule {}
