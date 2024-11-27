import { Wrapper, Placement } from "./styles";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import CreateTask from "../../components/CreateTask";
import { useRef } from "react";

export default function PageCreateTask() {
  const refOnScreen = useRef(null);

  return (
    <Wrapper>
      <Header refOnScreen={refOnScreen} />
      <Placement>
        <Navigation />
        <CreateTask refOnScreen={refOnScreen} />
      </Placement>
    </Wrapper>
  );
}
