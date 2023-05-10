import { Component } from '@angular/core';
import { ITariffs } from './tariffs';
import { ApiHttpService } from '../../services/api-http.service';

@Component({
  selector: 'app-tariffs',
  templateUrl: './tariffs.component.html',
  styleUrls: ['./tariffs.component.scss'],
  providers: [ApiHttpService],
})
export class TariffsComponent {
  tariffsList: Array<ITariffs> = [];
  tariffsListSorted: Array<ITariffs> = this.tariffsList;

  sort = ['name', 'download', 'upload', 'price'];
  orderby = ['ASC', 'DESC'];
  selectedtype: keyof ITariffs = 'name';
  selectedorder: string = 'ASC';
  constructor(private ApiHttpService: ApiHttpService) {}

  getTariffs(): void {
    this.ApiHttpService.getTariffs().subscribe((tariffs) => {
      this.tariffsList = tariffs;
      this.tariffsListSorted = tariffs;
    });
  }

  sortdata(type: keyof ITariffs, order: string) {
    if (order === 'ASC') {
      this.tariffsList.sort((a, b) => 0 - (a[type] > b[type] ? -1 : 1));
    } else {
      this.tariffsList.sort((a, b) => 0 - (a[type] > b[type] ? 1 : -1));
    }
  }
  ngOnInit(): void {
    this.getTariffs();
  }
}
