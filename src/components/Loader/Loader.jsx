import { LoaderStyled } from 'components/Form.styled';
import React from 'react';
import { Hourglass } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <LoaderStyled>
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#306cce', '#72a1ed']}
      />
    </LoaderStyled>
  );
};
