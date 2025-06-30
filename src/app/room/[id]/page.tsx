import RoomPage from "@/components/pages/room/RoomPage";

interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return <RoomPage id={params.id} />;
}