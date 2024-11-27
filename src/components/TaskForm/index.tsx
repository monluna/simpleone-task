import { useState } from "react";
import {
  IconCalendar,
  IconCloseCircle,
  IconPlus,
  IconSearchBlack,
} from "../../assets/icons";
import { CustomInput } from "../UI/CustomInput";
import { CustomTreeSelect } from "../UI/CustomTreeSelect";
import SecondaryButton from "../UI/SecondaryButton";
import {
  StructureForm,
  StretchingColumn,
  PutRow,
  AllSpaceFree,
} from "./styles";
import { dataTreeForm } from "../../assets/data/dataTreeForm";

interface props {
  column: number;
}

export default function TaskForm({ column }: props) {
  const [form, setForm] = useState({
    responsible: "1",
    group: "0",
    concordants: [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
    ],
    opened_by: "2",
    created_by: "2",
  });

  const onFormChange = (key: string, newValue: unknown) => {
    setForm((prev) => ({ ...prev, [key]: newValue }));
  };

  return (
    <StructureForm column={column}>
      <CustomInput
        name="topic"
        label="Тема"
        rules={[{ required: true, message: "Введите тему!" }]}
      />
      <CustomInput name="status" label="Статус" />
      <CustomInput name="description" label="Описание" />
      <PutRow>
        <AllSpaceFree>
          <CustomInput name="product" label="Продукт" />
        </AllSpaceFree>
        <SecondaryButton padding="6px" alignself="end">
          <IconSearchBlack />
        </SecondaryButton>
      </PutRow>
      <CustomInput
        name="notes"
        label="Рабочие заметки"
        rules={[{ required: true, message: "Введите рабочие заметки!" }]}
      />
      <CustomInput name="priority" label="Приоритет" />
      <PutRow>
        <AllSpaceFree>
          <CustomTreeSelect
            label="Ответственный"
            treeData={dataTreeForm}
            showSearch={true}
            suffixIcon={null}
            allowClear={{ clearIcon: <IconCloseCircle /> }}
            value={form["responsible"]}
            onChange={(value) => onFormChange("responsible", value)}
          />
        </AllSpaceFree>
        <SecondaryButton padding="6px" size="32px" alignself="end">
          <IconPlus />
        </SecondaryButton>
        <SecondaryButton padding="6px" alignself="end">
          <IconSearchBlack />
        </SecondaryButton>
      </PutRow>
      <PutRow>
        <AllSpaceFree>
          <CustomTreeSelect
            label="Группа"
            treeData={dataTreeForm}
            showSearch={true}
            suffixIcon={null}
            allowClear={{ clearIcon: <IconCloseCircle /> }}
            value={form["group"]}
            onChange={(value) => onFormChange("group", value)}
          />
        </AllSpaceFree>
        <SecondaryButton padding="6px" size="32px" alignself="end">
          <IconPlus />
        </SecondaryButton>
        <SecondaryButton padding="6px" alignself="end">
          <IconSearchBlack />
        </SecondaryButton>
      </PutRow>
      <StretchingColumn column={column}>
        <CustomInput name="comments" label="Комментарии" />
      </StretchingColumn>
      <StretchingColumn column={column}>
        <PutRow>
          <AllSpaceFree>
            <CustomTreeSelect
              label="Согласующие"
              treeData={dataTreeForm}
              treeCheckable={true}
              showSearch={true}
              suffixIcon={null}
              allowClear={{ clearIcon: <IconCloseCircle /> }}
              value={form["concordants"]}
              onChange={(value) => onFormChange("concordants", value)}
            />
          </AllSpaceFree>
          <SecondaryButton padding="6px" size="32px" alignself="end">
            <IconPlus />
          </SecondaryButton>
          <SecondaryButton padding="6px" alignself="end">
            <IconSearchBlack />
          </SecondaryButton>
        </PutRow>
      </StretchingColumn>
      <PutRow>
        <AllSpaceFree>
          <CustomInput name="whenOpen" label="Когда открыто" />
        </AllSpaceFree>
        <SecondaryButton padding="6px" size="32px" alignself="end">
          <IconCalendar />
        </SecondaryButton>
      </PutRow>
      <PutRow>
        <AllSpaceFree>
          <CustomInput name="whenCreated" label="Когда создано" />
        </AllSpaceFree>
        <SecondaryButton padding="6px" size="32px" alignself="end">
          <IconCalendar />
        </SecondaryButton>
      </PutRow>
      <PutRow>
        <AllSpaceFree>
          <CustomTreeSelect
            label="Кем открыто"
            treeData={dataTreeForm}
            showSearch={true}
            suffixIcon={null}
            allowClear={{ clearIcon: <IconCloseCircle /> }}
            value={form["opened_by"]}
            onChange={(value) => onFormChange("opened_by", value)}
          />
        </AllSpaceFree>
        <SecondaryButton padding="6px" size="32px" alignself="end">
          <IconPlus />
        </SecondaryButton>
        <SecondaryButton padding="6px" alignself="end">
          <IconSearchBlack />
        </SecondaryButton>
      </PutRow>
      <PutRow>
        <AllSpaceFree>
          <CustomTreeSelect
            label="Кем создано"
            treeData={dataTreeForm}
            showSearch={true}
            suffixIcon={null}
            allowClear={{ clearIcon: <IconCloseCircle /> }}
            value={form["created_by"]}
            onChange={(value) => onFormChange("created_by", value)}
          />
        </AllSpaceFree>
        <SecondaryButton padding="6px" size="32px" alignself="end">
          <IconPlus />
        </SecondaryButton>
        <SecondaryButton padding="6px" alignself="end">
          <IconSearchBlack />
        </SecondaryButton>
      </PutRow>
    </StructureForm>
  );
}
