import React, { useState } from 'react';
import { test } from '@domains/test';

function App() {
  return <div>{test('world')}</div>;
}

export default App;
