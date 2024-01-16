import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-10', // Asegúrate de ajustar la versión a la actual
  useCdn: false, // Desactiva la CDN para obtener datos en tiempo real
});

export default client;