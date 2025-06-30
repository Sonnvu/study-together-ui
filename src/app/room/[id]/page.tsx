import RoomPage from "@/components/pages/room/RoomPage";

export default function Page({ params }: { params: { id: string } }) {
  return <RoomPage id={params.id} />;
}
