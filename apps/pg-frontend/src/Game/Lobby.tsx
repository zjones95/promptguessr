import Card from "../components/Card";
import { Stack } from "@mui/material";
import useGameProvider from "../hooks/useGameProvider";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Lobby = () => {
  const { slug } = useParams();
  const { game, setGameSlug } = useGameProvider();

  useEffect(() => {
    if (slug) {
      setGameSlug(slug);
    }

    return () => setGameSlug(null);
  }, [slug]);

  return (
    <Stack direction="row">
      <Card title="Lobby" flex={3}>
        <Stack direction="row"></Stack>
      </Card>
      <Card title="Chat" flex={1}>
        <Stack direction="row"></Stack>
      </Card>
    </Stack>
  );
};

export default Lobby;