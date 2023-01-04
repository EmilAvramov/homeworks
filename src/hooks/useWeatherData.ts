import { useEffect, useState } from 'react';
import axios from 'axios';

interface IData {
	temperature: string;
}

const useWeatherData = () => {
	const [city, setCity] = useState<string>('');
	const [data, setData] = useState<IData | null>(null);
	const [error, setError] = useState<string | null>(null);

	const sendCity = (city: string) => {
		setCity(city);
	};

	useEffect(() => {
		const getData = () => {
			if (city) {
				axios
					.post('http://localhost:3000/weather', {
						headers: {
							'content-type': 'application/json',
							accept: 'application/json',
						},
						data: {
							city,
						},
					})
					.then((res: any) => {
						setData(res.data);
						setError(null);
					})
					.catch((err: string) => {
						setError(err);
					});
			}
		};
		getData();
	}, [city]);

	return { data, error, sendCity };
};

export default useWeatherData;
