import * as React from 'react';
import { ScrollView } from 'react-native';
import * as S from './styles';

import HomeItem from '../../../components/molecules/HomeItem';
import { HomeItemColor } from '../../../styles/home_item';
import { IconType } from '../../../styles/icons';
import TitleText from '../../../components/molecules/TitleText';
import HomeworkItem from '../../../components/molecules/HomeworkItem';
import { HomeworkState } from '../../../styles/homework';
import Text from '../../../components/atoms/Text';
import { TColor, TSize } from '../../../styles/text';
import { Fonts } from '../../../styles/font';
import ScreenLimitator from '../../../components/atoms/ScreenLimitator';
import HorizontalLimitator from '../../../components/atoms/HorizontalLimitator';

const Home = () => (
  <ScrollView style={{ flex: 1 }}>
    <ScreenLimitator>
      <HorizontalLimitator>
        <S.WelcomeContainer>
          <TitleText title="¡Bienvenido Arupaka!" text="¿Que desea hacer hoy?" />
        </S.WelcomeContainer>
        <S.OptionsContainer>
          <HomeItem
            color={HomeItemColor.GREEN}
            text="Ver publicaciones"
            icon={IconType.NEWS}
          />
          <HomeItem
            color={HomeItemColor.BLUE}
            text="Marcar la asistencia"
            icon={IconType.ASSITANCE}
          />
          <HomeItem
            color={HomeItemColor.RED}
            text="Ver mis tareas"
            icon={IconType.VIEW_HOMEWORKS}
          />
        </S.OptionsContainer>

        <S.WelcomeContainer>
          <TitleText title="Entregas mas recientes" text="21 publicaciones entregadas" />
        </S.WelcomeContainer>

        <S.HomeworksContainer>
          <HomeworkItem
            course="Tarea de Matematica"
            state={HomeworkState.ok}
            date="12/12/12"
          />
          <HomeworkItem
            course="Tarea de Matematica"
            state={HomeworkState.ok}
            date="12/12/12"
          />
          <HomeworkItem
            course="Tarea de Matematica"
            state={HomeworkState.ok}
            date="12/12/12"
          />
          <HomeworkItem
            course="Tarea de Matematica"
            state={HomeworkState.ok}
            date="12/12/12"
          />
        </S.HomeworksContainer>

        <S.ViewAllContainer>
          <Text center color={TColor.BLUE} weight={Fonts.BOLD} size={TSize.NORMAL}>
            Ver todas las tareas restantes
          </Text>
        </S.ViewAllContainer>
      </HorizontalLimitator>
    </ScreenLimitator>
  </ScrollView>
);

export default Home;
