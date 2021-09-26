import * as React from 'react';
import * as DocumentPicker from 'expo-document-picker';
import { FlatList, View } from 'react-native';
import * as S from './styles';

import { BSize } from '../../../styles/button';

import Text from '../../../components/atoms/Text';
import Button from '../../../components/atoms/Button';
import TopPageHeader from '../../../components/molecules/TopPageHeader';
import HorizontalLimitator from '../../../components/atoms/HorizontalLimitator';
import { TSize } from '../../../styles/text';
import HomeworkFileItem from '../../../components/molecules/HomeworkFileItem';
import CameraButton from '../../../components/atoms/CameraButton';
import { Fonts } from '../../../styles/font';

type TFile = {
  type: string;
  size: number;
  uri: string;
  name: string;
};

const HomeworkSend: React.FC = () => {
  const [files, setFiles] = React.useState<TFile[]>([]);
  const [isSend, setIsSend] = React.useState<boolean>(false);

  const fileCountMessage = React.useMemo(() => {
    const countFiles = files.length;

    if (countFiles === 0) {
      return 'Aun no ha subido ningun archivo.';
    }

    return countFiles > 1
      ? `${countFiles} elementos subidos`
      : `${countFiles} elemento subido`;
  }, [files]);

  const buttonMessage = React.useMemo(() => {
    if (isSend) return 'Enviando Tarea...';

    return 'Entregar Tarea';
  }, [isSend]);

  const onFilePickerDisplay = React.useCallback(async () => {
    const docs = await DocumentPicker.getDocumentAsync();

    if (docs.type === 'cancel') return;

    const newFile: TFile = {
      uri: docs.uri,
      size: docs.size,
      type: docs.type,
      name: docs.name
    };

    setFiles((files) => [...files, newFile]);
  }, []);

  const onSendHomework = () => {
    setIsSend(() => true);
  };

  return (
    <S.MainContainer>
      <HorizontalLimitator>
        <TopPageHeader />
        <S.PageContainer>
          <Text weight={Fonts.BOLD}>Entregar Tarea</Text>
          <S.InputContainer />
          <S.ActionsButton>
            <CameraButton />
            <S.ButtonContainer>
              <Button
                ghost
                size={BSize.SMALL}
                text="Elegir archivos de mi telefono"
                onPress={onFilePickerDisplay}
              />
            </S.ButtonContainer>
          </S.ActionsButton>
          <S.FileMessage>
            <Text size={TSize.SMALL}>{fileCountMessage}</Text>
          </S.FileMessage>
          <FlatList
            data={files}
            keyExtractor={(_, index) => String(index)}
            ItemSeparatorComponent={() => <View style={{ marginBottom: 5 }} />}
            renderItem={({ item }) => (
              <HomeworkFileItem course={item.name} file={item.name} />
            )}
          />
        </S.PageContainer>
      </HorizontalLimitator>
      <S.SendButtonContainer>
        <Button
          text={buttonMessage}
          onPress={onSendHomework}
          disabled={isSend || files.length === 0}
        />
      </S.SendButtonContainer>
    </S.MainContainer>
  );
};

export default HomeworkSend;
