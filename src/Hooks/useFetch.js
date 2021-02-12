import {useEffect, useState} from "react";

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(false);
	
	useEffect(() => {
		(async () => {
			try {
				setIsPending(true);
				const res = await fetch(url);
				const data = await res.json();
				setData(data);
				setIsPending(false);
			} catch (e) {
				console.log(e);
			}
		})();
	}, [url]);
	return {data, isPending};
};

export default useFetch;