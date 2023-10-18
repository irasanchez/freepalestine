//./components/CountriesAutoComplete.tsx

import { useEffect, useState } from "react";
import { SPHERES } from "../data";
import { Autocomplete } from "./UI";

type AutocompleteProps = {
    selectedSpheres: string[];
};

export default function SpheresAutocomplete(props: AutocompleteProps) {
    //a list to show on the dropdown when user types
    const [items, setItems] = useState<string[]>(SPHERES);
    const [value, setValue] = useState<string>("")



    useEffect(() => {
        //if there is no value, return the countries list.
        if (!value) {
            setItems(SPHERES);
            return;
        }

        //if the value changes, we filter items so that it can be filtered. and set it as new state
        const newItems = items
            .filter((p) => p.toLowerCase().includes(value.toLowerCase()))
            .sort();
        setItems(newItems);
    }, [value]);

    //use the common auto complete component here.
    return <Autocomplete {...props} items={items} value={value} onChange={(sphere) => {
        setValue(sphere);
        //@ts-ignore
        // setSelectedSpheres(selectedSpheres.includes(sphere) ? selectedSpheres.filter((selectedSphere) => {
        //     return selectedSphere !== sphere
        // }) : [...selectedSpheres, sphere])
    }} />;
};


