import { randomNumber } from "./utils.ts";
import * as fs from "fs/promises";
const GIT_HUB_TOKEN = import.meta.env.GIT_HUB_TOKEN;

type IconeInfo = {
  path: string;
  name: string;
};
/* 
export const randomIcones= async (loop:number) : Promise<Array<IconeInfo>> => {

    const res:Array<IconeInfo> = []

    const icones = await fs.readFile(".idea/httpRequests/icones.json")

    const data = JSON.parse(icones.toString())

    //const data = await icones()

    //await fs.writeFile(".idea/httpRequests/icones.json",JSON.stringify(data))

    for (let i = 0; i < loop; i++) {
        res.push(data[randomNumber(0,data.length)])
    }

    return res
} */

export const icones = async () => {
  console.log(GIT_HUB_TOKEN);

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
