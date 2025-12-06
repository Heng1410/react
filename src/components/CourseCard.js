function CourseCard(props) {
  const { image, title, description } = props.Course;
  return (
    <>
      <div className="card m-3" style={{ width: "18rem" }}>
        <img src={image} width={200} className="card-img-top" alt="course" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="test" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}
export default CourseCard;
