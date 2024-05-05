import type { NextApiRequest, NextApiResponse } from "next";

interface SlideNewsDataType {
  type: number;
  title: string;
  date?: string;
  img?: string;
}

export default function getSdfNews(
  req: NextApiRequest,
  res: NextApiResponse<SlideNewsDataType[]>
) {
  res.status(200).json([
    {
      type: 3,
      title:
        "서울디지털재단-덴마크 디지털정부 장관 면담··· 디지털 협력 의지 확인",
      date: "2024-04-26",
    },
    {
      type: 2,
      title: "제3기 SDF 스토리텔러 최종 합격자 발표",
      date: "2024-04-24",
    },
    {
      type: 3,
      title: "베트남에 전한 스마트 서울 매력, <스마트라이프 위크> 홍보 박차",
      date: "2024-04-23",
    },
    {
      type: 2,
      title: "2024년 중장년 어디나지원단 디지털 강사 모집 공고",
      date: "2024-04-23",
    },
    {
      type: 3,
      title:
        "시민이서울시 AI 활용법, 시민이 제안한다 … <서울 프롬프톤> 참가자 모집",
      date: "2024-04-22",
    },
    {
      type: 2,
      title:
        "‘서울 지하철 역사 내 스마트서비스 기획’ 과제 외부연구원(연구보조원) 모집공고",
      date: "2024-04-17",
    },
    {
      type: 2,
      title: "제3회 메타버스 서울 3D 모델링 공모전 공고",
      date: "2024-04-17",
    },
    {
      type: 3,
      title: "메타버스 서울 반려동물 위해 3D 창작물 만들어요",
      date: "2024-04-16",
    },
    {
      type: 2,
      title: "제3기 SDF 스토리텔러 모집 [기간 연장]",
      date: "2024-04-15",
    },
    {
      type: 3,
      title: "스마트한 서울의 매력, 서울 청년이 만든 콘텐츠로 전세계에 알린다",
      date: "2024-04-09",
    },
    {
      type: 1,
      title: "제 2회 서울시 골목경제 부활 프로젝트 참가자 모집",
      img: "/images/sdf/news/img_news01.jpg",
    },
    {
      type: 1,
      title: "서울시민 디지털 격차해소를 위한 챗GPT, 메타버스 특강",
      img: "/images/sdf/news/img_news02.jpg",
    },
    {
      type: 1,
      title: "AI 서울 포럼 2022",
      img: "/images/sdf/news/img_news03.jpg",
    },
    {
      type: 1,
      title: "서울 시민 생활 데이터를 활용한 도시문제 해결 경진대회",
      img: "/images/sdf/news/img_news04.jpg",
    },
    {
      type: 1,
      title:
        "2022 메타버스 서울 제야의 종 페스티벌 : 메타버스 서울에서 2022 새로운 시작을 만나다",
      img: "/images/sdf/news/img_news05.jpg",
    },
  ]);
}
