import React from 'react';
import Header from './components/Header'
import SearchForm from './components/SearchForm'
import ServerList from './components/ServerList'

function App() {
  return (
    <div>
      <Header />
      <SearchForm />
      <ServerList />
    </div>
  );
}

export default App;