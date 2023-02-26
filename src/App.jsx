import './App.css';
import './js';

const App = () => (
  <div className='wrapper'>
    <div className='content'>
      <header className='main-header'>
        <div className='layers'>
          <div className='layer__header'>
            <div className='layers__caption'>Welcome to Parallax</div>
            <div className='layers__title'>Fairy Forest</div>
          </div>
          <div className='layer layers__base' />
          <div className='layer layers__middle' />
          <div className='layer layers__front' />
        </div>
      </header>
      <article className='main-article'>
        <div className='main-article__content'>
          <h2 className='main-article__header'>To be continued</h2>
          <p className='main-article__paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            magnam aut consectetur suscipit, ex libero natus consequuntur
            doloribus error incidunt labore amet iste reprehenderit nihil
            aperiam mollitia harum qui atque nobis rerum?
          </p>
        </div>
        <div className='copy'>© Dmytro Semenov</div>
      </article>
    </div>
  </div>
);

export default App;
