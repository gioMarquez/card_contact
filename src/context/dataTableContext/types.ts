import { ReactNode } from "react";

export type TableData = {
    columns: string[];
    rows: string[][];
  }
  
  export type DataProviderProps = {
    children: ReactNode;
  }
  