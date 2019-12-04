import { Box } from 'rebass';
import styled from 'styled-components';

const Container = styled(Box)({
  maxWidth: '1440px',
});

Container.defaultProps = {
  mx: 'auto',
};

export default Container;
