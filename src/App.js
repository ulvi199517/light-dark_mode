import './App.css';

function App() {
  return (
    <div className="App">
    <nav className='nav'>
      <a href='#home'>HOME</a>
      <a href='#about'>ABOUT</a>
      <a href='#projects'>PROJECTS</a>
      <a href='#contact'>CONTACT</a>
    </nav>
      <section className='home'>
        <div className='title-group'>
          <h1>Custom Title Here</h1>
          <h2>Welcome to the Website</h2>
        </div>
      </section>
      <section className='about'>
          <h1>Undrow Illustrations</h1>
      </section>
      <section className='projects'>
          <h1>Buttons</h1>
      </section>
      <section className='contact'>
          <h1>Contact</h1>
      </section>
    </div>
  );
}

export default App;
