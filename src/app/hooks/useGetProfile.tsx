import { useEffect, useState } from "react";

interface Props {
  id: number | null;
}

interface ProfileProps {
  id: number;
  "id-users": number;
  name: string;
  image: string;
  site: string;
  racket: string;
  height: string;
  points: any;
  wins: number;
  type: string;
}

export default function GetProfile({ id }: Props) {
  const [user, setProfile] = useState<ProfileProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleFetchUser = async () => {
      await fetch(`/api/getUser?id=${id}`)
        .then((res) => res.json())
        .then((data) => setProfile(data.results))
        .finally(() => setLoading(false));
    };
    handleFetchUser();
  }, [id]);

  return { user, loading };
}
