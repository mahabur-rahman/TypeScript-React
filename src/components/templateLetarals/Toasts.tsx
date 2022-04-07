/*

* position prop can be one of

* left-center | left-top | left-bottom | center | center-top

* center-bottom | right-center | right-top | right-bottom

*/

type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";

type ToastProps = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
    | "center";
};

const Toasts = ({ position }: ToastProps) => {
  return (
    <>
      <h1>Toasts notifications position - {position}</h1>
    </>
  );
};

export default Toasts;
