import React from 'react';
import Screen from '../../../Screen';
import ScrollToTop from '../../../ScrollToTopOnMount';
import CoC from '../../../Frame/CoC';

function CoCScreen() {
  return (
    <Screen name="coc">
      <ScrollToTop />
      <CoC />
    </Screen>
  );
}

export default CoCScreen;
