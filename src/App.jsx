import { useState } from "react";
import Creator from "./components/Creator";
import List from "./components/List";
import Search from "./components/Search";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function addMonster(monster) {
    setMonsters((prevMonsters) => [...prevMonsters, monster]);
  }
  function deleteMonster(index) {
    setMonsters(monsters.filter((_, i) => i !== index));
  }

  function handleSearch(searchTerm) {
    setSearchTerm(searchTerm);
  }
  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="main-wrapper">
      <img src="src/assets/img/logo.svg" alt="monster" className="main__img" />
      <h1 className="main__title">Monsters</h1>
      <h2 className="main__subtitle">Create monster</h2>
      <Creator addMonster={addMonster} />
      <h2 className="main__subtitle">Monsters</h2>
      <Search searchTerm={searchTerm} onSearch={handleSearch} />
      <List monsters={filteredMonsters} deleteMonster={deleteMonster} />
    </div>
  );
}

export default App;
