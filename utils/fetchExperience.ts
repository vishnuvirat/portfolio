import { Experience } from "../pages/api/typings";

export const fetchExperience = async() => {
  const res = await fetch(`http://localhost:3000/api/getExperience`);

  const data = await res.json();
  const experiences : Experience[] = data.experiences;


  console.log("fetching", experiences);

  return experiences || null;
  
}