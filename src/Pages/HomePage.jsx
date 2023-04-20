// CORE
import { useState, useEffect } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
// COMPONENTS
import { Loader } from "../components/loader/Loader";
// MUI
import {
  Pagination,
  PaginationItem,
  TextField,
  Stack,
  Link,
} from "@mui/material";

const BASE_URL = "http://hn.algolia.com/api/v1/search?";

export const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("react");
  const [page, setPage] = useState(
    parseInt(location.search.split("=")[1] || 1)
  );
  const [pageQty, setPageQty] = useState(0);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${BASE_URL}query=${query}&page=${page - 1}`).then(({ data }) => {
      setPosts(data.hits);
      setIsLoading(false);
      setPageQty(data.nbPages);

      if (data.nbPages < page) {
        setPage(1);
        navigate("/");
      }
    });
  }, [query, page, navigate]);

  return (
    <>
      <TextField
        fullWidth
        label="Query"
        value={query}
        onChange={handleChange}
      />
      <Stack spacing={2}>
        {pageQty ? (
          <>
            <Pagination
              count={pageQty}
              page={page}
              onChange={(_, num) => setPage(num)}
              showFirstButton
              showLastButton
              sx={{ marginY: 3, marginX: "auto" }}
              renderItem={(item) => (
                <PaginationItem
                  component={RouterLink}
                  to={`/?page=${item.page}`}
                  {...item}
                />
              )}
            />
            
            {isLoading ? (
              <Loader />
            ) : (
              posts.map((post) => (
                <Link key={post.objectID} href={post.url}>
                  {post.title || post.story_title}
                </Link>
              ))
            )}
          </>
        ) : (
          <Loader />
        )}
      </Stack>
    </>
  );
};
