import { Component, OnInit } from '@angular/core';
import { ColDef, GridApi } from 'ag-grid-community';


import data  from '../../../data/data.json'


@Component({
  selector: 'app-column-api',
  templateUrl: './column-api.component.html',
  styleUrls: ['./column-api.component.scss']
})
export class ColumnApiComponent implements OnInit {

  
  gridApi!: GridApi;;


  columnDefs: ColDef[] = [
    { headerName: 'Name', field: 'name', sortable: true, filter: true },
    { headerName: 'Price', field: 'price', sortable: true, filter: 'agNumberColumnFilter' },
    { headerName: 'Color', field: 'color' },
    { headerName: 'Details', field: 'details'}
  ];


  rowData: Array<{[key: string]: string | number | object}> = data.products.map(
    ( {name, price, color, details }) => ({
      name,
      price: Number(price),
      color,
      details
    })
  )

 

  constructor() {
  
   }

  ngOnInit(): void {
  
  }

  onGridReady({ api }: { api: GridApi}): void  {
    this.gridApi = api;
    api.sizeColumnsToFit()
    
  }

  onDeselectAll(): void {
    this.gridApi.deselectAll()
  }

  onExportToCsv(): void {
    this.gridApi.exportDataAsCsv()
  }

  onSortByNameAndPrice(sort: 'asc' | 'desc'): void {
    this.gridApi.setFilterModel([])
  }

}
