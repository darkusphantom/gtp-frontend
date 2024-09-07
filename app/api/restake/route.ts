/**
 * Fetches operator data from the "/restake/operator-data" endpoint.
 *
 * @param {object} params - The parameters for the fetch request.
 * @return {Promise<object>} A Promise that resolves to the fetched data as an object. If an error occurs, an empty object is returned.
 */
const fetchOperatorData = async (params: object): Promise<any> => {
    try {
        const response = await fetch("/restake/operator-data", {
            method: "GET", // o cualquier otro método HTTP que necesites
            headers: {
                "Content-Type": "application/json", // o cualquier otro tipo de contenido que necesites
            },
        });
        const data = await response.json();

        return data
    } catch (err) {
        console.error(err.response ? err.response.data : err.message)
        return {}
    }
};

/**
 * Fetches staker data from the "/restake/staker-data" endpoint.
 *
 * @param {object} params - The parameters for the fetch request.
 * @return {Promise<object>} A Promise that resolves to the fetched data as an object. If an error occurs, an empty object is returned.
 */
const fetchStakerData = async (params: object): Promise<any> => {
    try {
        const response = await fetch("/restake/staker-data", {
            method: "GET", // o cualquier otro método HTTP que necesites
            headers: {
                "Content-Type": "application/json", // o cualquier otro tipo de contenido que necesites
            },
        });
        const data = await response.json();

        return data
    } catch (err) {
        console.error(err.response ? err.response.data : err.message)
        return {}
    }
};

export { fetchOperatorData, fetchStakerData };