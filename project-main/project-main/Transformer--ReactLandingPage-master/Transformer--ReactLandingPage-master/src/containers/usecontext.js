import { createContext } from "react";
import Blog from "./blog/Blog";



export const MyContext = createContext();
function Usecontextdemo() {
  return (
    <MyContext.Provider value={"hello"}>
      <Blog/>
    </MyContext.Provider>
  );
}
export default Usecontextdemo;