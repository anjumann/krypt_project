import {Welcome, Footer , Loader , Navbar, Service, Transaction } from './components';

function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar/>
        <Welcome />
      </div>
        <Service/>
        <Transaction/>
        <Footer/>
    </div>
  );
}

export default App;
