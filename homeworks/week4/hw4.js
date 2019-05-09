const request = require('request');

request.get(
  {
    url: 'https://api.twitch.tv/helix/games/top',
    headers: {
      'Client-ID': 'k0q61qwn90bapyefs59xka2okfkw7z',
    },
  },
  (error, response, body) => {
    const obj = JSON.parse(body);
    obj.data.forEach((item) => {
      console.log(`${item.id} ${item.name}`);
    });
  },
);
