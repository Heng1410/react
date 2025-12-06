import CourseCard from "./CourseCard";

function Course() {
  // const imageUrl =
  //   "https://imgs.search.brave.com/rFHL-zwgOKomXYLfatrPmPw1yX1sUhiogJrD-RDReG4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wZWJi/bGVseS5jb20vX251/eHQvcmV1c2UtYmFj/a2dyb3VuZC1leGFt/cGxlcy5kMzJhNmZh/Zi5qcGc";
  // const title = "Welcome to Course Page";
  // const description = "This is a brief description of the course.";
  const course = {
    image:
      "https://imgs.search.brave.com/rFHL-zwgOKomXYLfatrPmPw1yX1sUhiogJrD-RDReG4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wZWJi/bGVseS5jb20vX251/eHQvcmV1c2UtYmFj/a2dyb3VuZC1leGFt/cGxlcy5kMzJhNmZh/Zi5qcGc",
    title: "Welcome to Course Page",
    description: "This is a brief description of the course.",
  };

  return (
    <>
      <div className="row">
        <CourseCard Course={course} />
        <CourseCard Course={course} />
        <CourseCard Course={course} />
      </div>
    </>
  );
}

export default Course;
