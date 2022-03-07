import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HomeIcon from "@mui/icons-material/Home";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { Button, Grid, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Select, { StylesConfig } from "react-select";
import BenefitModal from "./BenefitModal";

const options = ["A", "B", "C"].map((it) => ({ value: it, label: it }));

const initialBenefits = [
  "Excellent Health Care",
  "Daily Snacks",
  "Group Activis",
  "Volunteer",
  "Wellness",
  "Paid Time",
];

const selectStyles: StylesConfig<{}, false, never> = {
  control: (provided) => ({
    ...provided,
    height: "55px",
  }),
  indicatorSeparator: (provided) => ({
    display: "none",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "12px",
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    backgroundColor: "white",
    zIndex: 1000,
  }),
};

const Form = () => {
  const [benefits, setBenefits] = useState(initialBenefits);

  const [selectedBenefits, setSelectedBenefits] = useState<string[]>([]);

  const [open, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  const handleBenefits = (benefit: string) => {
    setSelectedBenefits((pre) => {
      const isSelected = pre.includes(benefit);
      if (isSelected) {
        return pre.filter((item) => item !== benefit);
      } else {
        return [...pre, benefit];
      }
    });
  };

  const handleSave = (newBenefits: string[]) => {
    setBenefits(newBenefits);
    handleClose();
  };

  return (
    <>
      <Box component="form" sx={{ p: 2 }} noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              id="outlined-basic"
              label="About Company"
              variant="outlined"
              rows={4}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="outlined-basic"
              label="Website(url)"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Select
              styles={selectStyles}
              options={options}
              placeholder="Select Industry*"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="outlined-basic"
              label="Company Size"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="outlined-basic"
              label="Headquarters"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="outlined-basic"
              label="Type"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="outlined-basic"
              label="Founded Year"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Specialties"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
        <Stack
          sx={{ mt: 3 }}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            sx={{
              color: "#F15A29",
              fontSize: 18,
              fontWeight: 500,
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Benefits
          </Box>
          <Button
            sx={{
              color: "black",
              borderRadius: 25,
              pt: 1,
              px: 2,
              border: "1px solid lightGray",
            }}
            onClick={() => setIsOpen(true)}
          >
            Add Benefits
          </Button>
        </Stack>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {benefits.map((benefit) => {
              const checked = selectedBenefits.includes(benefit);

              return (
                <Grid item xs={12} md={4} key={benefit}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    sx={{
                      backgroundColor: checked ? "#F77631" : "#FCFCFC",
                      border: "1px solid #C1C1C1",
                      p: 2,
                      borderRadius: 25,
                      cursor: "pointer",
                      color: checked ? "white" : "black",
                      transition: "0.2s all",
                    }}
                    onClick={() => handleBenefits(benefit)}
                  >
                    <HomeIcon sx={{ mr: 1 }} /> {benefit}
                    {checked ? (
                      <CheckCircleOutlineIcon sx={{ ml: "auto" }} />
                    ) : (
                      <RadioButtonUncheckedIcon sx={{ ml: "auto" }} />
                    )}
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ mt: 3 }}
        >
          <Button
            sx={{
              color: "black",
              borderRadius: 25,
              pt: 1,
              px: 2,
              border: "1px solid #2A3B8F",
              mr: 1,
            }}
          >
            Skip
          </Button>
          <Button
            sx={{
              color: "white",
              borderRadius: 25,
              pt: 1,
              pl: 2,
              border: "1px solid lightGray",
              backgroundColor: "#2A3B8F",
              ":hover": {
                backgroundColor: "#2A3B8F",
                color: "white",
              },
            }}
          >
            Save <ArrowCircleRightIcon sx={{ ml: 2 }} />
          </Button>
        </Stack>
      </Box>
      <BenefitModal
        handleSave={handleSave}
        open={open}
        handleClose={handleClose}
        benefits={benefits}
      />
    </>
  );
};

export default Form;
