import { useLoaderData } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Header from "../components/Header";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { capitalizeWord } from "../utils/capitalizeWord";
import { styled } from "@mui/material/styles";
import { ScrollRestoration } from "react-router-dom";
import ImgNotAvailable from "../assets/Image_not_available.png";

const ImgContainer = styled("div")`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Img = styled("img")`
  max-width: 100%;
`;

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
  listStyle: "none",
}));

const List = styled("ul")`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  justify-content: center;
`;

const PokemonDetails = () => {
  const { pokemon } = useLoaderData();
  return (
    <>
      <ScrollRestoration />
      <Header title={capitalizeWord(pokemon.name)} showHomeBtn />
      <Container maxWidth="md" sx={{ padding: "1.5rem" }}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          # {pokemon.id}
        </Typography>
        <ImgContainer>
          <Img
            src={
              pokemon.sprites.other["official-artwork"].front_default ??
              pokemon.sprites.front_default ??
              ImgNotAvailable
            }
            alt={`${pokemon.name} Image`}
          />
        </ImgContainer>
        <Grid container spacing={2} sx={{ marginBottom: "1.5rem" }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" component="h3" gutterBottom align="center">
              Stats
            </Typography>
            <TableContainer component={Paper}>
              <Table aria-label="pokemon stats table" size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Stat</TableCell>
                    <TableCell>Value</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pokemon.stats.map((stat) => (
                    <TableRow
                      key={stat.stat.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {capitalizeWord(stat.stat.name)}
                      </TableCell>
                      <TableCell>{stat.base_stat}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" component="h3" gutterBottom align="center">
              Types
            </Typography>
            <List>
              {pokemon.types.map((type) => (
                <ListItem key={type.type.name}>
                  <Chip
                    label={capitalizeWord(type.type.name)}
                    color="secondary"
                  />
                </ListItem>
              ))}
            </List>
            <Typography variant="h5" component="h3" gutterBottom align="center">
              Abilities
            </Typography>
            <List>
              {pokemon.abilities.map((ability) => (
                <ListItem key={ability.ability.name}>
                  <Chip
                    label={capitalizeWord(ability.ability.name)}
                    color="primary"
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
        <Typography variant="h5" component="h3" gutterBottom align="center">
          Moves
        </Typography>
        <List>
          {pokemon.moves.map((move) => (
            <ListItem key={move.move.name}>
              <Chip
                label={capitalizeWord(move.move.name)}
                color="success"
                variant="outlined"
              />
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  );
};

export default PokemonDetails;
