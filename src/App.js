import './App.css';
import i18n from './components/languages/index';
import { useTranslation } from 'react-i18next';
import Router from './Router/Router';
//import MyLandbot from "./components/myLandBot/myLandBot";


/*--------------------------------------------------------------------------------

	# Personal Portfolio 1.0 - Mar 26, 2022
	# ------------------------------------------------------------------------------
	# Designed & coded by Roberto Baca
	# Websites:  http://www.robertobaca.dev -  Email: roberto.nicolas.baca@gmail.com

---------------------------------------------------------------------------------- */

function App() {

  const { t } = useTranslation();

  i18n.options.interpolation.defaultVariables = {
    companyName: 'RNB'
  };

  return (
    <div className="App">  
        {/* <MyLandbot url="https://chats.landbot.io/v3/H-1217146-AFALLR7RKR2GF4P1/index.json" /> */}
       <Router/>     
    </div>
  );
}

export default App;
