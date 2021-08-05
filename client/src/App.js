// layouts
import Hero from './layouts/Hero';
import Services from './layouts/Services';
import Pricing from './layouts/Pricing';
import Testimonial from './layouts/Testimonial';
import Companies from './layouts/Companies';
import Contact from './layouts/Contact';
import Footer from './layouts/Footer';

import './App.css';

function App() {
	return (
		<div className="App">
			<Hero />
			<Services />
			<Pricing />
			<Testimonial />
			<Companies />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
