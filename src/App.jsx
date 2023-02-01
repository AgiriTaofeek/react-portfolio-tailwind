import {
  About,
  Banner,
  Contact,
  Header,
  Nav,
  Services,
  Work,
} from './components';

function App() {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden min-h-screen">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
