import { CourseInterface, UserInterface, ReviewInterface } from './interfaces'

const DATE = '2015-01-28T00:38:26Z'

const reviews: ReviewInterface[] = [
    {
        createdAt: DATE,
        userId: 1,
        rating: 5,
        content: `I love this course so much! I have learned more from this course, not an advanced knowledge but all the basic knowledge. During the course, I can write my our script to use in daily work such as rename multiple files follow unique format (I use it to format my video file follow Plex File Naming Rule), an basic game like tic toc toe or blackjack (with an update to suit with my country :D ). Jose Sensei is the great teacher, with the easy instruction, I can get over and over the lecture with no problem in my head (in case I have problem, Q&A form always wait for me :)) ). I think I will go for the other Jose's course, like Python and Flask.`,
    },
    {
        createdAt: DATE,
        userId: 2,
        rating: 4,
        content: `Course was really good, everything was explained well so a beginner could follow quite easily.`,
    },
]

export const JohnDoe: UserInterface = {
    courseCount: 1,
    studentsCount: 10,
    facebookUrl: '',
    linkedinUrl: '',
    personalWebsiteUrl: '',
    twitterUrl: '',
    youtubeUrl: '',
    name: 'John Doe',
    avatarUrl: 'www.avatar.com/john-doe',
    jobTitle: 'Head of Data Science, Pierian Data Inc.',
    about: 'John Doe has a BS and MS in Mechanical Engineering from Santa Clara University',
    createdAt: DATE,
    updatedAt: DATE,
}
export const RichardDoe: UserInterface = {
    facebookUrl: '',
    linkedinUrl: '',
    personalWebsiteUrl: '',
    twitterUrl: '',
    youtubeUrl: '',
    courseCount: 1,
    studentsCount: 10,
    name: 'Richard Doe',
    avatarUrl: 'www.avatar.com/richard-doe',
    jobTitle: 'Head of Data Science, Albus Inc.',
    about: 'Richard Doe has a BS and MS in Mechanical Engineering from Washington University',
    createdAt: DATE,
    updatedAt: DATE,
}
export const courses: CourseInterface[] = [
    {
        reviews,
        targetAudiences: ['Anyone who is wants to get more done every day than they have before '],

        createdAt: DATE,
        requirements: ['High school mathematics.'],
        description: `Interested in the field of Machine Learning? Then this course is for you!

	This course has been designed by two professional Data Scientists so that we can share our knowledge and help you learn complex theory, algorithms, and coding libraries in a simple way.
	
	We will walk you step-by-step into the World of Machine Learning. With every tutorial, you will develop new skills and improve your understanding of this challenging yet lucrative sub-field of Data Science.`,
        updatedAt: DATE,
        averageRating: 0,
        enrollmentsCount: 0,
        headline: 'Functional Programming in JavaScript',
        objectives: [
            'The essence of Functional Programming, without all the unneeded technical Jargon',
            'Build sophisticated apps, with simple code',
            'How to create applications, in a functional programming style',
            'What Pure Functions are, and why you should use them',
        ],
        curriculumItems: [],
        isApproved: true,
        isPublished: true,
        reviewsCount: 0,
        teachers: [JohnDoe, RichardDoe],
        thumbnailUrl: 'https://via.placeholder.com/350x150',
        title: 'Functional Programming in JavaScript',
        url: '/course/functional-programming-in-java-script/',
    },
]
