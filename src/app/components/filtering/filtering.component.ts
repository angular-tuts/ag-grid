import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

import data  from '../../../data/data.json'

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss']
})
export class FilteringComponent{

  /**
 * Column definitions is an array of ColDef objects.
 * headerName: The name to render in the column header.
 *              If not specified and field is is specified, the field name would be used as header name
 * field: The field of the row to get the cells data from.
 * sortable: Set to true to allow sorting on this column.
 * filter: 
 *   agNumberColumnFilter - number filter
 *   agTextColumnFilter - text filter
 *   agDateColumnFilter - date filter
 *   boolean - default filter is the agTextColumnFilter in community edition
 *      
 */
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

  

}
