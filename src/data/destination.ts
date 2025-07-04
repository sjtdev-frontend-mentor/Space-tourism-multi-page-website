export interface Planet {
  id: string;
  name: string;
  image: string;
  description: string;
  distance: string;
  travelTime: string;
}

export const planets: Planet[] = [
  {
    id: "moon",
    name: "MOON",
    image: "assets/destination/image-moon.png",
    description: "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travelTime: "3 days",
  },
  {
    id: "mars",
    name: "MARS",
    image: "assets/destination/image-mars.png",
    description: "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
    distance: "225 mil. km",
    travelTime: "9 months",
  },
  {
    id: "europa",
    name: "EUROPA",
    image: "assets/destination/image-europa.png",
    description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travelTime: "3 years",
  },
  {
    id: "titan",
    name: "TITAN",
    image: "assets/destination/image-titan.png",
    description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travelTime: "7 years",
  },
];
