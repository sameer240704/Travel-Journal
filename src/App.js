import Header from './Header';
import Info from './Info';
import InfoDisplay from './InfoDisplay';
import './App.css';

function App() {
  const renderElements = Info.map(item => {
    return (
        <InfoDisplay 
          key = {item.id}
          {...item}
        />
    )
  })

  return (
    <>
      <Header />
      <div className='render'>
        {renderElements}
      </div>
    </>
  );
}

export default App;
