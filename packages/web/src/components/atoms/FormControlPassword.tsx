import { FC, useState } from "react";

import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";

type Props = {
  label: string;
};

const FormControlPassword: FC<Props> = ({ label }) => {
  const [show, setShow] = useState(false);

  const onClick = () => setShow((show) => !show);

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <InputGroup size="md">
        <Input
          pr="5rem"
          type={show ? "text" : "password"}
          placeholder="Escriba su contraseña..."
        />
        <InputRightElement w="max-content" mr={1}>
          <Button _focus={{ border: "none" }} onClick={onClick} size="sm">
            {!show ? "Ver" : "Ocultar"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};

export default FormControlPassword;
