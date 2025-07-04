export interface Technology {
  id: string;
  name: string;
  imageLandscape?: string;
  imagePortrait?: string;
  description: string;
}

export const technologies: Technology[] = [
  {
    id: "1",
    name: "Launch vehicle",
    imageLandscape: "assets/technology/image-launch-vehicle-landscape.jpg",
    imagePortrait: "assets/technology/image-launch-vehicle-portrait.jpg",
    description: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring`,
  },
  {
    id: "2",
    name: "Spaceport",
    imageLandscape: "assets/technology/image-spaceport-landscape.jpg",
    imagePortrait: "assets/technology/image-spaceport-portrait.jpg",
    description: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`,
  },
  {
    id: "3",
    name: "Space capsule",
    imageLandscape: "assets/technology/image-space-capsule-landscape.jpg",
    imagePortrait: "assets/technology/image-space-capsule-portrait.jpg",
    description: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
  },
];
