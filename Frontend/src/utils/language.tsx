import React, { useEffect, useState } from 'react';
import { getCookie, hasCookie, setCookie, deleteCookie } from 'cookies-next';
import {
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from '@mui/material';

interface LanguageOption {
  label: string;
  value: string;
}

const languages: LanguageOption[] = [
  { label: 'English', value: '/auto/en' },
  { label: 'Polish', value: '/auto/pl' },
  { label: 'Portuguese', value: '/auto/pt' },
];

const languagesCode: Record<string, string> = {
  '/auto/en': 'English',
  '/auto/pl': 'Polish',
  '/auto/pt': 'Portuguese',
};

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const GoogleTranslate: React.FC = () => {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'auto',
        autoDisplay: false,
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      'google_translate_element'
    );
  };

  const cookieValue = getCookie('googtrans') as string | undefined;
  const [selected, setSelected] = useState('English');

  useEffect(() => {
    const addScript = document.createElement('script');
    addScript.setAttribute(
      'src',
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    );
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = googleTranslateElementInit;
    setSelected(cookieValue ? languagesCode[cookieValue] : 'English');
  }, [cookieValue]);

  const langChange = (e: SelectChangeEvent<string>) => {
    const value = e.target.value;
    if (hasCookie('googtrans')) {
      if (getCookie('googtrans') !== value) {
        deleteCookie('googtrans');
        setCookie('googtrans', value);
        setSelected(languagesCode[value]);
      }
    } else {
      setCookie('googtrans', value);
      setSelected(languagesCode[value]);
    }
  };

  return (
    <FormControl sx={{ minWidth: 120 }} size="small" translate="no">
      <Select
        value={selected}
        onChange={langChange}
        input={<OutlinedInput sx={{ color: '#fff' }} />}
        renderValue={(selected) => selected}
        sx={{ background: '#000' }}
      >
        {languages.map((ld) => (
          <MenuItem
            sx={{ color: '#000' }}
            key={ld.label}
            value={ld.value}
            translate="no"
          >
            {ld.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default GoogleTranslate;
