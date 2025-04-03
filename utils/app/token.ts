import { type Message } from '@/types/chat';

import { get_encoding } from 'tiktoken';

export const config = { runtime: 'edge' };

const encoding = get_encoding('cl100k_base');

function estimateTokens(str: string): number {
  str = typeof str === 'string' ? str : JSON.stringify(str);
  const tokens = encoding.encode(str);
  return tokens.length;
}

export function estimateTokensFromMessages(messages: Message[]) {
  try {
    const tokensPerMessage = 3; // 3 tokens fixed cost per message
    let ret = 0;
    for (const msg of messages) {
      ret += tokensPerMessage;
      ret += estimateTokens(msg.content);
      ret += estimateTokens(msg.role);
    }
    ret += 3; // 3 tokens fixed cost for response
    return ret;
  } catch (e) {
    return 0;
  }
}
