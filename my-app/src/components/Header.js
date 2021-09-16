import {Link} from "react-router-dom"

function Header() {
  return (
    <header>
      <h1>The Task Spot ☑</h1>
      {/* Below are the links */}
      <Link to={`/`}>Home</Link>
      <Link to={`/lists/new`}>Add New List</Link>
      <Link to={`/funlist`}>Fun List</Link>
    </header>
  );
}

export default Header;