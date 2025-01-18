import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

const style = {
  margin: '1rem',
  padding: '0.5rem',
  border: '2px solid black',
}

function Home(props) {
  return <h2 style={{ ...style, borderColor: 'red' }}>Home Screen</h2>
}

function Cats(props) {
  return <h2 style={{ ...style, borderColor: 'blue' }}>Cats Screen</h2>
}

function About(props) {
  return <h2 style={{ ...style, borderColor: 'green' }}>
    About Screen
    <button onClick={() => props.navigate('/more')}>More Details</button>
  </h2>
}

function More(props) {
  const navigate = useNavigate();

  return <h2 style={{ ...style, borderColor: 'orange' }}>
    More Details Screen
    <button onClick={() => navigate(-1)}>Back</button>
  </h2>
}

export default function App() {
  return (
    <BrowserRouter>
      <h1>Understanding Routing</h1>
      <nav>
          <Link to="/">Home</Link>&nbsp;
          <Link to="cats">Cats</Link>&nbsp;
          <Link to="about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cats" element={<Cats />} />
        <Route path="about" element={<About />} />
        <Route path="more" element={<More />} />
      </Routes>
    </BrowserRouter>
  )
}