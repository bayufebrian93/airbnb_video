'use client';

import Container from "../Container";
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill } from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md';
import { BsSnow } from 'react-icons/bs';
import { FaSkiing } from 'react-icons/fa'
import { IoDiamond } from 'react-icons/io5';
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'Lorem ipsum Beach'
  },
  {
    label: 'Windmills',
    icon: GiWindmill,
    description: 'Lorem ipsum Windmills'
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'Lorem ipsum Modern Villa'
  }
  ,
  {
    label: 'Countryside',
    icon: TbMountain,
    description: 'Lorem ipsum Modern Countryside'
  },
  {
    label: 'Pools',
    icon: TbPool,
    description: 'Lorem ipsum Modern pool'
  },
  {
    label: 'Islands',
    icon: GiIsland,
    description: 'Lorem ipsum Modern Islands'
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'Lorem ipsum Modern Lake'
  },
  {
    label: 'Skiing',
    icon: FaSkiing,
    description: 'Lorem ipsum Modern Skiing'
  },
  {
    label: 'Castles',
    icon: GiCastle,
    description: 'Lorem ipsum Modern Castles'
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: 'Lorem ipsum Modern Camp'
  },
  {
    label: 'Arctic',
    icon: BsSnow,
    description: 'Lorem ipsum Modern Arctic'
  },
  {
    label: 'Cave',
    icon: GiCaveEntrance,
    description: 'Lorem ipsum Modern Cave'
  },
  {
    label: 'Desert',
    icon: GiCactus,
    description: 'Lorem ipsum Modern has Desert'
  },
  {
    label: 'Barn',
    icon: GiBarn,
    description: 'Lorem ipsum Modern Barn',
  },
  {
    label: 'Lux',
    icon: IoDiamond,
    description: 'Lorem ipsum Modern Lux'
  },
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();

  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }
  return (
    <Container>
      <div
        className="
          pt-4
          flex
          flex-row
          items-center
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            description={item.description}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;