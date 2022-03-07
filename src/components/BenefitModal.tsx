import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import CloseIcon from "@mui/icons-material/Close";
import { Button, IconButton, Modal, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { FC, useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "98%",
  maxWidth: 800,
  bgcolor: "white",
  boxShadow: 24,
  p: 2,
  borderRadius: 2,
  overflow: "auto",
  maxHeight: "98%",
};

interface IProps {
  open: boolean;
  handleClose: () => void;
  handleSave: (benefits: string[]) => void;
  benefits: string[];
}

const benefits = [
  "Excellent Health Care",
  "Daily Snacks",
  "Group Activis",
  "Volunteer",
  "Wellness",
  "Paid Time",
  "Tuition Reimbursement",
  "Family and Medical",
  "Disability Insurance",
  "Commuter Benefits",
  "Retirement Savings",
];

const BenefitModal: FC<IProps> = ({
  open,
  handleClose,
  handleSave,
  benefits: items,
}) => {
  const [selectedBenefits, setSelectedBenefits] = useState<string[]>(items);

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

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ borderBottom: "1px solid lightgray" }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontSize: 16 }}
          >
            Add Benefits
          </Typography>
          <IconButton
            onClick={handleClose}
            color="primary"
            aria-label="close"
            component="span"
            size="small"
          >
            <CloseIcon />
          </IconButton>
        </Stack>
        <Box sx={{ mt: 1 }}>
          <Box sx={{ backgroundColor: "#F7F7F7", p: 1, borderRadius: 5 }}>
            <Box sx={{ mb: 2 }}>Choose Benefit to Add</Box>
            <Stack direction="row" alignItems="center" flexWrap="wrap">
              {benefits.map((benefit) => {
                const checked = selectedBenefits.includes(benefit);

                return (
                  <Stack
                    key={benefit}
                    direction="row"
                    alignItems="center"
                    sx={{
                      backgroundColor: checked ? "#F77631" : "#FCFCFC",
                      border: "1px solid #C1C1C1",
                      p: 1,
                      borderRadius: 25,
                      cursor: "pointer",
                      color: checked ? "white" : "black",
                      transition: "0.2s all",
                      m: 0.5,
                    }}
                    onClick={() => handleBenefits(benefit)}
                  >
                    {benefit} <AddBoxRoundedIcon sx={{ ml: 1 }} />
                  </Stack>
                );
              })}
            </Stack>
          </Box>
          <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="flex-end"
              sx={{ mt: 3 }}
            >
              <Button
                onClick={handleClose}
                sx={{
                  color: "black",
                  borderRadius: 25,
                  pt: 1,
                  px: 3,
                  border: "1px solid #2A3B8F",
                  mr: 1,
                }}
              >
                Back
              </Button>
              <Button
                onClick={() => handleSave(selectedBenefits)}
                sx={{
                  color: "white",
                  borderRadius: 25,
                  pt: 1,
                  px: 3,
                  border: "1px solid lightGray",
                  backgroundColor: "#2A3B8F",
                  ":hover": {
                    backgroundColor: "#2A3B8F",
                    color: "white",
                  },
                }}
              >
                Save
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default BenefitModal;
