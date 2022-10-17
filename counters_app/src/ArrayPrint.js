import "./App.css";

function App() {
  const names = ["Aman", "Atif", "Anuj", "Nikhil"];
  const students = [
    { roll: 1, name: "Aman" },
    { roll: 2, name: "Ajit" },
    { roll: 5, name: "Bikki" },
  ];
  return (
    <div className="App">
      <h2>Hello World!!!</h2>

      {/* printing an array */}
      <h1>The names in array are:</h1>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      {/* printing objects */}
      <h1>The students are: </h1>
      {students.map((student) => (
        <div key={student.roll}>
          <div>
            <h2>Name: </h2>
            <h3>{student.name}</h3>
          </div>
          <div>
            <h2>Roll number: </h2>
            <h3>{student.roll}</h3>
          </div>
        </div>
      ))}
      <ul></ul>
    </div>
  );
}

export default App;
