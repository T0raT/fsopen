const CourseHeader = (props) => {
  return (
      <p>{props.course}</p>
  )
};


const CourseContent = (props) => {
  return (
      <p>{props.part} {props.exercises}</p>
  )
};


const TotalContent = (props) => {
  return (
      <p>Number of exercises: {props.total}</p>
  )
};


function App() {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
      <div>
        <CourseHeader course={course} />
        <CourseContent part={part1} exercises={exercises1} />
        <CourseContent part={part2} exercises={exercises2} />
        <CourseContent part={part3} exercises={exercises3} />
        <TotalContent total={exercises1 + exercises2 + exercises3} />
      </div>
  )
}

export default App
