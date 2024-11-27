import { useEffect } from "react";
import TaskForm from "../../TaskForm";
import PrimaryButton from "../../UI/PrimaryButton";
import SecondaryButton from "../../UI/SecondaryButton";
import { IconClose } from "../../../assets/icons";
import {
  BackgroundModal,
  ModalCreate,
  ModalHeader,
  SubTitle,
  ContainerButton,
  CloseIcon,
  TitleNewTask,
  Body,
} from "./styles";
import { dataCreateTaskInitialValues } from "../../../assets/data/dataCreateTask";

interface props {
  switchModal: () => void;
}

const ModalCreateTask = (
  ({ switchModal }: props) => {
    const handleButtonPress = (e: KeyboardEvent) => {
      if (e.code === "Escape") switchModal();
    };

    const handleBackgroundClick = (
      e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
      if (e.target === e.currentTarget) {
        switchModal();
      }
    };

    useEffect(() => {
      window.addEventListener("keydown", handleButtonPress);
      return () => {
        window.removeEventListener("keydown", handleButtonPress);
      };
    }, []);

    return (
      <BackgroundModal onClick={handleBackgroundClick}>
        <ModalCreate initialValues={dataCreateTaskInitialValues} layout="vertical">
          <ModalHeader>
            <SubTitle>Подзадача</SubTitle>
            <ContainerButton>
              <PrimaryButton onClick={switchModal}>Сохранить</PrimaryButton>
              <SecondaryButton onClick={switchModal}>Отменить</SecondaryButton>
            </ContainerButton>
            <CloseIcon>
              <SecondaryButton onClick={switchModal} padding="6px">
                <IconClose />
              </SecondaryButton>
            </CloseIcon>
          </ModalHeader>
          <Body>
            <TitleNewTask>Новая запись</TitleNewTask>
            <TaskForm column={1}></TaskForm>
          </Body>
        </ModalCreate>
      </BackgroundModal>
    );
  }
);

export default ModalCreateTask;
