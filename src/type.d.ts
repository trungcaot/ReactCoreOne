type ICourse = {
    id: number,
    title: string,
    slug: string,
    categoryId: number,
    category: string
};

type CourseAction = {
    type: string,
    course: ICourse
}
