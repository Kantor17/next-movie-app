import { IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useAppDispatch } from "../hooks";
import { searchMovies } from "../store/slices/searchSlice";
import { FormEvent, useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useAppDispatch();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (searchQuery.trim().length > 0) {
      dispatch(searchMovies(searchQuery));
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="search-bar"
        className="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        label="Enter a movie title"
        variant="outlined"
        placeholder="Search..."
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
    </form>
  );
};

export default SearchBar;
