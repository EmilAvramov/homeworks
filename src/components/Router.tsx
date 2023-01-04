import { Routes, Route } from 'react-router-dom';

import Home from './home/Home';
import Weather from './weather/Weather';

const Router = () => {
	return (
		<>
			<Routes>
                <Route path='/' element={<Home />}></Route>
				<Route path='/weather' element={<Weather />}></Route>
			</Routes>
		</>
	);
};

export default Router;