import Card from "../components/Card";
import { Stack } from "@mui/material";
import useGameProvider from "../hooks/useGameProvider";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";

const Lobby = () => {
  const { slug } = useParams();
  const { game, setGameSlug } = useGameProvider();

  const { user } = useAuth();

  console.log({ game });

  useEffect(() => {
    if (slug) {
      setGameSlug(slug);
    }

    return () => setGameSlug(null);
  }, [slug]);

  return (
    <Stack direction="row" flex={1} spacing={4} mt={4}>
      <Card title="Players" flex={1} mt={0}>
        <Stack></Stack>
      </Card>
      <Card title="Game" flex={4} mt={0}>
        <Stack direction="row"></Stack>
      </Card>
    </Stack>
  );
};

export default Lobby;
