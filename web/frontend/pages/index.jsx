import { useState } from 'react';
import { Catalog } from '../components';
import { Search } from '../components';

export default function HomePage() {

  const [search, setSearch] = useState('');


  return (
    <div style={{ background: "#fff", minHeight : "100vh" }}>
      <div style={{ margin: "auto", width: "1170px", padding: "120px 0  10px" }}>
        <div className="search">
          <input placeholder="Search for products, categories, brands"
            className="search_input" type="search" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        {
          search ?
            <Search data={search}/>
            :
         <Catalog />
        }
      </div>
    </div>
  );
}
