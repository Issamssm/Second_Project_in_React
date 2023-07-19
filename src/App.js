import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import data from './component/data';

const card = data.map(ele => {
  return (
    <Main
      {...ele}
    />
  )
})

function App() {
  return (
    <div>
      <Header />
      {card}
    </div>
  );
}

export default App;
