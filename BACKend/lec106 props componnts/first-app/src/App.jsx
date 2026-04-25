
import { useState } from 'react';
import Footer from './components/footer';
import Navbar from './components/Navbar';
import Cards from './components/Cards';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar/>
      <main>
        This is the site's main content
      </main>
      <div className="cards">
        <Cards title="card 1" description="card 1 desc" />
        <Cards title="card 2" description="card 2 desc" />
        <Cards title="card 3" description="card 3 desc" />
        <Cards title="card 4" description="card 4 desc" />
        

      </div>
      <Footer/>

    </>
  );
}

export default App;

