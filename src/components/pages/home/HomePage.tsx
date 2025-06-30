"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/buttons/JoinRoomButton";
import { v4 as uuidv4 } from "uuid";

export default function HomePage() {
    const router = useRouter()

    const handleJoinRoom = () => {
        const roomId = uuidv4()
        router.push('/room/${roomId}');
    }

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-8">
            <h1 className="text-4xl font-bold mb-4">StudyTogether</h1>
            <p className="text-lg text-center max-w-md">
                Welcome to StudyTogether! A place to join virtual study rooms and stay productive together.
            </p>
            <Button onClick={handleJoinRoom}>Join Room</Button>
        </main>
    );
}