import Image from "next/image";

type Props = {
  title: string;
  subTitle: string;
  imageSource: string;
};

export default function DefaultLayout({ title, subTitle, imageSource }: Props) {
  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute top-40 sm:top-20 md:top-32 lg:top-40 z-10 text-center w-full px-8">
        <h1 className="text-white text-[30px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-bold mb-6">
          {title}
        </h1>
        <p className="text-blue-400 text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-medium mb-2 whitespace-pre-line">
          {subTitle}
        </p>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -z-10">
          <Image
            src="/images/background.webp"
            alt="백그라운드 이미지"
            width={500}
            height={500}
            className="sm:w-[600px] sm:h-[600px] md:w-[700px] md:h-[700px] lg:w-[750px] lg:h-[750px]"
            priority
          />
        </div>
      </div>
      <div className="absolute bottom-32 sm:bottom-24 md:bottom-28 lg:bottom-32 z-10">
        <Image
          src={imageSource}
          alt="카메라 이미지"
          width={280}
          height={350}
          className="sm:w-[320px] sm:h-[400px] md:w-[360px] md:h-[450px] lg:w-[400px] lg:h-[500px] object-contain"
        />
      </div>
    </div>
  );
}
