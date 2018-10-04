import { fetchMock } from 'fetch-mock';

export default () => {
  fetchMock.get(/http:\/\/fubar\.com\/person\/[a-zA-Z\s]*/, {
    val1: 1,
    val2: 2
  });

  fetchMock.get(/http:\/\/fubar\.com\/facility\/[1-9a-zA-Z\s]*/, {
      val3: 3,
      val4: 4
  });

  fetchMock.get(/http:\/\/fubar\.com\/exposure\/[1-9a-zA-Z\s]*/, {
    val5: 5
  });
};
