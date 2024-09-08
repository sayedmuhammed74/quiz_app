import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ResultTable() {
  const [results, setResults] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/results')
      .then((res) => setResults(res?.data?.data?.results))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1 className="title"></h1>
      <table>
        <thead className="table-header">
          <tr className="table-row">
            <td>Name</td>
            <td>Attemps</td>
            <td>Earn Points</td>
            <td>Result</td>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr className="table-body" key={result._id}>
              <td>{result?.username}</td>
              <td>{result?.attempts}</td>
              <td>{result?.points}</td>
              <td>{result?.achieved ? 'Passed' : 'Failed'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
