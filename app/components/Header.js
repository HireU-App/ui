//practice example
import React from 'react';
import zop from 'zod-props';
import { z } from 'zod';

const Props = z.object({
  name: z.string(),
  number: z.number().optional(),
});

function Header({ name, number }) {
  return (
    <>
      <h1>Example heading by {name}</h1>
      <p>The world is round, or is it??</p>
      {number && <p>Number is {number}</p>}
    </>
  );
}

export default zop(Header, Props);
