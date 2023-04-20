import { state } from "../state";

const SomeAsyncComponent = async (props: { message: string }) => {
  return (
    <>
      <div>{state.title}</div>
      <div>{props.message}</div>
    </>
  );
};

export default SomeAsyncComponent;
