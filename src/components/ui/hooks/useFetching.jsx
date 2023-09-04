import React, { useState } from "react";

const useFetching = (callback) => {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const fetching = async () => {
        try {
            setLoading(true);
            await callback();
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    }

    return [fetching, loading, error];
};

export default useFetching;