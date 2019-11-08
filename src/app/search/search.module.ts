import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { FilterComponent } from './components/filter/filter.component';
import { ResultComponent } from './components/result/result.component';
import { SearchComponent } from './container/search.component';

const components = [SearchComponent, FilterComponent, ResultComponent];
const matModules = [MatCardModule, MatInputModule];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    ...matModules,
    RouterModule.forChild([{ path: '', component: SearchComponent }])
  ]
})
export class SearchModule {}
