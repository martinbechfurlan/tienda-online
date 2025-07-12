import { useState, useEffect } from 'react';

export default function useMockFetch(dataSource) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos una carga con delay
    const timer = setTimeout(() => {
      setData(dataSource);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [dataSource]);

  return { data, loading };
}
