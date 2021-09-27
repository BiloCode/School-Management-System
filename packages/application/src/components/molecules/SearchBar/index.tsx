import * as React from 'react';
import * as S from './styles';

import Icon from '../../atoms/Icon';
import Input from '../../atoms/Input';

type TProps = {
  onChangeText?(text: string): void;
};

const SearchBar = ({ onChangeText }: TProps) => (
  <S.Container>
    <S.Icon>
      <Icon icon="SEARCH" />
    </S.Icon>
    <Input placeholder="Busca por nombre..." onChangeText={onChangeText} />
  </S.Container>
);

export default SearchBar;
