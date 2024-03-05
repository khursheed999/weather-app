
import Weather from './Components/Weather';
import { FetchDataProvider } from './Store/FetchDataContext';
function App() {
  return (
     <FetchDataProvider>

    <Weather/>  

     </FetchDataProvider>
   
      
  )
}

export default App;
