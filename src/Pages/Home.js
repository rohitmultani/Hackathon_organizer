import { Fragment } from 'react';
import AiChallenges from '../Components/AiChallenges';
import DisplayCards from '../Components/DisplayCards';
import Filter from '../Components/Filter';
import HomeCatalogue from '../Components/HomeCatalogue';
import HomeSlide from '../Components/HomeSlide';
import NavBar from '../Components/NavBar';

const Home=()=> {
  return (
    <Fragment>
      <NavBar></NavBar>
      <HomeSlide/>
      <HomeCatalogue/>
      <AiChallenges/>
      <Filter/>
      <DisplayCards/> 
    </Fragment>
  );
}

export default Home;
