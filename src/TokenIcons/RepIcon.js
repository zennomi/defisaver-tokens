import React from 'react';
import { v4 as uuid } from 'uuid';

export default function RepIcon(props) {
  const id = `rep_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill} fillOpacity="0.9"/>
      <path
        d="M140.845 117.312L100.039 44.1217C99.6922 43.4802 99.1788 42.9443 98.5527 42.5707C97.9266 42.1972 97.2111 42 96.482 42C95.753 42 95.0375 42.1972 94.4114 42.5707C93.7852 42.9443 93.2718 43.4802 92.9255 44.1217L52.1345 117.312C51.0738 119.199 51.6821 121.648 53.5852 122.771L94.4386 147.199C95.0851 147.567 95.8162 147.76 96.56 147.76C97.3039 147.76 98.0349 147.567 98.6815 147.199L139.472 122.818C141.282 121.648 141.953 119.199 140.845 117.312V117.312ZM110.006 87.8141L109.008 86.9718L108.946 86.9094C108.628 86.6499 108.294 86.4102 107.947 86.1918L107.885 86.1295C107.557 85.9111 107.214 85.6771 106.824 85.4587C106.762 85.4587 106.762 85.3963 106.715 85.3963C106.387 85.1779 105.997 85.0063 105.654 84.8347C105.592 84.8347 105.592 84.7724 105.545 84.7724C105.217 84.6008 104.827 84.4448 104.437 84.2732C104.375 84.2732 104.375 84.2108 104.328 84.2108C104.001 84.1016 103.658 83.93 103.33 83.8208C102.428 83.4829 101.499 83.222 100.553 83.0409C99.8358 84.4292 98.8219 85.6615 97.7143 86.7066C99.4458 86.8158 101.115 87.2682 102.612 87.8765C103.498 88.2577 104.353 88.7062 105.171 89.218C105.192 89.2203 105.213 89.227 105.232 89.2377C105.251 89.2485 105.267 89.263 105.28 89.2804C105.498 89.3896 105.67 89.5612 105.888 89.7328C105.993 89.7905 106.087 89.8642 106.169 89.9512C106.371 90.0826 106.559 90.2342 106.73 90.4035C106.84 90.5127 106.949 90.5751 107.058 90.6843C107.23 90.8559 107.386 90.9651 107.557 91.1367L107.885 91.4643L108.337 91.9166L108.665 92.2442C108.783 92.4048 108.913 92.556 109.055 92.6966C109.164 92.8214 109.273 92.9774 109.382 93.0865L109.71 93.5857C109.819 93.7573 109.928 93.8665 109.991 94.0381L110.318 94.5372C110.427 94.7088 110.49 94.8648 110.599 94.9896C110.708 95.1612 110.771 95.3172 110.88 95.4888C110.989 95.6604 111.051 95.8163 111.161 95.9879C111.223 96.1595 111.332 96.3155 111.379 96.4871C111.488 96.7055 111.551 96.9395 111.66 97.0954C112.128 98.2353 112.448 99.4306 112.611 100.652L113.11 102.602C113.329 103.444 115.341 110.557 120.005 112.959C125.356 115.736 132.422 119.199 135.198 120.525L98.5411 142.457V127.435C98.5411 125.049 103.268 122.256 105.436 121.32L105.545 121.258C105.997 121.04 106.434 120.806 106.886 120.541L107.058 120.431C108.008 119.869 108.901 119.216 109.725 118.481C109.788 118.419 109.897 118.372 109.944 118.263C110.053 118.201 110.115 118.092 110.225 118.045C110.505 117.826 110.724 117.546 111.005 117.327L111.114 117.218C111.402 116.948 111.664 116.65 111.894 116.329C111.956 116.22 112.065 116.157 112.112 116.048C112.33 115.83 112.502 115.549 112.72 115.268C112.783 115.206 112.83 115.097 112.892 115.05L113.563 114.051C113.563 113.989 113.625 113.989 113.625 113.942C113.906 113.49 114.187 112.991 114.468 112.554C113.36 111.212 112.518 109.777 111.847 108.436C111.563 109.26 111.208 110.059 110.786 110.822C110.615 111.15 110.396 111.493 110.225 111.821C110.162 111.883 110.162 111.93 110.115 111.93C109.943 112.2 109.756 112.461 109.554 112.71C109.491 112.772 109.445 112.881 109.382 112.928C109.209 113.191 109.005 113.432 108.774 113.646C108.712 113.708 108.712 113.755 108.665 113.755C107.323 115.253 105.717 116.532 103.876 117.421L103.548 117.592C102.597 117.982 94.423 121.71 94.423 127.326V142.348L57.6877 120.478C60.0743 119.027 66.9846 114.909 72.6626 113.131C74.8932 112.414 79.6197 115.408 82.2871 117.577L82.4587 117.748C82.8025 118.094 83.1728 118.412 83.5662 118.7L83.6754 118.809C84.5177 119.48 85.4068 120.151 86.4052 120.65L87.0759 120.977C87.0975 120.98 87.1183 120.986 87.1371 120.997C87.1559 121.008 87.1722 121.022 87.1851 121.04C87.7935 121.367 88.4018 121.648 89.0726 121.929C89.1634 121.972 89.2572 122.008 89.3534 122.038C89.4158 122.038 89.4625 122.1 89.5717 122.1C90.5233 122.428 91.4592 122.709 92.4107 122.943C93.1283 121.554 94.189 120.322 95.3121 119.277C93.7478 119.171 92.2078 118.834 90.7417 118.279C90.6793 118.216 90.5701 118.216 90.5233 118.169C90.3489 118.117 90.1813 118.043 90.0241 117.951C89.9617 117.889 89.8525 117.889 89.8057 117.842C89.6341 117.78 89.4781 117.67 89.3534 117.624C88.2458 117.062 87.2319 116.454 86.296 115.674L84.8453 114.332C83.5046 113.154 82.0522 112.109 80.5088 111.212C76.8899 109.153 73.8325 108.483 71.4927 109.216C66.657 110.776 61.135 113.724 57.7969 115.674L94.4698 49.7841V78.6732C94.4698 79.6715 92.9723 82.3389 87.9027 84.632L87.5751 84.8036C87.0759 85.0219 86.6236 85.3027 86.1244 85.5835L86.0152 85.6459C85.0555 86.2233 84.1428 86.8752 83.2854 87.5957C82.7453 88.0351 82.2442 88.5205 81.7879 89.0464L81.7255 89.1088C81.2324 89.5875 80.7835 90.1096 80.384 90.6687L80.3216 90.7311C80.1032 91.0119 79.9316 91.2927 79.7133 91.5735C79.7133 91.6358 79.6509 91.6358 79.6509 91.6826C79.4793 91.9634 79.3233 92.1818 79.1517 92.4626C79.1517 92.525 79.0893 92.525 79.0893 92.5718L78.5901 93.4141C78.5278 93.4765 78.5277 93.5233 78.481 93.6325C78.3094 93.9133 78.2002 94.1941 78.091 94.4124C78.0887 94.434 78.082 94.4548 78.0713 94.4736C78.0605 94.4924 78.046 94.5088 78.0286 94.5216C77.9194 94.8024 77.8102 95.0208 77.701 95.3016C77.6579 95.3924 77.6214 95.4863 77.5918 95.5824L77.2642 96.4247C77.2211 96.5155 77.1846 96.6094 77.1551 96.7055C77.1032 96.9152 77.03 97.119 76.9367 97.3138C76.8743 97.423 76.8743 97.5322 76.8275 97.6414C76.7651 97.9222 76.6559 98.203 76.6091 98.4214C76.5467 98.5305 76.5467 98.7021 76.4999 98.8113C76.4375 98.9829 76.4375 99.2013 76.3907 99.3729C76.3283 99.5445 76.3283 99.7005 76.2815 99.872C76.2191 100.09 76.2191 100.324 76.1723 100.543C76.1723 100.714 76.1099 100.824 76.1099 100.995C76.1099 101.214 76.0475 101.385 76.0475 101.604C76.0577 101.808 76.0367 102.013 75.9851 102.212V103.054C75.9785 104.062 76.0516 105.069 76.2035 106.065C77.6542 106.392 79.1517 107.016 80.774 107.796C80.3216 106.346 80.1032 104.848 80.0564 103.288V103.007C80.0461 102.637 80.067 102.267 80.1188 101.9V101.619C80.1188 101.292 80.1812 101.011 80.228 100.668V100.558C80.2904 100.231 80.3372 99.8876 80.3996 99.4977C80.3996 99.3885 80.462 99.3261 80.462 99.2169C80.5244 98.9361 80.6336 98.6553 80.6804 98.3746C80.6804 98.3122 80.7428 98.2654 80.7428 98.203L81.0704 97.2046C81.1328 97.1422 81.1328 97.0331 81.1796 96.9863C81.2887 96.7055 81.3979 96.4247 81.5071 96.2063C81.5695 96.1439 81.5695 96.0971 81.6163 95.9879C81.7879 95.6603 81.8971 95.3796 82.1155 95.0988C82.1573 95.0453 82.1939 94.9878 82.2247 94.9272C82.3963 94.6464 82.5055 94.428 82.677 94.1473C82.7189 94.0937 82.7555 94.0363 82.7862 93.9757C82.9735 93.684 83.1766 93.4028 83.3946 93.1333C83.3944 93.1251 83.3958 93.1169 83.3989 93.1092C83.402 93.1015 83.4066 93.0946 83.4124 93.0887C83.4182 93.0829 83.4252 93.0783 83.4329 93.0753C83.4405 93.0722 83.4487 93.0707 83.457 93.0709C83.6754 92.7902 83.847 92.5718 84.0653 92.291C84.1072 92.2375 84.1438 92.18 84.1745 92.1194C85.1787 91.0102 86.3217 90.0351 87.5751 89.218L89.3066 88.3757C90.2581 87.9857 98.3851 84.1484 98.3851 78.5172V49.7373L135.401 116.188C132.11 114.582 126.276 111.68 121.768 109.341C119.147 107.999 117.431 103.273 116.932 101.541L116.433 99.5445C116.433 98.4837 116.152 97.423 115.825 96.3779C114.649 93.0728 112.646 90.1243 110.006 87.8141"
        fill="white"/>
      <defs>
        <linearGradient id={id} x1="193" y1="2.46321" x2="193" y2="193"
                        gradientUnits="userSpaceOnUse">
          <stop stopColor="#723964"/>
          <stop offset="1" stopColor="#541B46"/>
        </linearGradient>
      </defs>
    </svg>

  );
}