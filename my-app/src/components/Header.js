import {Link} from "react-router-dom"

function Header() {

  return (
    <header>
      <h1>The Task Spot ☑</h1>
      {/* Below are the links */}
      <Link to={`/`}><button>Home</button></Link>
      <Link to={`/lists/new`}><button>Add New List</button></Link>
      <Link to={`/funlist`}><button>Fun List</button></Link>
    </header>
  );
}

export default Header;