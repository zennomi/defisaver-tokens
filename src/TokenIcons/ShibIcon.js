import React from 'react';
import { v4 as uuid } from 'uuid';

export default function ShibIcon(props) {
  const id = `shib_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill} />
      <path d="M117.84 58.1302C115.464 60.5066 113.287 63.0821 111.351 65.8284L110.74 65.6292C107.211 64.4766 103.554 63.7651 99.8682 63.5232C98.7583 63.4378 94.6175 63.4378 93.2658 63.5232C89.1819 63.7936 86.0514 64.4054 82.4941 65.6434C82.3518 65.7003 82.2237 65.743 82.0956 65.7857C80.0893 63.0536 77.8553 60.4923 75.3936 58.1445C87.204 52.097 101.021 51.3713 113.386 56.1381C114.71 56.6362 116.004 57.2196 117.271 57.8457L117.84 58.1302Z" fill="white"/>
      <path d="M139.867 112.103C138.074 117.211 135.385 121.949 131.899 126.076C130.006 128.296 127.915 130.33 125.666 132.18C120.401 136.421 114.254 139.452 107.694 141.045C100.437 142.795 92.8674 142.795 85.6103 141.045C79.0363 139.452 72.9034 136.421 67.6385 132.18C65.3903 130.33 63.2985 128.296 61.406 126.076C51.3743 114.223 48.3292 97.9442 53.4375 83.2736C54.4051 80.5558 55.6146 77.9376 57.066 75.4474C57.7348 74.3091 58.5601 73.0284 58.9586 72.5019C60.3246 78.3787 62.0037 83.544 62.6298 85.4081C62.5871 85.5077 62.5302 85.6215 62.4732 85.7211C59.1578 92.4374 57.3649 98.9118 56.938 105.799C56.938 105.884 56.9238 105.984 56.9238 106.069C56.8099 108.133 56.8668 109.114 57.2083 110.409C58.2756 114.465 61.5626 118.933 66.7136 123.315C75.1517 130.487 86.5922 135.667 95.2579 136.264C104.294 136.876 117.627 131.597 126.506 123.885C127.9 122.647 129.209 121.337 130.433 119.943C131.315 118.918 132.624 117.154 132.525 117.154C132.496 117.154 132.525 117.126 132.582 117.097C132.624 117.069 132.667 117.026 132.639 116.997C132.624 116.983 132.653 116.941 132.696 116.926C132.738 116.912 132.767 116.884 132.753 116.855C132.738 116.827 132.753 116.798 132.809 116.784C132.852 116.77 132.866 116.727 132.852 116.699C132.838 116.67 132.852 116.642 132.881 116.642C132.909 116.642 132.938 116.599 132.938 116.571C132.938 116.542 132.966 116.499 132.994 116.499C133.023 116.499 133.051 116.471 133.051 116.443C133.094 116.329 133.165 116.215 133.236 116.115C133.45 115.788 134.304 114.265 134.417 114.009C135.228 112.174 135.741 110.537 135.983 108.901C136.096 108.118 136.168 106.681 136.111 106.34C136.096 106.283 136.096 106.183 136.082 106.027C136.054 105.742 136.04 105.315 136.011 104.888C135.983 104.248 135.926 103.351 135.883 102.91C135.271 96.4501 133.621 91.171 130.49 85.5788C130.362 85.3654 130.248 85.1519 130.177 84.9812C130.149 84.9385 130.134 84.8958 130.12 84.8673C130.561 83.544 132.368 78.0087 133.806 71.6766L133.834 71.7051L134.047 71.9897C134.417 72.4877 135.399 73.9676 135.84 74.6791C137.847 77.9518 139.412 81.4665 140.522 85.1377C143.097 93.9742 142.884 103.394 139.867 112.103Z" fill="white"/>
      <path d="M121.397 95.0984C121.355 95.326 120.686 96.009 120.017 96.5071C118.053 97.9443 114.539 99.2818 110.967 99.9221C108.932 100.292 106.898 100.349 106.286 100.05C105.887 99.851 105.83 99.6945 105.973 99.1822C106.271 98.115 107.239 96.9482 108.747 95.8525C109.516 95.2976 112.632 93.4051 114.083 92.6082C116.474 91.2991 118.409 90.5165 119.718 90.3315C120.131 90.2746 120.629 90.2603 120.785 90.3315C121.042 90.4311 121.326 91.1853 121.44 92.0959C121.497 92.5797 121.468 94.7142 121.397 95.0984Z" fill="white"/>
      <path d="M87.8728 99.8084C87.7874 99.9791 87.3606 100.164 86.8768 100.235C86.393 100.306 84.9131 100.264 84.0736 100.164C81.0569 99.7657 77.8553 98.8408 75.5217 97.7024C74.2125 97.0621 73.2734 96.4218 72.5761 95.7245L72.1777 95.3119L72.135 94.7711C72.0639 93.832 72.0781 92.3521 72.192 91.8256C72.2631 91.3845 72.4196 90.9576 72.6331 90.5734C72.7469 90.4312 72.7469 90.4312 73.2592 90.4312C73.8853 90.4312 74.4118 90.5308 75.2655 90.8011C77.0157 91.3418 79.6197 92.6509 82.7929 94.5577C85.4111 96.1229 86.393 96.8913 87.1471 97.9443C87.6594 98.5989 88.0009 99.5238 87.8728 99.8084Z" fill="white"/>
      <path d="M136.082 106.34C136.068 106.283 136.068 106.183 136.054 106.027C132.639 105.657 122.891 105.429 113.841 112.9C113.841 112.9 110.924 99.5239 97.2642 99.5239C83.6039 99.5239 78.5382 112.9 78.5382 112.9C70.8827 104.661 60.6375 105.258 56.9379 105.799C56.9379 105.884 56.9236 105.984 56.9236 106.069C56.8098 108.133 56.8667 109.115 57.2082 110.409C58.2754 114.465 61.5625 118.933 66.7135 123.316C75.1516 130.487 86.5921 135.667 95.2578 136.264C104.294 136.876 117.627 131.597 126.506 123.885C127.9 122.647 129.209 121.338 130.433 119.943C131.315 118.919 132.624 117.154 132.525 117.154C132.496 117.154 132.525 117.126 132.582 117.097C132.624 117.069 132.667 117.026 132.639 116.998C132.624 116.983 132.653 116.941 132.696 116.927C132.738 116.912 132.767 116.884 132.752 116.855C132.738 116.827 132.752 116.798 132.809 116.784C132.852 116.77 132.866 116.727 132.852 116.699C132.838 116.67 132.852 116.642 132.881 116.642C132.909 116.642 132.937 116.599 132.937 116.571C132.937 116.542 132.966 116.5 132.994 116.5C133.023 116.5 133.051 116.471 133.051 116.443C133.094 116.329 133.165 116.215 133.236 116.115C133.45 115.788 134.303 114.266 134.417 114.01C135.228 112.174 135.741 110.538 135.983 108.901C136.068 108.119 136.139 106.681 136.082 106.34ZM100.508 123.7C100.238 123.856 100.053 123.927 100.01 123.899C99.9678 123.885 99.7685 123.714 99.5551 123.557L99.1709 123.244L98.7725 123.671C97.9045 124.61 97.876 124.653 97.6199 124.667C97.2215 124.71 97.1361 124.639 96.6523 123.913C96.3962 123.543 96.1969 123.23 96.1969 123.23C96.1969 123.23 96.012 123.202 95.7985 123.188L95.4001 123.145L95.2151 123.529L95.0301 123.913L94.7029 123.814C94.4467 123.728 94.1906 123.629 93.9487 123.515L93.5218 123.301V122.49L97.3069 122.505L101.092 122.519L101.106 122.903C101.12 123.358 101.135 123.344 100.508 123.7ZM107.623 121.138C107.41 121.95 107.239 122.604 107.239 122.633C107.082 122.647 106.94 122.661 106.784 122.647H106.328L105.716 124.141C105.375 124.952 105.062 125.706 105.019 125.82L104.934 126.019L104.635 125.535L104.336 125.052V121.11L104.222 121.138C103.98 121.195 102.259 121.423 101.505 121.494C98.3883 121.807 95.2578 121.736 92.1558 121.295C91.6577 121.224 91.2309 121.167 91.2166 121.181C91.2024 121.195 91.2166 122.106 91.2451 123.23L91.2878 125.251L91.0459 125.621C90.9178 125.82 90.7898 125.991 90.7898 126.005C90.7471 126.048 90.6048 125.82 90.2775 125.165C89.9218 124.482 89.6656 123.757 89.4806 123.003L89.381 122.59L88.9399 122.618L88.4988 122.661L88.385 122.135C88.3281 121.85 88.2569 121.409 88.2285 121.167L88.1858 120.712L87.8158 120.384C87.6024 120.199 87.3889 120.014 87.3462 119.986C87.2751 119.929 87.2466 119.829 87.2466 119.744V119.573L89.0253 119.587L90.804 119.602L90.8609 119.787L90.9178 119.972L91.5297 120C91.8712 120.014 92.9526 120.043 93.9202 120.071L95.6989 120.114L96.1543 119.402L96.6238 118.691H97.2215L97.2072 117.211L97.193 115.731L96.4104 115.39C93.8918 114.28 92.4119 113.013 91.857 111.477C91.7431 111.164 91.7431 111.05 91.7147 109.627C91.7004 108.218 91.7004 108.09 91.8 107.777C91.9993 107.066 92.5542 106.511 93.2657 106.326C93.5076 106.254 94.1479 106.254 97.5061 106.254L101.462 106.269L101.903 106.482C102.429 106.738 102.671 106.923 102.97 107.322C103.312 107.777 103.411 108.133 103.411 109.001C103.411 110.239 103.326 111.306 103.198 111.733C103.013 112.316 102.728 112.871 102.373 113.369C101.661 114.28 100.366 115.191 99.1851 115.603L98.8436 115.731L98.8579 117.225L98.8721 118.719L99.1851 118.748L99.4982 118.776L99.9251 119.417L100.338 120.057H102.244C103.297 120.057 104.222 120.071 104.308 120.085C104.45 120.114 104.479 120.1 104.621 119.858L104.792 119.602H106.428C107.694 119.602 108.064 119.616 108.064 119.659C108.022 119.644 107.837 120.342 107.623 121.138Z" fill="white"/>
      <path d="M131.344 59.1263C130.234 58.984 124.983 58.9556 119.035 70.0973L119.007 70.083C116.616 68.1763 114.823 67.2798 114.823 67.2798C124.229 56.4654 130.049 55.8678 130.049 55.8678C130.703 56.7358 131.116 57.8457 131.344 59.1263Z" fill="white"/>
      <path d="M127.53 80.0436C125.367 76.2016 122.493 72.8293 119.035 70.0972C124.983 58.9555 130.22 58.984 131.344 59.1263C132.667 66.739 127.53 80.0436 127.53 80.0436Z" fill="white"/>
      <path d="M131.557 59.1688C131.486 59.1546 131.415 59.1403 131.344 59.1261L131.557 59.1688Z" fill="#FF8300"/>
      <path d="M78.4246 67.2798C78.4246 67.2798 76.5748 68.1763 74.0989 70.083C74.0989 70.083 74.0846 70.0973 74.0704 70.0973C67.909 58.9414 62.4876 58.984 61.3208 59.1263C61.5485 57.8457 61.9754 56.7216 62.6441 55.8678C62.6584 55.8678 68.6917 56.4654 78.4246 67.2798Z" fill="white"/>
      <path d="M74.0844 70.0972C71.3808 72.1747 67.9373 75.4332 65.2906 80.0436C65.2906 80.0436 59.9688 66.739 61.3348 59.1263C62.4874 58.984 67.9231 58.9555 74.0844 70.0972Z" fill="white"/>
      <path d="M61.3348 59.1261C61.2637 59.1403 61.1783 59.1546 61.1072 59.1688L61.3348 59.1261Z" fill="#FF8300"/>
      <path d="M113.13 87.4288C113.13 87.4288 108.577 87.7134 109.146 84.156C109.715 80.5987 113.272 80.1718 114.269 80.3141C115.265 80.4564 119.249 81.8793 118.537 84.8675C117.826 87.8557 116.83 87.2865 116.261 87.4288C115.691 87.5711 113.13 87.4288 113.13 87.4288Z" fill="white"/>
      <path d="M79.5484 87.4288C79.5484 87.4288 74.995 87.7134 75.5641 84.156C76.1333 80.5987 79.6907 80.1718 80.6867 80.3141C81.6828 80.4564 85.667 81.8793 84.9556 84.8675C84.2441 87.8557 83.248 87.2865 82.6789 87.4288C82.1097 87.5711 79.5484 87.4288 79.5484 87.4288Z" fill="white"/>
      <defs>
        <linearGradient id={id} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00A3FF"/>
          <stop offset="1" stopColor="#005E93"/>
        </linearGradient>
      </defs>
    </svg>

  );
}

