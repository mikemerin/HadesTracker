import React from 'react';
import { connect } from 'react-redux';

import images from 'assets/images';

type Props = {
  name: string
};

const Boon = ({
  name
}: Props) => {
  const generateBoonTable = () => (
    <table><tbody><tr>
      <td><img {...images[name]} alt={images[name].alt} /></td>
      <td>{name}</td>
    </tr></tbody></table>
  );

  return (
    generateBoonTable()
  );
};

export default connect(null, null)(Boon);
