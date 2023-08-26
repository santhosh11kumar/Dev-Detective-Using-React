import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { add, remove } from "../redux/Slice/Name";

function SearchBar() {
    const [name, setData] = useState('santhosh11kumar');
    const dispatch = useDispatch();

    function inputHandler(e) {
        e.preventDefault();
        dispatch(remove()); // removing the prev value
        if (name === "") { // if user not found
            toast.error("Empty User Feild")
        }
        else {
            dispatch(add(name)); // storing the name
        }

    }
    useEffect(() => {
        dispatch(add("santhosh11kumar"));
    }, []);

    return (
        <div class="searchContainer">
            <form onSubmit={inputHandler}>
                <input
                    required autofocus
                    id="input"
                    type="text"
                    placeholder="Enter a Github User"
                    onChange={(e) => { setData(e.target.value) }}
                >
                </input>
                <button id="btn"
                >
                    Search
                </button>

            </form>
        </div>
    )
}
export default SearchBar;