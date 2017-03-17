import React from 'react';
import Page from '../../Page';
import Title from '../../Title';
import Content from '../../Content';

function Sessions() {
  const classes = ['one-col'];

  return (
    <Page name="code-of-conduct" classes={classes}>
      <Title level="h2" title="Code of Conduct" />
      <Content classes={['content--body']}>
        <p>Texas Camp is an event where all participants can
        freely and openly share ideas in a friendly, safe and welcoming
        environment that encourages and inspires mutual respect and
        collaboration. Attendees, speakers, sponsors, volunteers and others are
        expected to treat all conference participants with dignity and
        respect.</p>

        <p>To get support or report an incident during or around the event,
        contact our community volunteers:</p>

        <p>Stephanie El-Hajj<br />
          email: stephanie@amazeelabs.com<br />
        phone: 512-766-4312</p>

        <p>We do not tolerate harassment in any form. If you feel threatened or
        violated as a result of intimidating, harassing, abusive,
        discriminatory, derogatory or demeaning conduct, please immediately
        notify a conference organizer or designated community volunteer.
        Further, please immediately notify an organizer if you notice that
        someone else is being subjected to such behavior.</p>

        <p>The Texas Camp team wants everyone to feel safe for the duration of
        the conference. If necessary, conference organizers are empowered to
        take appropriate actions that may include but are not limited to:
        warnings, expulsion from the conference without refund, and referrals to
        venue security or local law enforcement.</p>

        <p><strong>If you have any questions about this policy, please contact
        Stephanie El-Hajj.</strong></p>

        <p>The Texas Camp Code of Conduct is based on the MidCamp Code of
        Conduct, which is licensed under a&nbsp;
          <a href="http://creativecommons.org/licenses/by-sa/3.0/">Creative
          Commons Attribution 3.0 Unported License</a>&nbsp;
        and is available for others
        to use and adapt for their own events.</p>
      </Content>
    </Page>
  );
}

export default Sessions;
