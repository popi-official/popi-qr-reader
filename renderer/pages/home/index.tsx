import React from "react";
import Image from "next/image";

export default function HomePage() {
  const [message, setMessage] = React.useState("No message found");

  React.useEffect(() => {
    window.ipc.on("message", (message: string) => {
      setMessage(message);
    });
  }, []);

  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute top-40 z-10 text-center w-full px-8">
        <h1 className="text-white text-[44px] font-bold mb-6">
          QR 코드를 스캔해주세요
        </h1>
        <p className="text-blue-400 text-[32px] font-medium mb-2">
          POPI 앱의 티켓을 확인해주세요
        </p>
        <p className="text-blue-400 text-[32px] font-medium">
          앱 &gt; MY &gt; 내 예약
        </p>

        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -z-10">
          <Image
            src="/images/background.webp"
            alt="백그라운드 이미지"
            width={750}
            height={750}
            priority
          />
        </div>
      </div>

      {/* 카메라를 화면 중앙 하단으로 이동 */}
      <div className="absolute bottom-32 z-10">
        <Image
          src="/images/camera.webp"
          alt="카메라 이미지"
          width={400}
          height={500}
          className="object-contain"
        />
      </div>
    </div>
  );
}
