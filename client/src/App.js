
import './App.css';
import About from './components/About/About';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Tokenomics from './components/Tokenomics/Tokenomics';
function App() {
  return (
    <div className='  scroll-smooth bg-[#067c25] flex flex-col justify-center  gap-4'>
   <Home/>
   <div className='  font-medium py-3 bg-white text-black'>
   <marquee >
    <div className='flex justify-between gap-5'>
      <div>BUY $UNO PEPE</div>
      <div>BUY $UNO PEPE</div>
      <div>BUY $UNO PEPE</div>
      <div>BUY $UNO PEPE</div>
      <div>BUY $UNO PEPE</div>
     
    </div>
   </marquee>
   </div>
   <About/>
   <div className='bg-white '>
    <Body/>
   </div>
   <Tokenomics/>
    <Footer/>
    </div>
  );
}

export default App;
