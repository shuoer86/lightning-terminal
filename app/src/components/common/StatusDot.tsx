import React from 'react';
import { styled } from 'components/theme';
import { Dot } from './icons';

const Styled = {
  DotIcon: styled(Dot)`
    &.success {
      color: ${props => props.theme.colors.green};
    }
    &.warn {
      color: ${props => props.theme.colors.orange};
    }
    &.error {
      color: ${props => props.theme.colors.pink};
    }
    &.idle {
      color: ${props => props.theme.colors.gray};
    }
  `,
};

interface Props {
  status: 'success' | 'warn' | 'error' | 'idle';
}

const StatusDot: React.FC<Props> = ({ status }) => {
  const { DotIcon } = Styled;
  return <DotIcon className={status} aria-label={status} />;
};

export default StatusDot;