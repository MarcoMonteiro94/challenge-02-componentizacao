import { useState } from "react";
import { GenreResponseProps, SideBar } from "./components/SideBar";
import { Content, MovieProps } from "./components/Content";

import "./styles/global.scss";

export function App() {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  );

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar setMovies={setMovies} setSelectedGenre={setSelectedGenre} />
      <Content title={selectedGenre.title} movies={movies} />
    </div>
  );
}
