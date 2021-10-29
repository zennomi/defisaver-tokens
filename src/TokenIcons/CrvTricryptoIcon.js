import React from 'react';
import { v4 as uuid } from 'uuid';

export default function CrvEursIcon(props) {
  const id = `crv_eurs_icon_${uuid()}`;
  const id1 = `1_${id}`;
  const id2 = `2_${id}`;
  const id3 = `3_${id}`;
  const id4 = `4_${id}`
  const fill1 = `url(#${id1})`;
  const fill2 = `url(#${id2})`;
  const fill3 = `url(#${id3})`;
  const fill4 = `url(#${id4})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill1} fillOpacity="0.9"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M52.1977 129.449C49.1276 127.653 47.25 124.454 47.25 121.018V101.835C47.25 101.101 47.4556 100.393 47.8393 99.7636C49.0317 97.7966 51.6769 97.1282 53.7327 98.2819L98.9882 123.522C101.633 125.004 103.264 127.706 103.264 130.642V150.52C103.264 151.425 103.004 152.33 102.51 153.103C101.016 155.437 97.8366 156.172 95.397 154.742L52.1977 129.449ZM119.656 93.0238C122.301 94.5055 123.932 97.2069 123.932 100.144V140.476C123.932 141.67 123.26 142.771 122.178 143.348L112.268 148.685C112.145 148.75 112.008 148.803 111.871 148.842V126.447C111.871 123.549 110.281 120.861 107.677 119.366L67.9315 96.6167V71.3366C67.9315 70.6023 68.1371 69.8943 68.5208 69.2649C69.7132 67.2981 72.3584 66.6294 74.4141 67.7832L119.656 93.0238ZM139.46 63.2333C142.119 64.7019 143.75 67.4292 143.75 70.3663V129.279C143.75 130.485 143.051 131.599 141.941 132.177L132.552 137.028V96.0134C132.552 93.1159 130.963 90.4408 128.373 88.9459L87.7495 65.6329V41.6509C87.7495 40.9166 87.9551 40.2086 88.3252 39.5792C89.5175 37.6124 92.1627 36.9437 94.2186 38.0844L139.46 63.2333Z" fill="white"/>
      <circle cx="44.5" cy="44.5" r="43" fill={fill2} stroke="white" strokeWidth="3"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M50.7334 37.7203C50.7334 42.3959 43.4407 41.827 41.1238 41.827V33.5901C43.4407 33.5901 50.7334 32.8576 50.7334 37.7203ZM52.6383 50.5082C52.6383 55.6202 43.8994 55.0358 41.116 55.0358V45.965C43.8994 45.9728 52.6383 45.1701 52.6383 50.5082ZM58.3916 35.8734C57.9251 30.9951 53.7267 29.3586 48.4166 28.8599V22.1348H44.3115V28.7274C43.2308 28.7274 42.1267 28.7274 41.0305 28.7664V22.1348H36.9487V28.8989H34.3364H28.6297V33.3018C28.6297 33.3018 31.6619 33.2472 31.6152 33.3018C32.7519 33.1763 33.7828 33.9758 33.9477 35.1097V53.6331C33.8979 54.4365 33.2083 55.0467 32.4067 54.9976C32.402 54.9976 32.3974 54.9976 32.3927 54.9968C32.4471 55.0435 29.4072 54.9968 29.4072 54.9968L28.5908 59.914H33.9399H36.8788V66.7872H40.9838V60.0153H44.2648V66.756H48.3777V59.9608C55.3128 59.54 60.1487 57.8256 60.7552 51.3186C61.245 46.0819 58.7881 43.7441 54.8619 42.8011C57.2487 41.5855 58.7493 39.4425 58.3916 35.8734Z" fill="white"/>
      <circle cx="148.5" cy="44.5" r="43" fill={fill3} stroke="white" strokeWidth="3"/>
      <path d="M148.681 17.5232L148.319 18.7521V54.413L148.681 54.7739L165.234 44.9892L148.681 17.5232Z" fill="#DEDEDE"/>
      <path d="M148.683 17.5232L132.129 44.9892L148.683 54.774V37.4653V17.5232Z" fill="white"/>
      <path d="M148.682 57.9094L148.478 58.1577V70.8609L148.682 71.456L165.245 48.1296L148.682 57.9094Z" fill="#DEDEDE"/>
      <path d="M148.683 71.4561V57.9094L132.129 48.1296L148.683 71.4561Z" fill="white"/>
      <path d="M148.685 54.774L165.238 44.9895L148.685 37.4656V54.774Z" fill="#BDBDBD"/>
      <path d="M132.129 44.9895L148.682 54.7742V37.4656L132.129 44.9895Z" fill="#DEDEDE"/>
      <circle cx="96.5" cy="44.5" r="43" fill={fill4} stroke="white" strokeWidth="3"/>
      <path d="M100.866 40.0349V34.2211H114.177V25.3628H77.9316V34.2211H91.2439V40.0302C80.4249 40.5265 72.29 42.6667 72.29 45.2304C72.29 47.7942 80.4288 49.9343 91.2439 50.4338V69.0563H100.87V50.4322C111.669 49.9343 119.787 47.7958 119.787 45.2343C119.787 42.6729 111.669 40.5344 100.87 40.0365L100.866 40.0349ZM100.87 48.8549V48.8502C100.598 48.8674 99.2027 48.951 96.0959 48.951C93.612 48.951 91.8645 48.8807 91.2486 48.8486V48.8565C81.6903 48.4336 74.5556 46.771 74.5556 44.7818C74.5556 42.7925 81.6911 41.1323 91.2486 40.7087V47.2002C91.8747 47.2432 93.6652 47.3487 96.1366 47.3487C99.1049 47.3487 100.597 47.2252 100.871 47.2002V40.7087C110.411 41.1331 117.529 42.7972 117.529 44.7794C117.529 46.7617 110.408 48.4266 100.871 48.851" fill="white"/>
      <defs>
        <linearGradient id={id1} x1="193" y1="2.46321" x2="193" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#01D395"/>
          <stop offset="1" stopColor="#00A776"/>
        </linearGradient>
        <linearGradient id={id2} x1="89" y1="1.13589" x2="89" y2="89" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FB9D3E"/>
          <stop offset="1" stopColor="#E7892A"/>
        </linearGradient>
        <linearGradient id={id3} x1="193" y1="1.13589" x2="193" y2="89" gradientUnits="userSpaceOnUse">
          <stop stopColor="#697DBC"/>
          <stop offset="1" stopColor="#49589B"/>
        </linearGradient>
        <linearGradient id={id4} x1="96.5" y1="0" x2="96.5" y2="89" gradientUnits="userSpaceOnUse">
          <stop stopColor="#53AE94"/>
          <stop offset="1" stopColor="#3F9A80"/>
        </linearGradient>
      </defs>
    </svg>

  );
}



