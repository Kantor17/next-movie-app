import { Pagination, Stack } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks";
import { searchMovies } from "../store/slices/searchSlice";

export const MoviesPagination = () => {
  const dispatch = useAppDispatch();
  const { movies, totalPages, currentPage, query } = useAppSelector(
    (state) => state.search
  );

  function onChange(event: React.ChangeEvent<unknown>, page: number) {
    dispatch(searchMovies({ query, page }));
  }

  if (!movies || movies.length < 1 || totalPages < 2) return null;
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

export default MoviesPagination;
