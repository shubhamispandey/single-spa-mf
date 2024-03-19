import Todo from "./components/Todo";
import { img, namesFn } from "@jio/utils";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

export default function Root(props) {
  return (
    <>
      {/* <CustomButton /> */}
      {/* <Navbar /> */}
      <img src={img} alt="" />
      <Todo />
    </>
  );
}
