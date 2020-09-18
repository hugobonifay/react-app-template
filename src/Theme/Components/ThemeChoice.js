import { FormControl, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MAIN_CHANGE_THEME } from "../../Redux/actionTypes";

const ThemeChoice = () => {
    const dispatch = useDispatch();
    const themeChoice = useSelector(state => state.main.theme);

    const handleChange = event => {
        const choice = event.target.value;
        localStorage.setItem("theme", choice);
        dispatch({ type: MAIN_CHANGE_THEME, theme: choice });
    }

    return (
        <FormControl component="fieldset">
            <RadioGroup 
                row 
                aria-label="themepreference" 
                name="themepreference" 
                defaultValue="top" 
                value={themeChoice}
                onChange={handleChange}
            >
                <FormControlLabel
                    value="light"
                    control={<Radio color="primary" />}
                    label="Light"
                    labelPlacement="top"
                />
                <FormControlLabel
                    value="dark"
                    control={<Radio color="primary" />}
                    label="Dark"
                    labelPlacement="top"
                />
                <FormControlLabel
                    value="yellow"
                    control={<Radio color="primary" />}
                    label="Yellow"
                    labelPlacement="top"
                />
            </RadioGroup>
        </FormControl>
    )
}

export default ThemeChoice;