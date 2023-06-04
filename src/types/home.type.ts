interface Course {
  _id: string;
  title: string;
  cover: string;
  level: string | null;
  time: number;
  total: number;
  instructorName: string;
  price: number;
  discountPrice: number | null;
  isFree: boolean;
}

interface ISearcheCourses {
  courses: Course[];
  uniqueTagNames?: string[];
}

export { ISearcheCourses };
