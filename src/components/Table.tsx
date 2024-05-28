import { useData } from "../context/dataTableContext/useData";

const Table = () => {
  const data = useData();

   // Verificar si data es null antes de acceder a sus propiedades
   if (!data) {
    return <div className="text-2xl text-blue-800 flex justify-center pt-24">Cargando...</div>; // O cualquier otro indicador de carga que desees mostrar
  }

  return (
    <div className='overflow-x-auto'>
        <table className='min-w-full'>
            <thead>
                <tr>
                    {data.columns.map((column, index) => (
                        <th key={index} className='py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700'>
                            {column}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex} className='py-2 px-4 border-b border-gray-200 text-sm'>
                                {cell}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table;
