import { Route, Routes, useNavigate } from 'react-router-dom';
import ProjectList from './containers/ProjectList';
import ProjectDetails from './containers/ProjectDetails';

function App() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto">
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-col gap-8 h-screen justify-center items-center">
              <h1>Vous pouvez consulter tous vos projets par ici 👇🏼</h1>
              <div className="card">
                <button
                  onClick={() => navigate('/projets')}
                  className="text-2xl"
                >
                  Voir la liste des projets
                </button>
              </div>
            </div>
          }
        />
        <Route path="projets/*" element={<ProjectList />} />
        <Route path="projets/:projectId" element={<ProjectDetails />} />
      </Routes>
    </div>
  );
}

export default App;
