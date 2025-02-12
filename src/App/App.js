import AdminRouter from "../routes/AdminRouter";
import AppRouter from "../routes/AppRouter";

function App() {
  return (
    <div className="App">
      <AppRouter />
      <AdminRouter />
    </div>
  );
}

export default App;
