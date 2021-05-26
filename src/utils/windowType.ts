import { Mapping } from 'redux/domain';

export const windowType: Mapping = {
  6: 'full',
} as const;

const getOutputType = () => {
  const width = window.innerWidth;
  let outputType = 6;

  if (width > 1400) {

  }

  return outputType;
};

export {
  getOutputType,
};
