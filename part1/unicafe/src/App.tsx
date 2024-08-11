const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
        exercise1={exercises1}
        exercise2={exercises2}
        exercise3={exercises3}
      />
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  );
};

export default App;

// Typescript typing for props.
interface AppProps {
  course?: string;
  part1?: string;
  part2?: string;
  part3?: string;
  exercise1?: number;
  exercise2?: number;
  exercise3?: number;
}

const Header = (props: AppProps) => {
  return <h1>{props.course}</h1>;
};

const Content = (props: AppProps) => {
  return (
    <>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </>
  );
};
