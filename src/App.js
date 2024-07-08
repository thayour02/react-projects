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
import Theme from './components/themes';
import ScrollIndicator from './components/scrollBar';
import TabText from './components/custom-tab/tab-text';
import ModalTest from './components/custom-modal/modal-test';
import GitHubProfileFinder from './components/profile-finder';
import SearchAuto from './components/search-autocomplete';
import TicTacToe from './components/tic-tac';

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
      {/* <QrcodeGenerator/> */}
      {/* <Theme/> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}
      {/* <TabText /> */}
      {/* <ModalTest/> */}
      {/* <GitHubProfileFinder/> */}
      {/* <SearchAuto/> */}
      <TicTacToe/>
    </div>
  );
}

export default App;
