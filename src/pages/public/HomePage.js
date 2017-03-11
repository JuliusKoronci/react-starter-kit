// @flow
import React from 'react';

import { Input, FormField } from '../../components';

const HomePage = () => (
  <div>
    Should just lay out components;
    <FormField WrappedNode={Input} placeholder="Test" returnValue={(val)=>console.log(val)} shouldReturnValue={true} />
  </div>
);

HomePage.displayName = 'HomePage';

export default HomePage;
