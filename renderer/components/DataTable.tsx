import React, { useEffect, useState } from 'react';

interface Column<T> {
  key: keyof T;
  header: string;
}

interface ApiResponse<T> {
  response_code: number;
  code: string;
  message: string;
  link_download: string;
  total_data: number;
  data: T[];
}

interface DataTableProps<T> {
  columns: Column<T>[];
  apiUrl: string;
  token: string;
}

const DataTable = <T extends Record<string, any>>({ columns, apiUrl, token }: DataTableProps<T>): JSX.Element => {
  const [data, setData] = useState<T[]>([]);
  const [filteredData, setFilteredData] = useState<T[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterKey, setFilterKey] = useState<keyof T | ''>('');
  const [rowsToShow, setRowsToShow] = useState<number>(10);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          apiUrl,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result: ApiResponse<T> = await response.json();

        if (Array.isArray(result.data)) {
          setData(result.data);
          setFilteredData(result.data);
        } else {
          throw new Error('API response data is not an array');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  useEffect(() => {
    let filtered = data;

    if (searchTerm) {
      filtered = data.filter((item) =>
        filterKey
          ? item[filterKey]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
          : Object.values(item).some((val) =>
              val?.toString().toLowerCase().includes(searchTerm.toLowerCase())
            )
      );
    }

    setFilteredData(filtered);
  }, [searchTerm, filterKey, data]);

  const displayedData = rowsToShow === -1 ? filteredData : filteredData.slice(0, rowsToShow);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <select
          value={filterKey as string}
          onChange={(e) => setFilterKey(e.target.value as keyof T | '')}
          style={{ marginRight: '10px' }}
        >
          <option value="">All</option>
          {columns.map((col) => (
            <option key={col.key as string} value={col.key as string}>
              {col.header}
            </option>
          ))}
        </select>
        <select
          value={rowsToShow}
          onChange={(e) => setRowsToShow(Number(e.target.value))}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
          <option value={200}>200</option>
          <option value={-1}>All</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key as string}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayedData.map((row, index) => (
            <tr key={index}>
              {columns.map((col) => (
                <td key={col.key as string}>{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
