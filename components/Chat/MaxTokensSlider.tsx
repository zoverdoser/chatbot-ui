import { FC, useContext, useState } from 'react';

import { useTranslation } from 'next-i18next';

import { MAX_TOKENS_RANGE } from '@/utils/app/const';

import HomeContext from '@/pages/api/home/home.context';

interface Props {
  label: string;
  onChangeMaxToken: (maxToken: number) => void;
}

export const MaxTokensSlider: FC<Props> = ({ label, onChangeMaxToken }) => {
  const {
    state: { conversations },
  } = useContext(HomeContext);
  const lastConversation = conversations[conversations.length - 1];
  const [maxTokens, setMaxTokens] = useState(
    lastConversation?.maxTokens ?? MAX_TOKENS_RANGE.DEFAULT,
  );
  const { t } = useTranslation('chat');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    setMaxTokens(newValue);
    onChangeMaxToken(newValue);
  };

  return (
    <div className="flex flex-col">
      <label className="mb-2 text-left text-neutral-700 dark:text-neutral-400">
        {label}
      </label>
      <span className="text-[12px] text-black/50 dark:text-white/50 text-sm">
        {t(
          'Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.',
        )}
      </span>
      <span className="mt-2 mb-1 text-center text-neutral-900 dark:text-neutral-100">
        {maxTokens}
      </span>
      <input
        className="cursor-pointer"
        type="range"
        min={MAX_TOKENS_RANGE.MIN}
        max={MAX_TOKENS_RANGE.MAX}
        step={1}
        value={maxTokens}
        onChange={handleChange}
      />
      <ul className="w mt-2 pb-8 flex justify-between px-[24px] text-neutral-900 dark:text-neutral-100">
        <li className="flex justify-center">
          <span className="absolute">{MAX_TOKENS_RANGE.MIN}</span>
        </li>
        <li className="flex justify-center">
          <span className="absolute">{MAX_TOKENS_RANGE.MAX}</span>
        </li>
      </ul>
    </div>
  );
};
