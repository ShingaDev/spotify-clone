import Sidebar from "components/Sidebar";
import BottomBar from "components/BottomBar";
import Content from "components/Content";

function App() {
  return (
    <>
      <div className="wrapper">
        <Sidebar></Sidebar>
        <Content></Content>
      </div>
      <BottomBar></BottomBar>
    </>
  );
}

export default App;
