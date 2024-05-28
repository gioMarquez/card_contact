import { ReactNode, createContext } from 'react';

//Definir el tipo de datos
type TableData = {
  columns: string[];
  rows: string[][];
}

type DataProviderProps = {
  children: ReactNode;
}

//Proporcionar un valor predeterminado vacío
const defaultData: TableData = {
  columns: [],
  rows: [],
}

// Crear el contexto
export const DataContext = createContext<TableData>(defaultData);

// Proveedor del contexto
export const DataProvider = ({ children }: DataProviderProps) => {
  const data = {
    columns: ["Name", "Email", "Phone"],
    rows: [
      ["John Doe", "john@example.com", "123-456-7890"],
      ["Jane Smith", "jane@example.com", "098-765-4321"],
    ],
  };

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};
