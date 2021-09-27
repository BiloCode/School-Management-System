import { memo } from "react";
import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/table";

import FileTableRow from "@molecules/FileTableRow";

const FileTable = () => (
  <Table borderWidth={1} variant="simple">
    <Thead>
      <Tr>
        <Th px="0" w="32px" />
        <Th px="0" w="180px" textAlign="center">
          Nombre del Archivo
        </Th>
        <Th textAlign="center" w="160px">
          Tipo del Archivo
        </Th>
        <Th w="240px" textAlign="center">
          Fecha de Subida
        </Th>
        <Th w="160px" textAlign="center">
          Acceso
        </Th>
        <Th />
      </Tr>
    </Thead>
    <Tbody>
      <FileTableRow name="Juego del Calamar" type="VIDEO" />
      <FileTableRow name="Cuentas del Mes" type="RAR" />
      <FileTableRow name="Notas diarias" type="PDF" />
      <FileTableRow name="User_1002" type="IMAGE" />
    </Tbody>
  </Table>
);

export default memo(FileTable);
