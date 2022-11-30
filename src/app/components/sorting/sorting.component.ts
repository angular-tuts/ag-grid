import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

import data  from '../../../data/data.json'

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent implements OnInit {
/**
 * Column definitions is an array of ColDef objects.
 * headerName: The name to render in the column header.
 *              If not specified and field is is specified, the field name would be used as header name
 * field: The field of the row to get the cells data from.
 * sortable: Set to true to allow sorting on this column.
 */

columnDefs: ColDef[] = [
  { headerName: 'Name', field: 'name', sortable: true},
  { headerName: 'Catch Phrase', field: 'catchPhrase', sortable: true}
];

rowData: Array<{[key: string]: string | number | object}> = data.customers;

  constructor() { }

  ngOnInit(): void {
    
  }

}
