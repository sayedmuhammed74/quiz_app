import { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../url';
import { TailSpin } from 'react-loader-spinner';

export default function ResultTable() {
  const [results, setResults] = useState([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      axios
        .get(`${url}/api/results`)
        .then((res) => setResults(res?.data?.data?.results))
        .catch((err) => console.log(err));
    }, 1000);

    return () => clearTimeout(timer);
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
          {results.length === 0 ? (
            <tr>
              <td
                colSpan={4}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '10px',
                  height: '50vh',
                }}
              >
                <TailSpin
                  visible={true}
                  height="80"
                  width="80"
                  color="#4fa94d"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </td>
            </tr>
          ) : (
            results.map((result) => (
              <tr className="table-body" key={result._id}>
                <td>{result?.username}</td>
                <td>{result?.attempts}</td>
                <td>{result?.points}</td>
                <td>{result?.achieved ? 'Passed' : 'Failed'}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
