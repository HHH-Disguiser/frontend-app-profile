import { mapSaveProfileRequestData } from './ProfileApiService';

describe('mapDataForRequest', () => {
  it('should modify props according to prop modifier strings and functions', () => {
    const props = {
      favoriteColor: 'red',
      age: 30,
      petName: 'Donkey',
      fullName: 'Donkey McWafflebatter',
      userLocation: 'US',
      education: 'BS',
      socialLinks: [
        {
          platform: 'twitter',
          socialLink: null,
        },
        {
          platform: 'facebook',
          socialLink: 'https://www.facebook.com',
        },
      ],
    };
    const result = mapSaveProfileRequestData(props);
    expect(result).toEqual({
      favoriteColor: 'red',
      age: 30,
      petName: 'Donkey',
      name: 'Donkey McWafflebatter',
      country: 'US',
      levelOfEducation: 'BS',
      socialLinks: [
        {
          platform: 'facebook',
          socialLink: 'https://www.facebook.com',
        },
      ],
    });
  });
});