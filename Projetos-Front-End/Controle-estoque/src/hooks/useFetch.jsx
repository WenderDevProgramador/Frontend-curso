import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [itemId, setItemId] = useState(null);

    const [callFetch, setCallFetch] = useState(false);
    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    const httpConfig = (data, method, id = null) => {
        if (method === 'POST') {
            setConfig({
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            setMethod(method);
        } else if (method === 'DELETE') {
            setConfig({
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setMethod(method);
            setItemId(id);
        } else if (method === 'PUT') {
            setConfig({
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            setMethod(method);
            setItemId(id);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await fetch(url);
                const json = await res.json();
                setData(json);
                setLoading(false);
            } catch (error) {
                console.log(error.message);
                setError('Houve algum erro ao carregar os dados!');
            }
        };

        fetchData();
    }, [url, callFetch]);

    useEffect(() => {
        const httpRequest = async () => {
            let json;

            if (method === 'POST') {
                const res = await fetch(url, config);
                json = await res.json();
            } else if (method === 'DELETE') {
                const deleteUrl = `${url}/${itemId}`;
                await fetch(deleteUrl, config);
                json = {};
            } else if (method === 'PUT') {
                const updateUrl = `${url}/${itemId}`;
                const res = await fetch(updateUrl, config);
                json = await res.json();
            }

            setCallFetch((prev) => !prev);
        };

        if (method) {
            httpRequest();
        }
    }, [config, method, url, itemId]);

    return { data, httpConfig, loading, error };
};
