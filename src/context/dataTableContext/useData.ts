import { useContext } from 'react';
import { DataContext } from './DataContext';

//Hook personalizado para acceder al contexto de los datos
export const useData = () => useContext(DataContext)!;

// Ejemplo de uso:
// Dentro de cualquier componente hijo del DataProvider, puedes usar el hook useData para acceder a los datos
// const data = useData();
// Luego puedes renderizar los datos en tu componente según sea necesario