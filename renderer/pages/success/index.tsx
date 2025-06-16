import DefaultLayout from "@/components/DefaultLayout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { setTimeout } from "timers";

const Success = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/home");
    }, 5000);
  }, []);

  return (
    <DefaultLayout
      title="방문을 환영합니다"
      subTitle="즐거운 시간 보내세요"
      imageSource="/images/success.webp"
    />
  );
};

export default Success;
