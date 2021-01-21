import React from 'react';
import { v4 as uuid } from 'uuid';

export default function YfiIcon(props) {
  const id = `yfi_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M96.5 193C149.795 193 193 149.795 193 96.5C193 43.2045 149.795 0 96.5 0C43.2045 0 0 43.2045 0 96.5C0 149.795 43.2045 193 96.5 193Z"
        fill={fill} />
      <path fillRule="evenodd" clipRule="evenodd"
            d="M92.1308 50.2803C86.275 51.3934 82.0009 53.8803 78.227 58.3713C75.9242 61.1117 74.1338 65.0921 73.3097 69.3036C72.9173 71.3087 73.1241 75.7259 73.7154 77.9642C74.7082 81.7229 77.3823 86.2173 80.1319 88.7482C82.6158 91.0342 87.4677 94.5833 88.3522 94.7611C89.6609 95.0244 90.0902 94.1065 89.9734 91.2943C89.8839 89.1355 89.8413 89.0008 88.9531 88.0747C88.4433 87.5431 87.2972 86.5834 86.4061 85.9421C83.2543 83.6734 81.524 81.2714 80.2174 77.3503C78.2859 71.5552 79.7585 65.5031 84.1825 61.0558C87.3944 57.8269 91.1034 56.268 95.5734 56.268C100.043 56.268 103.752 57.8266 106.965 61.0558C110.257 64.364 111.889 68.6513 111.68 73.4432C111.559 76.2166 111.058 77.3921 110.058 77.2484C109.367 77.1494 108.899 76.2405 108.268 73.7735C107.689 71.5113 107.197 70.7379 106.197 70.5172C105.13 70.2816 103.448 70.7789 102.447 71.6257C101.739 72.2252 101.634 72.468 101.732 73.2826C101.886 74.5517 106.048 88.8094 106.549 89.7824C107.282 91.2085 108.143 91.2147 111.916 89.82C118.637 87.3357 123.705 85.5513 124.039 85.5513C124.236 85.5513 124.764 85.2411 125.212 84.862C126.216 84.0134 126.251 83.2501 125.373 81.356C124.471 79.4079 123.842 79.1963 121.26 79.9736C118.335 80.8542 118.007 80.879 117.453 80.2627C116.981 79.7391 116.984 79.6363 117.56 76.7295C118.014 74.4391 118.114 73.2629 117.988 71.7237C117.62 67.2497 116.41 63.5033 114.317 60.3588C112.705 57.9347 109.374 54.5749 107.404 53.3841C102.859 50.6381 96.7651 49.3994 92.1308 50.2803ZM93.9641 68.227L93.1901 69.0051V96.7322V124.459L93.9943 125.268C94.7559 126.033 94.8899 126.07 96.5156 125.966C97.8442 125.881 98.3661 125.722 98.823 125.263L99.4132 124.67L99.5456 98.1226C99.6185 83.5214 99.6103 70.9288 99.5274 70.1387C99.316 68.1218 98.5166 67.4489 96.3326 67.4489C94.9236 67.4489 94.6484 67.5394 93.9641 68.227ZM102.43 99.8602C102.276 100.263 102.19 101.491 102.239 102.589C102.345 104.967 102.552 105.299 105.265 107.439C108.427 109.932 110.236 112.751 111.242 116.751C113.261 124.776 108.405 133.306 100.34 135.901C97.9345 136.675 94.0868 136.854 91.8658 136.296C85.98 134.816 81.2584 130.072 79.7879 124.16C78.8653 120.451 79.8612 115.618 81.5894 115.417C82.2414 115.342 82.338 115.454 82.7149 116.73C82.9415 117.498 83.1274 118.613 83.1277 119.209C83.128 120.558 83.8443 122.039 84.7161 122.493C85.4742 122.889 87.044 122.735 88.1578 122.156C89.1986 121.615 89.5399 120.444 89.237 118.453C88.9936 116.853 88.7243 114.729 88.1374 109.777C87.5215 104.579 87.1643 103.034 86.4289 102.389C86.0531 102.06 85.5439 101.791 85.297 101.792C85.0502 101.792 82.8822 102.215 80.479 102.73C78.0758 103.245 74.3817 104.031 72.2698 104.476C70.1579 104.921 68.1639 105.459 67.8384 105.671C67.1123 106.144 66.857 107.074 67.0757 108.449C67.5069 111.158 68.2327 111.532 71.8405 110.905C75.6359 110.246 75.8458 110.675 74.0859 115.5C73.2862 117.693 73.212 118.156 73.212 120.957C73.2115 128.318 76.827 134.982 83.0917 139.169C85.7057 140.916 88.0138 141.846 91.473 142.546C94.3447 143.127 94.4104 143.128 97.6673 142.675C102.196 142.045 104.577 141.236 107.402 139.365C116.743 133.181 120.339 122.015 116.246 111.904C115.824 110.861 115.081 109.343 114.596 108.531C112.603 105.195 105.504 99.1385 103.577 99.1313C102.875 99.1286 102.657 99.2668 102.43 99.8602Z"
            fill="white"/>
      <defs>
        <linearGradient id={id} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1479F8"/>
          <stop offset="1" stopColor="#1360B3"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
