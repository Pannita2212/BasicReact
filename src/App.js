import './App.css';
import Header from './component/Header';
import Content from './component/Content';
import Modal from './component/Modal';
import imgs from './data/imgs';
import { useState } from 'react';
import Search from './component/Search';


function App() {
  const [selected, setSelected] = useState(null);
  const [searchTxt, setSearchTxt] = useState('');

  function onImgOpenClick(theImg) {
    setSelected(theImg);
  }
  function onImgCloseClick() {
    setSelected(null)
  }

  const filterImgs = imgs.filter((img) => {
    // console.log(img.title, searchTxt, img.title.includes(searchTxt))
    
    return img.title.toLowerCase().includes(searchTxt);
  })
  
  const elements = filterImgs.map((img, index) => {
    return <Content key={index} img={img} onImgOpenClick={onImgOpenClick} />
  })

  let modal = null
  if (!!selected) {
    modal = <Modal img={selected} onBgClick={onImgCloseClick} />
  }

  return (
    <div className="App">
      <Header />
      <section className="app-section">
        <div className="app-container">
          <Search value={searchTxt} onValChange={setSearchTxt}/>
          <div className="app-grid">
            {elements}
          </div>
        </div>
      </section>
      {modal}
    </div>
  );
}

export default App;
