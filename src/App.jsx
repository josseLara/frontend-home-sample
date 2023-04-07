import { useEffect, useState } from 'react'
import './App.css'
import Nav from './componets/Nav'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FiFacebook, FiGithub, FiTwitter } from 'react-icons/fi'
function App() {
  let imgUrl = [
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/63f01872-c522-49ae-8fdc-d7b0bc0a18a0/daku5l1-cb4b34f2-4740-4032-9a51-52d1834bd7cb.jpg/v1/fill/w_1024,h_549,q_75,strp/osaka_castle_concept_2h_by_zudartslee_daku5l1-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTQ5IiwicGF0aCI6IlwvZlwvNjNmMDE4NzItYzUyMi00OWFlLThmZGMtZDdiMGJjMGExOGEwXC9kYWt1NWwxLWNiNGIzNGYyLTQ3NDAtNDAzMi05YTUxLTUyZDE4MzRiZDdjYi5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.odOYgcAs1JO2HWhg-i--vYBuKc04wL_NKcOqjf7TBaU",
    "https://images.pexels.com/photos/2816903/pexels-photo-2816903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3048528/pexels-photo-3048528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ]
  let styleBg = { animation: "shodowImage 1.5s 2 alternate ease-in-out" }
  const [indexImg, setIndexImg] = useState( 0 );
  const handleChangeImg = ( type ) => {
    if ( indexImg != 3 ) {
      if ( type ) setIndexImg( indexImg + 1 )
      if ( !type && indexImg != 0 ) setIndexImg( indexImg - 1 )
    } else {
      if ( type ) setIndexImg( 0 );
      if ( !type ) setIndexImg( indexImg - 1 );
    }
  }
  useEffect( () => { setTimeout( () => document.documentElement.style.setProperty( '--img-url', `url(${imgUrl[indexImg] ? imgUrl[indexImg] : imgUrl[0]}` ), 1510 ) }, [indexImg] )
  return (
    <div className="App" style={styleBg} key={indexImg}>
      <Nav />
      <div className="App__circle">
        <IoIosArrowBack className='iosArrow' onClick={() => handleChangeImg( false )} />
        <IoIosArrowForward className='iosArrow' onClick={() => handleChangeImg( true )} />
      </div>
      <div className="App__circleRight"></div>
      <img src="./person.png" alt="person" className="App__personImg" />
      {/* contenido */}
      <main className="main">
        <div className="main__discounts">
          <span className="main__discounts__discounts">%20</span>
          <span>Descuento</span>
        </div>

        <div className="main__circle">
          <span></span>
        </div>

        <h1>GAME CYBER TOKYO</h1>
        <p>En "Game Cyber Tokyo", los jugadores se sumergen en una emocionante batalla en la futurista metrópolis de Cyber Tokyo.</p>
        <div className="main__btns">
          <button><AiOutlineShoppingCart />Comprar</button>
          <button>Mas info</button>
        </div>
        {/* social */}
        <ul className='main__social'>
          <li><FiTwitter /></li>
          <li><FiFacebook /></li>
          <li><FiGithub /></li>
        </ul>
      </main>
    </div>
  )
}

export default App
