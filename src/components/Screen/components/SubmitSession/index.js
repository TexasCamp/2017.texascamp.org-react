import React from 'react';
import Screen from '../../../Screen';
import ScrollToTop from '../../../ScrollToTopOnMount';
import SubmitSession from '../../../Frame/SubmitSession';

function SubmitSessionScreen() {
  return (
    <Screen name="submitsession">
      <ScrollToTop />
      <SubmitSession />
    </Screen>
  );
}

export default SubmitSessionScreen;
