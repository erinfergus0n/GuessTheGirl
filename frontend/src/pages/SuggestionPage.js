import React from 'react';
import '../App.css';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';
import ConstructionPage from '../components/ConstructionPage';

const SuggestionPage = () => {

    return(
        <div>
              <NavigationBar />
              <br>
             </br>
             <br>
             </br>
            <div className="app_header">Suggest an Artist</div>
            <ConstructionPage />
            <Footer />
        </div>
    ) 
}

export default SuggestionPage;