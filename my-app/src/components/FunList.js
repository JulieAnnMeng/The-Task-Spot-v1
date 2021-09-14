import Lists from './Lists';


function FunList() {

    return (
        <div>
            <h2>Plan fun activities below</h2>
            <button className="funListAdd">Add Fun</button>
            <button className="apiFunAdd">Get Fun</button>
            {/* Forms below will appear if their above button is clicked */}
            <form className="funListAdd">
                <h3>Add to your fun below</h3>
                <input
                type="date"
                name="date"
                />

                <input
                type="text"
                name="funTask"
                placeholder="fun task"
                />
                
                <br /><br />
                <button type="submit">Submit</button>
            </form>
            <form className="apiFunAdd">
                <h3>Get fun ideas below</h3>
                <h5>Random Fun</h5>
                {/* h5 will hold api fun */}
                <input
                type="date"
                name="date"
                 />
                <br />
                <button type="submit">Submit</button>
            </form>
            <Lists />
            {/* want to show fun lists on the page */}
        </div>
  );
}

export default FunList;