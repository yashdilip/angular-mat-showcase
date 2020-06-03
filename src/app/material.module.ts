import { NgModule } from '@angular/core';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({

  imports: [ 
    MatTabsModule,
    MatDividerModule, 
    MatSliderModule,
    MatSelectModule, 
    MatRadioModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatIconModule, 
    MatDialogModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSortModule,
    MatTableModule, 
    MatTabsModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule, 
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatPaginatorModule,
    MatNativeDateModule
  ],
  exports: [ 
    MatTabsModule,
    MatDividerModule, 
    MatSliderModule,
    MatSelectModule, 
    MatRadioModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatIconModule, 
    MatDialogModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSortModule,
    MatTableModule, 
    MatTabsModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule, 
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatPaginatorModule,
    MatNativeDateModule
  ]
})
export class MyMaterialModule { }