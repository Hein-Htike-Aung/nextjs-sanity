import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: '8jlph3xw',
  dataset: 'production',
  apiVersion: '2022-10-13',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
