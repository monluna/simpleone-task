import {
  WrapperCreateTask,
  Invision,
  FormManagement,
  LeftSide,
  SubtaskText,
  RightSide,
  Title,
} from "./styles";
import PrimaryButton from "../UI/PrimaryButton";
import SecondaryButton from "../UI/SecondaryButton";
import { useState } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import ModalCreateTask from "../Modal/ModalCreateTask";
import TaskForm from "../TaskForm";
import {
  dataCreateTaskInitialValues,
  dataCreateTaskTitle,
} from "../../assets/data/dataCreateTask";

export default function CreateTask({
  refOnScreen,
}: {
  refOnScreen: React.MutableRefObject<null>;
}) {
  const [openModal, setOpenModal] = useState(false);
  const onScreen = useOnScreen(refOnScreen, "0px");

  const switchModal = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <WrapperCreateTask
      initialValues={dataCreateTaskInitialValues}
      layout="vertical"
    >
      {openModal ? <ModalCreateTask switchModal={switchModal} /> : null}
      <Invision ref={refOnScreen} />
      <FormManagement scroll={!onScreen}>
        <LeftSide>
          <SubtaskText>Подзадача</SubtaskText>
          <SecondaryButton onClick={switchModal}>Создать</SecondaryButton>
        </LeftSide>
        <RightSide>
          <PrimaryButton>Сохранить</PrimaryButton>
          <SecondaryButton>Сохранить и выйти</SecondaryButton>
        </RightSide>
      </FormManagement>
      <Title>{dataCreateTaskTitle}</Title>
      <TaskForm column={2}></TaskForm>
    </WrapperCreateTask>
  );
}
