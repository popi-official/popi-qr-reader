import Link from "next/link";
import QrScanner from "qr-scanner";
import React, { useEffect, useRef, useState } from "react";

const Camera = () => {
  const videoRef = useRef(null);
  const [result, setResult] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [scanner, setScanner] = useState(null);

  const startScanning = async () => {
    const qrScanner = new QrScanner(
      videoRef.current,
      (result) => setResult(result.data),
      { highlightScanRegion: true }
    );

    await qrScanner.start();
    setScanner(qrScanner);
    setIsScanning(true);
  };

  const stopScanning = () => {
    scanner?.stop();
    scanner?.destroy();
    setScanner(null);
    setIsScanning(false);
  };

  useEffect(() => {}, [result]);

  return (
    <div className="p-4 bg-black h-screen flex flex-col justify-center items-center">
      <video ref={videoRef} className="w-full mb-4" />
      <button
        onClick={isScanning ? stopScanning : startScanning}
        className={`px-6 py-2 rounded ${isScanning ? "bg-red-500" : "bg-blue-500"} text-white w-[300px]`}
      >
        {isScanning ? "중지" : "시작"}
      </button>
      <Link href="/home">
        <div className="text-gray-500 p-2">홈페이지로 이동</div>
      </Link>
    </div>
  );
};

export default Camera;
