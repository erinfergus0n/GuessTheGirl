import React from 'react';
import '../App.css';
import Footer from '../components/footer';
import NavigationBar from '../components/NavBar';
import ConstructionPage from '../components/construction';

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