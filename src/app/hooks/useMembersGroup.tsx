import { useEffect, useState } from "react";

interface TypesPlayer {
  id: number;
  name: string;
  height: string;
  racket: string;
  image: string;
}

export default function MembersGroup() {
  const [players, setPlayers] = useState<TypesPlayer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const HandleFetch = async () => {
      await fetch("http://localhost:3000/api/getAllUsers")
        .then((data) => data.json())
        .then((padeleros) => setPlayers(padeleros.results))
        .finally(() => setLoading(false));
    };
    HandleFetch();
  }, []);

  return { players, loading };
}
