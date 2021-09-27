import { Colors } from './colors';

export enum BColor {
  RED = Colors.RED,
  BLUE = Colors.BLUE,
  WHITE = Colors.WHITE
}

export enum BSize {
  SMALL = '32px',
  NORMAL = '48px'
}

export const BTextSize: Record<keyof typeof BSize, string> = {
  SMALL: '13px',
  NORMAL: '14px'
};
