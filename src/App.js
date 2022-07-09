import "./app.css";
import Layout from "./components/Layout/Layout";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  return <Layout />;
}

export default App;
