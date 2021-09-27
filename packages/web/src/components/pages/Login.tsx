import { FormEvent, useState } from "react";
import { Button } from "@chakra-ui/button";
import { Flex, Grid } from "@chakra-ui/layout";

import CompanyImage from "@atoms/CompanyImage";
import FormControlCustom from "@atoms/FormControlCustom";
import FormControlPassword from "@atoms/FormControlPassword";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();

    setIsLoading(() => true);
  };

  return (
    <Flex w="100%" h="100vh" alignItems="center" justifyContent="center">
      <Grid
        as="form"
        rowGap="3em"
        width="360px"
        onSubmit={onSubmit}
        justifyItems="center"
      >
        <CompanyImage />
        <Grid w="full" rowGap="1em">
          <FormControlCustom
            label="Nombre Usuario (DNI)"
            placeholder="Escribe tu DNI..."
          />
          <FormControlPassword label="Contraseña" />
        </Grid>
        <Grid w="full" rowGap="5px">
          <Button type="submit" isLoading={isLoading} colorScheme="blue" w="100%">
            Ingresar al Sistema
          </Button>
          <Button disabled={isLoading} w="100%">
            Cambiar Tipo de Usuario
          </Button>
        </Grid>
      </Grid>
    </Flex>
  );
};

export default Login;
