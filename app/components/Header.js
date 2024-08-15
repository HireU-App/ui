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

/*
  See all possible Zod objects at https://zod.dev/?id=objects
  See info on possible primitives at https://zod.dev/?id=primitives
  You can get super specific with strings: (https://zod.dev/?id=strings):
  - z.string().max(5);
  - z.string().min(5);
  - z.string().length(5);
  - z.string().email();
  - z.string().url();
  - z.string().emoji();
  - z.string().uuid();
  Or even combine them:
  - z.string().email().min(5).max(100);
  Note that properties are required by default, but you can make them optional:
  z.object({
   name: z.string().optional(),
  });
*/
