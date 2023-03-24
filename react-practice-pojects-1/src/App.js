import './App.css';
import Blog from './component/Blog/Blog';

function App() {
  const titleStyle = {
    color: 'blue',
    backgroundColor: 'gray',
    padding: '10px'
  }
  return (
    <div className="App">
      <article className='blog'>
        <h1 style={titleStyle}>New blog</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium nisi facilis voluptas rem asperiores, nobis molestiae. Delectus, aut veritatis doloremque ad consequatur expedita quas dignissimos error, eligendi, id et commodi explicabo deleniti? Illo repudiandae et ut maxime omnis voluptatibus quod, ab animi vitae tempore quo in reprehenderit quis, obcaecati odio?</p>
        <p style={{ color: 'white', backgroundColor: 'orange', padding: '10px' }}>inline style</p>
      </article>
      <Blog heading="Insa allah ekdin sob asa poron hobe"
        author="tomra sobay amar jono doawa koro ami jeno amar sob asa poron korte pari"></Blog>
      <Blog heading="Insa allah ekdin sob asa poron hobe"
        author="tomra sobay amar jono doawa koro ami jeno amar sob asa poron korte pari"></Blog>
      <Blog heading="Insa allah ekdin sob asa poron hobe"
        author="tomra sobay amar jono doawa koro ami jeno amar sob asa poron korte pari"></Blog>
    </div>
  );
}

export default App;
