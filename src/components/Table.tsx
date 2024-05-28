import { useContext } from 'react';
import { DataContext } from '../context/dataTableContext/DataContext';

const Table = () => {
  const data = useContext(DataContext);

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
