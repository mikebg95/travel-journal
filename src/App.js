import Header from './components/Header'
import Visit from './components/Visit'
import data from './data'

function App() {
  
  const visits = data.map(item => {
    return (
      <div>
        <Visit 
          key={item.id}
          item={item}
        />
        <hr />
      </div>
    )
  })


  return (
    <div className="App">
      <Header />
      <div className="content">
        {visits}
      </div>
    </div>
  );
}

export default App;
