/* eslint-disable @typescript-eslint/no-empty-interface */
export interface CreatedAtInterface {
  createdAt: string;
}

export interface TimestampsInterface extends CreatedAtInterface {
  updatedAt: string;
}

export interface SectionItem {
  id: string[];
  children: string[];
  title: string;
}

export interface LinkResource {
  type: 'link';
  url: string;
}

export interface FileResource {
  type: 'file';
  url: string;
}

export interface ContentItem {
  id: string[];
  title: string;
  type: 'video' | 'article';
  duration: number;
  resources: LinkResource | FileResource[];
}

export interface WithIdAndText {
  id: string;
  text: string;
}

export interface CourseDetailsInterface {
  requirements: WithIdAndText[];
  objectives: WithIdAndText[];
  description: string;
  targetAudiences: WithIdAndText[];
  curriculumItems: (ContentItem | SectionItem)[];
  isPublished: boolean;
  isApproved: boolean;
  reviews: ReviewInterface[];
}
export interface CourseMetaInterface {
  averageRating: number;
  enrollmentsCount: number;
  headline: string;
  reviewsCount: number;
  teachers: UserInterface[];
  thumbnailUrl: string;
  title: string;
  url: string;
}
export interface CourseInterface
  extends TimestampsInterface,
    CourseDetailsInterface,
    CourseMetaInterface {}

export interface TeacherInterface {
  jobTitle: string;
  about: string;
  courseCount: number;
  studentsCount: number;
  twitterUrl: string;
  facebookUrl: string;
  linkedinUrl: string;
  youtubeUrl: string;
  personalWebsiteUrl: string;
}

export interface UserInterface extends TimestampsInterface, TeacherInterface {
  name: string;
  avatarUrl: string;
}
export interface ReviewInterface extends CreatedAtInterface {
  rating: number;
  content: string;
  userId: number;
}

export interface UpdateUserDtoInterface extends UserInterface {}

export interface CreateUserDtoInterface extends UserInterface {}

export interface UpdateCourseDtoInterface extends CourseInterface {}

export interface CreateCourseDtoInterface extends CourseInterface {}
