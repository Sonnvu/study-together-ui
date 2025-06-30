"use client";

interface RoomPageProps {
  id: string;
}

import { useEffect, useRef, useState } from "react";

export default function RoomPage({ id }: RoomPageProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error(err);
        setError("Could not access camera/microphone. Please allow permission");
      }
    };

    startCamera();
    
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

return (
  <main className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-8">
      <h1 className="text-2xl font-bold mb-4">Room ID: {id}</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="w-full max-w-md rounded shadow-lg"
      />
    </main>
  );
}