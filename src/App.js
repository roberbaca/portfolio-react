import './App.css';
import LanguageSelector from './components/LanguageSelector/LanguageSelector';
import i18n from './languages';
import { useTranslation } from 'react-i18next';
import Router from './Router/Router';

/*--------------------------------------------------------------------------------

	# Personal Portfolio 1.0 - Mar 11, 2022
	# ------------------------------------------------------------------------------
	# Designed & coded by Roberto Baca
	# Websites:  http://www.robertobaca.dev -  Email: roberto.nicolas.baca@gmail.com

---------------------------------------------------------------------------------- */

//npm install react-icons
//https://react-icons.github.io/react-icons

function App() {

  const { t } = useTranslation();

  i18n.options.interpolation.defaultVariables = {
    companyName: 'RNB'
  };

  return (
    <div className="App">
      {/* <LanguageSelector/> */}
       <Router/>     
    </div>
  );
}

export default App;
