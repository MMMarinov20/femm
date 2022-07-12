import React, {useEffect} from "react";
import axios from "axios";
const App: React.FC = () => {
  useEffect(() => {
    axios.get("http://localhost:3001/api/getAllReviews").then((res: any) => {
        console.log(res.data);
    })
  }, [])
  return <div>App</div>;
};
export default App;
