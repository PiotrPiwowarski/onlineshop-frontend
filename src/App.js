import CategoriesBar from './components/CategoriesBar';
import UserBar from './components/UserBar';
import Headbar from './components/Headbar';
import ProductDetails from './components/ProductDetails';
import { useState } from 'react';

const App = () => {

  const [categoriesBarVisibility, setCategoriesBarVisibility] = useState(false);
  const [userBarVisibility, setUserBarVisibility] = useState(false);

	return (
		<div className='application'>
			<Headbar setCategoriesBarVisibility={setCategoriesBarVisibility} setUserBarVisibility={setUserBarVisibility} />
			<div className='main-app-area'>
				<CategoriesBar className={categoriesBarVisibility === true ? 'visible':'hidden'} />
				<ProductDetails />
        <UserBar className={userBarVisibility === true ? 'visible':'hidden'} />
			</div>
		</div>
	);
}

export default App;
