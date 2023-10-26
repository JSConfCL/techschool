import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Header from "../components/Header";
import PokemonCard from "../components/PokemonCard";
import { capitalizeWord } from "../utils/capitalizeWord";

const CustomLink = styled(Link)`
  text-decoration: none;
  height: 100%;
  display: block;
`;

function Root() {
  const { pokemons, next } = useLoaderData();

  const [pokemonList, setPokemonList] = useState(pokemons);
  const [nextPage, setNextPage] = useState(next);

  const fetchNextPage = async () => {
    const data = await fetch(next);
    const dataJson = await data.json();
    setPokemonList((prev) => [...prev, ...dataJson.results]);
    setNextPage(dataJson.next);
  };

  return (
    <>
      <ScrollRestoration />
      <Header title="PokeDex" />
      <Container maxWidth="lg" sx={{ padding: "1.5rem" }}>
        <InfiniteScroll
          dataLength={pokemonList.length}
          next={() => fetchNextPage()}
          hasMore={!!nextPage}
          loader={<p>Loading...</p>}
        >
          <Grid container spacing={2}>
            {pokemonList.map((item, index) => (
              <Grid key={item.name} item xs={12} sm={6} md={4}>
                <CustomLink to={`pokemon/${index + 1}`}>
                  <PokemonCard
                    pokemonName={capitalizeWord(item.name)}
                    pokemonNumber={index + 1}
                  />
                </CustomLink>
              </Grid>
            ))}
          </Grid>
        </InfiniteScroll>
      </Container>
    </>
  );
}

export default Root;
