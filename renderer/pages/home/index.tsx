import React from "react";
import DefaultLayout from "@/components/DefaultLayout";

export default function HomePage() {
  return (
    <DefaultLayout
      title="QR 코드를 스캔해주세요"
      subTitle={`POPI 앱의 티켓을 확인해주세요 \n 앱 > MY > 내 예약`}
      imageSource="/images/camera.webp"
    />
  );
}
