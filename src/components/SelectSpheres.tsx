import { useCallback, useState } from "react";
import { ReactTags, TagSelected } from "react-tag-autocomplete";
import { SPHERES } from "../data"


const suggestions = SPHERES.map((sphere: string, index: number)=> {
    return {
        value: index,
        label: sphere
    }
})

export default function SelectSpheres() {
  const [selected, setSelected] = useState<TagSelected[]>([]);

  const onAdd = useCallback(
    (newTag: TagSelected) => {
        //@ts-ignore
      setSelected([...selected, newTag]);
    },
    [selected]
  );

  const onDelete = useCallback(
    (tagIndex: number) => {
      setSelected(selected.filter((_, i) => i !== tagIndex));
    },
    [selected]
  );

  return (
    <ReactTags
      classNames={{
        root: 'react-tags card ',
        rootIsActive: 'is-active',
        rootIsDisabled: 'is-disabled',
        rootIsInvalid: 'is-invalid',
        label: 'react-tags__label ',
        tagList: 'react-tags__list bg-neutral-100 rounded-lg flex list-none flex-wrap',
        tagListItem: 'react-tags__list-item badge-primary mr-1 px-3 rounded-full font-bold',
        tag: 'react-tags__tag ',
        tagName: 'react-tags__tag-name',
        comboBox: 'react-tags__combobox ',
        input: 'react-tags__combobox-input px-2 h-16 border-2 w-full rounded-lg',
        listBox: 'react-tags__listbox bg-neutral-100 rounded-lg p-2',
        option: 'react-tags__listbox-option',
        optionIsActive: 'is-active font-bold',
        highlight: 'react-tags__listbox-option-highlight',
      }}
      labelText="Your spheres of influence:"
      placeholderText="Search for a state, skill, role, community, etc."
      selected={selected}
      suggestions={suggestions}
      onAdd={onAdd}
      onDelete={onDelete}
      noOptionsText="No matching spheres of influence"
      allowResize={false}
    />
  );
}

