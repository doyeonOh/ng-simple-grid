export interface NgSimpleGrid {
  columns: GridColumn[],
  option?: GridOption,
  event?: GridEvent
}

export interface GridColumn {
  type: string;
  key: string;
  name: string;
  width: string;
  value?: string;
  nullValue?: string;
  onCustomValue?: (data: any, rowIndex: number, colIndex: number) => string;
  onClick?: (e: any, value: any, index: number, rowData: any) => void;
}


export interface GridOption {
  rowsPerPage?: number;
  emptyMessage?: string;
  emptySubMessage?: string;
}

export interface GridEvent {
  onClickRow: (row: any, index: number) => void;
}