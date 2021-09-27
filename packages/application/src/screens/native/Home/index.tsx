import * as React from 'react';
import { ScrollView } from 'react-native';
import * as S from './styles';

import { HomeworkState } from '../../../styles/homework';
import { HomeItemColor } from '../../../styles/home_item';

import Text from '../../../components/atoms/Text';
import HomeItem from '../../../components/molecules/HomeItem';
import TitleText from '../../../components/molecules/TitleText';
import HomeworkItem from '../../../components/molecules/HomeworkItem';
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
          <HomeItem color={HomeItemColor.GREEN} text="Ver publicaciones" icon="NEWS" />
          <HomeItem
            color={HomeItemColor.BLUE}
            text="Marcar la asistencia"
            icon="ASSITANCE"
          />
          <HomeItem
            color={HomeItemColor.RED}
            text="Ver mis tareas"
            icon="VIEW_HOMEWORKS"
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
          <Text center color="BLUE" weight="BOLD" size="NORMAL">
            Ver todas las tareas restantes
          </Text>
        </S.ViewAllContainer>
      </HorizontalLimitator>
    </ScreenLimitator>
  </ScrollView>
);

export default Home;
