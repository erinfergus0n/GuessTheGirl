import React from 'react';
import '../App.css';
import Footer from '../components/footer';
import NavigationBar from '../components/NavBar';
import ConstructionPage from '../components/construction';

const StatsPage = () => {

    return(
        <div>
             <NavigationBar />
             <br>
             </br>
             <br>
             </br>
             <div className="app_header">Statistics</div>
             <ConstructionPage />
             <Footer />
        </div>
    )
}

export default StatsPage;