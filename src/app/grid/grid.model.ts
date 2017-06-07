export interface Grid {
  columns: GridColumn[],
  option: GridOption,
  event: GridEvent
}

export interface GridColumn {
  type: string;
  key: string;
  name: string;
  width: string;
  value?: string;
  onClick?: (e: any, value: any, data: any, index: number) => void;
}


export interface GridOption {
  rowsPerPage: number;
  noDataMessage?: string;
  noDataMessageSub?: string;
}

export interface GridEvent {
  onClickRow: (row: any, index: number) => void;
}