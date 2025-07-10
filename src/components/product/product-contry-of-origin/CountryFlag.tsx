// 'use client';

import Image from 'next/image';

interface Props {
  country: String;
}

const countries = [
  {
    idCountry: 'japan',
    url: 'https://flagcdn.com/w40/jp.png',
    countryName: 'Japón',
  },
  {
    idCountry: 'korea',
    url: 'https://flagcdn.com/w40/kr.png',
    countryName: 'Corea',
  },
  {
    idCountry: 'china',
    url: 'https://flagcdn.com/w40/cn.png',
    countryName: 'China',
  },
  {
    idCountry: 'other',
    url: 'https://flagcdn.com/w40/cy.png',
    countryName: 'Sin pais',
  },
];
export const CountryFlag = ({ country: originCountry }: Props) => {
  const country = countries.find((c) => c.idCountry === originCountry);

  return (
    country && (
      <div className="flex items-center gap-2">
        <Image
          src={country!.url}
          alt={`${country?.idCountry}'s flag`}
          className="w-5 h-4 object-cover rounded-sm border border-gray-300"
          width={5}
          height={5}
        />
        <span className="text-xs font-medium">{country?.countryName}</span>
      </div>
    )
  );
};
