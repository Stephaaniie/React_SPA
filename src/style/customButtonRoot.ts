import { styled } from '@mui/system';
import { orange } from "@mui/material/colors";

export const CustomButtonRoot = styled('button')`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  line-height: 1.5;
  background-color: ${orange[500]};
  color: white;
  border-radius: 8px;
  font-weight: 600;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 150ms ease;
  border: none;

  &:hover {
    background-color: ${orange[600]};
  }

  &.active {
    background-color: ${orange[700]};
  }

  &.focusVisible {
    box-shadow: 0 4px 20px 0 rgb(61 71 82 / 0.1), 0 0 0 5px rgb(0 127 255 / 0.5);
    outline: none;
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
