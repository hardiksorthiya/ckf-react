import './App.css';
import Navbar from './componant/Navbar/Navbar';
import Slider from './componant/Home/slider';
import Archivementsection from './componant/Home/archivementsection';
import Empowerment from './componant/Home/empowerment';
import Services from './componant/Home/services';
import ProcessSection from './componant/Home/process';
import Aboutus from './componant/Home/aboutus';

function App() {
  return (
    <>
      <Navbar/>
      <Slider/>
      <Archivementsection/>
      <Empowerment/>
      <Services/>
      <ProcessSection/>
      <Aboutus/>
    </>
  );
}

export default App;
