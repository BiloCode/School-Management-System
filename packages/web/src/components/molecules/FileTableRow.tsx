import { ChangeEvent, FC, useCallback, useMemo, useState } from "react";

import { Input } from "@chakra-ui/input";
import { Td, Tr } from "@chakra-ui/table";
import { Button } from "@chakra-ui/button";
import { Badge, Text } from "@chakra-ui/layout";

import Icon from "@chakra-ui/icon";
import {
  AiOutlineEdit,
  AiFillDelete,
  AiOutlineFilePdf,
  AiOutlineFileExcel,
  AiOutlineFileImage,
  AiOutlineVideoCamera,
  AiOutlineClose,
  AiOutlineSave,
  AiOutlineFileWord,
  AiOutlineFileZip,
  AiOutlineCloudDownload
} from "react-icons/ai";

import useActive from "@hooks/useActive";

import { FileType } from "@school/types";

import IconTooltip from "@atoms/IconTooltip";

type Props = {
  name: string;
  type?: keyof typeof FileType;
};

const FileTableRow: FC<Props> = ({ type, name }) => {
  const editMode = useActive();

  const [fileName, setFileName] = useState(name);

  const onChangeFileName = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    setFileName(() => ev.target.value);
  }, []);

  const fileIcon = useMemo(() => {
    if (type === "EXCEL") return AiOutlineFileExcel;
    if (type === "IMAGE") return AiOutlineFileImage;
    if (type === "WORD") return AiOutlineFileWord;
    if (type === "PDF") return AiOutlineFilePdf;
    if (type === "RAR") return AiOutlineFileZip;
    if (type === "VIDEO") return AiOutlineVideoCamera;

    return undefined;
  }, [type]);

  const fileType = useMemo(() => {
    if (type === "EXCEL") return "Excel";
    if (type === "IMAGE") return "Imagen";
    if (type === "WORD") return "Word";
    if (type === "PDF") return "Pdf";
    if (type === "RAR") return "Rar";
    if (type === "VIDEO") return "Video";

    return "Desconocido";
  }, [type]);

  return (
    <Tr>
      <Td>
        <Icon w={6} h={6} as={fileIcon} />
      </Td>
      <Td px="0" textAlign="center" color="gray.600">
        {editMode.active ? (
          <Input
            autoFocus
            type="text"
            textAlign="center"
            defaultValue={fileName}
            onChange={onChangeFileName}
          />
        ) : (
          <Text maxW="180px" isTruncated>
            {fileName}
          </Text>
        )}
      </Td>
      <Td textAlign="center">
        <Badge>{fileType}</Badge>
      </Td>
      <Td color="gray.600" textAlign="center">
        13 de Diciembre, 2018
      </Td>
      <Td textAlign="center">
        <Button size="sm">Compartir</Button>
      </Td>
      <Td display="flex" justifyContent="center" gridGap="5px">
        {!editMode.active && (
          <>
            <IconTooltip
              label="Descargar"
              icon={AiOutlineCloudDownload}
              ariaLabel="download"
            />
            <IconTooltip
              label="Editar Nombre"
              icon={AiOutlineEdit}
              ariaLabel="edit"
              onClick={editMode.onActive}
            />
            <IconTooltip label="Borrar" icon={AiFillDelete} ariaLabel="trash" />
          </>
        )}

        {editMode.active && (
          <>
            <IconTooltip
              ariaLabel="save"
              label="Guardar"
              icon={AiOutlineSave}
              onClick={editMode.onDeactive}
            />
            <IconTooltip
              ariaLabel="close"
              label="Cancelar"
              icon={AiOutlineClose}
              onClick={editMode.onDeactive}
            />
          </>
        )}
      </Td>
    </Tr>
  );
};

export default FileTableRow;
