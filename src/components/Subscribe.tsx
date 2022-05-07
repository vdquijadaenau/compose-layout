import { Stack } from "./StyledComponents";

export default function Subscribe() {
  return (
    <Stack gutter='xl'>
      <Stack gutter='md'>
        <h2>Subscribe to our Newsletter</h2>
        <p>
          Subscribe to our newsletter to keep up to date on all our amazing
          products.
        </p>
      </Stack>

      <Stack>
        <Stack gutter='sm'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' />
        </Stack>

        <Stack gutter='sm'>
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' />
        </Stack>

        <button>Susbcribe</button>
      </Stack>
    </Stack>
  );
}
