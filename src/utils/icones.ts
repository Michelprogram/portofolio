const GIT_HUB_TOKEN = import.meta.env.GIT_HUB_TOKEN;

type IconeInfo = {
  path: string;
  name: string;
};

export const icones = async () => {
  const url =
    "https://api.github.com/repos/Tarikul-Islam-Anik/Animated-Fluent-Emojis/contents/Emojis/";

  const categories = [
    "Animals",
    "Food",
    "Activities",
    "Travel & places",
    "Objects",
    "Symbols",
  ];

  const requests: Array<Promise<Array<IconeInfo>>> = [];

  categories.forEach((categorie) => {
    const send = async () => {
      const uri = url + encodeURIComponent(categorie);

      const request = await fetch(uri, {
        headers: {
          Authorization: "Bearer " + GIT_HUB_TOKEN,
        },
      });

      return (await request.json()) as Array<IconeInfo>;
    };

    requests.push(send());
  });

  const icones = await Promise.all(requests);

  return icones.reduce((acc, row) => acc.concat(row), []);
};
