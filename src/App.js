import { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { SearchResults } from './components/SearchResults';
import { pathGet } from './util';
import './App.css';


const a = [{
  user: {
    id: 1,
    name: {
      firstName: "James",
      lastName: "Ibori"
    },
    location: {
      city: "Ikoyi",
      state: "Lagos",
      address: "One expensive house like that"
    }
  }
}, {
  user: {
    id: 2,
    name: {
      firstName: "Olusegun",
      lastName: "Obasanjo",
    },
    location: {
      city: "Ota",
      state: "Ogun",
      address: "Farm Roads, Ota"
    }
  }
}, {
  user: {
    id: 3,
    name: {
      firstName: "Muhammadu",
      lastName: "Buhari"
    },
    location: {
      city: "Daura",
      state: "Kaduna",
      address: "288 Daura Road, Daura"
    }
  }
}, {
  user: {
    id: 4,
    name: {
      firstName: "Nomso",
      lastName: "Ikem"
    },
    location: {
      city: "Festac",
      state: "Lagos",
      address: "23 Road, X Close, Festac"
    }
  }
}]


function App() {

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);



  const handleChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value ==="") {
      setResults([]);
      return;
    }
    else
    {
      let response = (pathGet(a, query));
      setResults([...response]);
    }
  }


  return (
    <div className='app'>
      <SearchBar handleChange={handleChange} query={query} />
      <SearchResults results={results} />
    </div>
  );
}

export default App;
