import DaisyNav from "./components/DaisyNav/DaisyNav"
import LineChartView from "./components/LineChartView/LineChartView"
import NavBar from "./components/NavBar/NavBar"
import PriceOptions from "./components/PriceOptions/PriceOptions"

function App() {


  return (
    <>
      <h1>Vite + React</h1>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <PriceOptions></PriceOptions>
      <LineChartView></LineChartView>

    </>
  )
}

export default App
