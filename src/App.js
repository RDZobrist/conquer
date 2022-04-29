import React, {lazy} from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
//Pages

const Footer = lazy(()=>import('./components/Footer/Footer.component'));
const Home = lazy(() => import('./screens/Home')); 
const Gallery = lazy(() => import('./screens/Gallery/Gallery.screen'));
const BirthdayParties = lazy(() => import('./screens/BirthdayParties/BirthdayParties.screen'));
const FAQs = lazy(() => import('./screens/FAQ/FAQ.screen'));
const Contact = lazy(() => import('./screens/Contact/Contact.screen'));

function App() {
	return (
		

		<Router>
						<Navbar />

			<GlobalStyle />
			<Switch>
				<Route exact path='/' component={Home } />
				<Route exact path='/gallery' component={Gallery} />

				<Route exact path='/birthday-parties' component={BirthdayParties } />
				<Route exact path='/contact' component={Contact} />
				<Route exact path='/faq' component={FAQs} />
				<Route path='/book-now' component={() => { 
     				   window.location.href = 'https://airmadnesspos.com/airmadness/onlinesales1/tickets1.php'; 
					   return null; 
				}}/>
			</Switch>
			<Footer />

		</Router>
		
	);
}

export default App;
