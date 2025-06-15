import DefaultLayout from "@/components/DefaultLayout";

const Survey = () => {
  return (
    <DefaultLayout
      title="방문을 환영합니다"
      subTitle={`웰컴 포토카드가 출력되었어요 \n 오른쪽에서 챙겨주세요`}
      imageSource="/images/survey.webp"
    />
  );
};

export default Survey;
