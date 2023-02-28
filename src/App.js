import React, { useState } from 'react';
import Header from './Header';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import Loading from './components/loading';
import { useAuth0 } from '@auth0/auth0-react';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  const { isLoading } = useAuth0();
  if (isLoading) {
    return (
      <div className="loading">
        <Loading />
      </div>
    );
  }

  return (
    <main>
      <Header />
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
