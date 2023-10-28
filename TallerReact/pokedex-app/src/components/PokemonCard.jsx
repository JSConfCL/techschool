import { LazyLoadImage } from "react-lazy-load-image-component";
import ImgNotAvailable from "../assets/Image_not_available.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { CardActionArea } from "@mui/material";

const PokemonCard = (props) => {
  return (
    <Card key={props.pokemonName} sx={{ height: "100%", display: "flex" }}>
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CardMedia
          sx={{
            width: "96px",
            height: "96px",
          }}
        >
          <LazyLoadImage
            alt={`${props.pokemonName} image`}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemonNumber}.png`}
            onError={(e) => (e.target.src = ImgNotAvailable)}
            width="96px"
            height="96px"
            placeholder={<CircularProgress color="error" />}
          />
        </CardMedia>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textAlign: "center" }}
            color={"error"}
          >
            {props.pokemonNumber}. {props.pokemonName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PokemonCard;
