import { FC, HTMLInputTypeAttribute } from "react";

import { Input } from "@chakra-ui/input";
import { FormControl, FormLabel } from "@chakra-ui/form-control";

type Props = {
  label: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
};

const FormControlCustom: FC<Props> = ({ type, placeholder, label }) => (
  <FormControl>
    <FormLabel>{label}</FormLabel>
    <Input placeholder={placeholder} type={type} />
  </FormControl>
);

FormControlCustom.defaultProps = {
  type: "text"
};

export default FormControlCustom;
