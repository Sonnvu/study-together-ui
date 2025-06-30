import RoomPage from "@/components/pages/room/RoomPage";

type PageProps = {
  params: { id: string };
};

export default function Page({ params }: PageProps) {
  return <RoomPage id={params.id} />;
}