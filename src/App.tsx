import OIPImage from '../public/OIP.jpg';
import MaxResImage from '../public/maxresdefault.jpg';

function App() {
  return (
    <>
      <h1 className="SlavaUkrain">Слава Україні!</h1>
      <img className="dinax" src={OIPImage} alt="Пейзаж України" />
      <p className="read-the-docs">
        Геро<><span className="read-the-docs-span">ям Слава!</span></>
      </p>

      <img className="dinax" src={MaxResImage} alt="Тризуб" />
      <a href="https://ab3.army/" className="link-button" target="_blank" rel="noopener noreferrer">
        Долучись до 3 штурмової 
      </a>
    </>
  );
}

export default App;
