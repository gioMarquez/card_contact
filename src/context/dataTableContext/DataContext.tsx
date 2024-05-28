import { createContext, useEffect, useState } from 'react';
import { DataProviderProps, TableData } from './types';

// Crear el contexto
export const DataContext = createContext<TableData | null>(null);

// Proveedor del contexto
export const DataProvider = ({ children }: DataProviderProps) => {
  const [data, setData] = useState<TableData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //Simulación de una consulta asíncrona que tarda 1 segundo
        await new Promise ((resolve) => setTimeout(resolve, 1000));

        //Una vez que la consulta asíncrona se complea, establecemos los datos en el estado
        setData({
          columns: ["Name", "Email", "Phone"],
          rows: [
            ["John Doe", "john@example.com", "123-456-7890"],
            ["Jane Smith", "jane@example.com", "098-765-4321"],
            ["Alice Johnson", "alice@example.com", "234-567-8901"],
            ["Bob Brown", "bob@example.com", "345-678-9012"],
            ["Charlie Davis", "charlie@example.com", "456-789-0123"],
            ["Dana Evans", "dana@example.com", "567-890-1234"],
            ["Evan Foster", "evan@example.com", "678-901-2345"],
            ["Fay Green", "fay@example.com", "789-012-3456"],
            ["George Harris", "george@example.com", "890-123-4567"],
            ["Holly Irving", "holly@example.com", "901-234-5678"],
            ["Ivan Jones", "ivan@example.com", "012-345-6789"],
            ["Jill King", "jill@example.com", "123-456-7891"],
            ["Kyle Lee", "kyle@example.com", "234-567-8902"],
            ["Laura Moore", "laura@example.com", "345-678-9013"],
            ["Mike Nolan", "mike@example.com", "456-789-0124"],
            ["Nina Owens", "nina@example.com", "567-890-1235"],
          ],
        });
      } catch (error) {
        console.error("Error al obtener los datos: ", error)
      }
    };

    fetchData();
  }, [])


  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};
