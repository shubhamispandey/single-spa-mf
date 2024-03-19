// Anything exported from this file is importable by other in-browser modules.
import { Button } from "@mui/material";
import { BehaviorSubject } from "rxjs";
import image from "./img/144.jpg";

export function namesFn() {
  return {
    data: ["John", "Mary", "Bob", "google"],
  };
}

export const img = image;
export function CustomButton(label) {
  return <Button variant="text">Hello</Button>;
}

// export const reduxState = new BehaviourSubject({});
