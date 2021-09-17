import {Link} from "react-router-dom"

function Header() {

  return (
    <header>
      <h1>The Task Spot ✓</h1>
      {/* Below are the links */}
      <Link to={`/`}><button className="headerButton">Home</button></Link>
      <Link to={`/lists/new`}><button className="headerButton">Add New List</button></Link>
      <Link to={`/funlist`}><button className="headerButton">Fun List</button></Link>
    </header>
  );
}

export default Header;