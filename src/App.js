import './App.css';
import './data/fonts/gilroy-semibold.ttf'
import './data/fonts/gilroy-bold.ttf'
import './data/fonts/gilroy-medium.ttf'
import './data/fonts/gilroy-regular.ttf'
import './data/fonts/CormorantGaramond-BoldItalic.ttf'
import './data/fonts/CormorantGaramond-MediumItalic.ttf'
import './data/fonts/CormorantGaramond-Bold.ttf'
import './data/fonts/CormorantGaramond-Italic.ttf'
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
