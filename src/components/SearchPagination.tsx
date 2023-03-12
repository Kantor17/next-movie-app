import { Pagination, Stack } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks";
import { searchMovies } from "../store/slices/searchSlice";

export const SearchPagination = () => {
  const dispatch = useAppDispatch();
  const { movies, totalPages, currentPage, query, status } = useAppSelector(
    (state) => state.search
  );

  function onChange(event: React.ChangeEvent<unknown>, page: number) {
    dispatch(searchMovies({ query, page }));
  }

  if (!movies || totalPages < 2 || status !== "fulfilled") return null;
  return (
    <Stack alignItems="center">
      <Pagination
        count={totalPages}
        page={currentPage}
        size="large"
        onChange={onChange}
      />
    </Stack>
  );
};

export default SearchPagination;
