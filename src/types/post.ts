export type Categories = ["도시재생", "조명", "조경", "도시경관"];
export type Properties = {
  제목: {
    rich_text: {
      plain_text: string;
    }[];
  };
  유형: {
    multi_select: {
      id: string;
      name: Categories;
      color: string;
    }[];
  };
  사진: {
    files: {
      name: string;
      file: {
        url: string;
      };
    }[];
  };
  "최종 편집 일시": {
    last_edited_time: string;
  };
  비고: {};
  "직업 일정": {};
  장소: {
    title: {
      plain_text: string;
    }[];
  };
};

export interface Post {
  id: string;
  properties: Properties;
}
