import React from 'react';
import './CreatorInfo.css';

const Creators = () => {

  const creatorDetails = [
    { name: "Nesrin", country: "England", topArtist: "Halsey", favouriteHobby: "Reading", starsign: "Taurus", funFact: "I can speak three languages." },
    { name: "Annie", country: "Scotland", topArtist: "Gracie Abrams", favouriteHobby: "Baking", starsign: "Sagittarius", funFact: "I'm ambidextrous."},
    { name: "Erin", country: "Scotland", topArtist: "Chappell Roan", favouriteHobby: "Music", starsign: "Taurus", funFact: "I have a 970 day Duolingo streak."},
    { name: "Sruti", country: "England", topArtist: "Doja Cat", favouriteHobby: "Duolingo", starsign: "Sagittarius", funFact:"I used to work at Legoland."},
    { name: "Joanna", country: "Northern Ireland", topArtist: "Rihanna", favouriteHobby: "Horse riding", starsign: "Taurus", funFact: "I have 2 houses and 2 dogs." },
    { name: "Laura", country: "UK", topArtist: "Chappell Roan", favouriteHobby: "Swimming", starsign: "Capricorn", funFact: "I have 104 vinyl records." }
  ];

  return ( 
    <div>
  <div className="creators-container"> 
  <div className="titles-row"> 
    <div className="title">Name</div> 
    <div className="title">Country</div> 
    <div className="title">Top Artist</div> 
    <div className="title">Hobby</div> 
    <div className="title">Star sign</div> 
    <div className="title">Fun Fact</div> 
    </div> 
    {creatorDetails.map((creator, index) => ( 
      <div key={index} className="creator-row"> 
      <div className="creator-info">{creator.name}</div> 
      <div className="creator-info">{creator.country}</div> 
      <div className="creator-info">{creator.topArtist}</div> 
      <div className="creator-info">{creator.favouriteHobby}</div> 
      <div className="creator-info">{creator.starsign}</div> 
      <div className="creator-info">{creator.funFact}</div> 
      </div> 
      ))} 
      </div> </div>
      ); 
    }; 
    
    export default Creators