import { useEffect, useState } from "react";
import { getCharacter, getPeople } from "./api/people";

function App() {
  const [people, setPeople] = useState([]);
  const [currentCharacter, setCurrentCharacter] = useState(1)
  const [detail, setDetails] = useState({})

  const callGetPeople = async () => {
    const data = await getPeople();
    setPeople(data.results);
  };

  const callGetCharacter = async () => {
    const data = await getCharacter(currentCharacter);
    setDetails(data);
  };

  const getIdCharacter = (url) => {
    const idCharacter = +url.split('/').slice(-2)[0]
    setCurrentCharacter(idCharacter)
  };

  useEffect(() => {
    callGetPeople();
  }, []);

  useEffect(() => {
    callGetCharacter();
  }, [currentCharacter]);

  console.log(detail, currentCharacter)
  console.log(currentCharacter)


  return (
    <div className="App">
      {people.map(({ name, url }) => {
        return <h1 onClick={() => getIdCharacter(url)}>{name} {url}</h1>;
      })}
      {detail.name}
    </div>
  );
}

export default App;
