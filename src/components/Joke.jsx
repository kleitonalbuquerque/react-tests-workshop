import { useEffect, useState } from "react";

export function Joke() {
  const [joke, setJoke] = useState("");
  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => setJoke(data.value))
      .catch(() => setJoke("Erro ao carregar piada"));
  }, []);
  return <p>{joke ? joke : "Carregando piada..."}</p>;
}
