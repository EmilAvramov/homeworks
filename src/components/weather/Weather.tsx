import useWeatherData from '../../hooks/useWeatherData';
import { useForm } from 'react-hook-form';

const Weather = () => {
	const { data, error, sendCity } = useWeatherData();

	const { register, handleSubmit } = useForm();

	const submitForm = (data: any) => {
		sendCity(data.city);
	};

	return (
		<main>
			<form onSubmit={handleSubmit(submitForm)}>
				<label htmlFor='city'>Select a city:</label>
				<select {...register('city')}>
					<option value='sofia'>Sofia</option>
					<option value='varna'>Varna</option>
					<option value='bourgas'>Bourgas</option>
					<option value='plovdiv'>Plovdiv</option>
				</select>
				<input type='submit' />
			</form>
            {data && <p>{data}</p>}
		</main>
	);
};

export default Weather;
