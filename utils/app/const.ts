export const DEFAULT_SYSTEM_PROMPT =
  process.env.DEFAULT_SYSTEM_PROMPT ||
  "You are a helpful, respectful and honest assistant. Follow the user's instructions carefully. Respond using markdown.";

export const OPENAI_API_HOST =
  process.env.OPENAI_API_HOST || 'https://api.openai.com';

export const DEFAULT_TEMPERATURE = parseFloat(
  process.env.NEXT_PUBLIC_DEFAULT_TEMPERATURE || '1',
);

export const MAX_TOKENS_RANGE = {
  MIN: 100,
  MAX: 2048,
  DEFAULT: Number(process.env.NEXT_PUBLIC_DEFAULT_MAX_TOKEN || '1024'),
};

export const OPENAI_API_TYPE = process.env.OPENAI_API_TYPE || 'openai';

export const OPENAI_API_VERSION =
  process.env.OPENAI_API_VERSION || '2023-03-15-preview';

export const OPENAI_ORGANIZATION = process.env.OPENAI_ORGANIZATION || '';

export const AZURE_DEPLOYMENT_ID = process.env.AZURE_DEPLOYMENT_ID || '';
