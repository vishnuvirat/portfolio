import { Socials } from "../pages/api/typings";

export const fetchSocials = async() => {
  const res = await fetch(`http://localhost:3000/api/getSocials`);

  const data = await res.json();
  const socials : Socials[] = data.socials;


  // console.log("fetching", socials);

  return socials;
  
}