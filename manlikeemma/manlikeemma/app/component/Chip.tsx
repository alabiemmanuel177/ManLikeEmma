import * as React from "react";
import { useEffect, useState } from "react";

import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import axios from "axios";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

interface TechnologiesProps {
  saveSkillsToDatabase: (skillsToSave: string[]) => Promise<void>;
  selectedSkills: string[];
  handleChangeSkill: (index: number, newValue: string) => void;
  skills: string[];
  handleDeleteChip: (index: number) => void;
  handleAddSkill: () => void;
}

export const Technologies: React.FC<TechnologiesProps> = ({
  saveSkillsToDatabase,
  selectedSkills,
  handleChangeSkill,
  skills,
  handleDeleteChip,
  handleAddSkill,
}) => {
  // Use local state to track selectedSkills internally
  const [localSelectedSkills, setLocalSelectedSkills] = useState<string[]>([]);

  // Update localSelectedSkills when selectedSkills prop changes
  useEffect(() => {
    setLocalSelectedSkills(selectedSkills);
  }, [selectedSkills]);

  return (
    <div className="mt-4">
      <label>Technologies Used</label>

      <Paper
        sx={{
          display: "flex",
          justifyContent: "left",
          flexWrap: "wrap",
          listStyle: "none",
          backgroundColor: "transparent",
          border: "none",
          p: 0.5,
          m: 0,
          width: "60%",
          boxShadow: "none",
        }}
        component="ul"
      >
        {localSelectedSkills.map((skill, index) => (
          <ListItem key={index}>
            <Autocomplete
              value={skill}
              onChange={(_, newValue) =>
                handleChangeSkill(index, newValue || "")
              }
              options={skills}
              renderInput={(params) => (
                <TextField {...params} label="Search Skills" className="w-96" />
              )}
              clearOnBlur
            />
            {skill !== "" && (
              <Chip label={skill} onDelete={() => handleDeleteChip(index)} />
            )}
          </ListItem>
        ))}
      </Paper>

      <div
        className=" w-28 border-solid font-semibold rounded-full p-1 border-2 border-teal-custom hover:bg-teal-custom hover:text-white hover:font-semibold"
        onClick={handleAddSkill}
      >
        Add Skills +
      </div>
    </div>
  );
};
