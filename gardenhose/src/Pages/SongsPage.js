import "bootstrap/dist/css/bootstrap.min.css";
import { Container, InputGroup,FormControl,Button,Row, Card } from 'react-bootstrap'
import {useState, useEffect} from 'react';

const CLIENT_ID = "3e7033524c1142319f17a6e033523349";
const CLIENT_SECRET = "038304b2ce594d9a9dd4012e889d4d32";

function Albumsearch() {
  const [songInput, setSongInput] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [albumList, setAlbumList] = useState([]);

  useEffect(() =>{
    var authOcred = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET 
    }

    fetch('https://accounts.spotify.com/api/token', authOcred)
      .then(result => result.json())
      .then(item => setAccessToken(item.access_token)) 
  }, [])

  async function search() {
    console.log('Search for' + songInput);

    const artistSearch = {
      method: 'Get',
      headers: {
        'Content-Type' : 'application/json',
        'Authorization' : 'Bearer ' + accessToken
      }
    }

    const artist = await fetch('https://api.spotify.com/v1/search?q=' + songInput +'&type=artist',artistSearch)
    .then(response => response.json())
    .then(item => { return item.artists.items[0].id})

    const Artistalbum = await fetch('https://api.spotify.com/v1/artists/' + artist + '/albums' + '?include_groups=album,single,appears_on&market=US',artistSearch)
    .then(response => response.json())
    .then(item => {
      console.log(item);
      setAlbumList(item.items);
    });
  }

  return (
    <div className="App">
     <Container>
      <InputGroup className = "mb-4" size="md" >
        <FormControl
        placeholder = 'Search' type= 'input' 
         onChange={event => setSongInput(event.target.value)} />
         <Button onClick={search}>
          Search
         </Button>
      </InputGroup>
     </Container>
     <Container>
      <Row className='mx-4 row row-cols-4'>
        {albumList.map( (album, i)=> {
          return (
            <Card>
              <Card.Img src={album.images[0].url}/>
              <Card.Body>
                <Card.Title>{album.name}</Card.Title>
              </Card.Body>
              </Card>
          )
        })}
      </Row>
     </Container>
    </div>
  );
}

export default Albumsearch;