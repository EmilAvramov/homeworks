import { useEffect, useState } from 'react';
import axios from 'axios';

const useWeatherData = () => {
	const [city, setCity] = useState<string>('');
	const [data, setData] = useState([]);
	const [error, setError] = useState<string | null>(null);

	const sendCity = (city: string) => {
		setCity(city);
	};

	useEffect(() => {
		const getData = () => {
			axios
				.post('localhost:3000/weather', {
					headers: {
						'content-type': 'application/json',
						'accept': 'application/json',
					},
					data: {
						city,
					},
				})
				.then((res: any) => {
					console.log(res);
					setData(res.data);
					setError(null);
				})
				.catch((err: string) => {
					setError(err);
				});
		};
		getData();
	}, [city]);

	return { data, error, sendCity };
};

export default useWeatherData;
