import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/r-color';
import StarRating from './components/start';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-button';
import TreeView from './components/navbar';
import menus from './components/navbar/data';
import QrcodeGenerator from './components/qr-code';

function App() {
  return (
    <div className="App">
      {/* <Accordian/> */}
      {/* <RandomColor/> */}
      {/* <StarRating noOfStars={10}/> */}
      {/* <ImageSlider 
      url={'https://picsum.photos/v2/list'} 
      page={1} limit={'10'}/> */}
      {/* <LoadMoreData/> */}
      {/* <TreeView menus={menus}/> */}
      <QrcodeGenerator/>
    </div>
  );
}

export default App;
