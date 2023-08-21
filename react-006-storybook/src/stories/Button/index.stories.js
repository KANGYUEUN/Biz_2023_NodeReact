import Button from "../../shareComps/Button";

export default {
  title: "Button",
  component: [Button],
};
export const SampleButton1 = () => <Button>Hello</Button>;
export const SampleButton2 = () => <Button>나를 클릭하세요 </Button>;
export const SampleButton3 = () => <Button bgColor="red">RED BUTTON </Button>;
export const SampleButton4 = () => (
  <Button bgColor="green" color="yellow">
    GREEN BUTTON
  </Button>
);
