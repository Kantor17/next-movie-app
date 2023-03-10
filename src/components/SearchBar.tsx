import { Box, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useAppDispatch } from "../hooks";
import { searchMovies } from "../store/slices/searchSlice";
import { FormEvent, useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useAppDispatch();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(searchMovies(searchQuery));
  }
  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        id="search-bar"
        className="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        label="Enter a movie title"
        variant="outlined"
        placeholder="Search..."
        size="small"
      />
      <IconButton
        type="submit"
        aria-label="search"
        disabled={searchQuery.trim().length < 1 ? true : false}
      >
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
