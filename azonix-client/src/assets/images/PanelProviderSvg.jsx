import * as React from "react"

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1440}
    height={560}
    preserveAspectRatio="none"
    {...props}
  >
    <g mask='url("#a")' fill="none">
      <path fill="rgba(16, 36, 57, 1)" d="M0 0h1440v560H0z" />
      <path
        d="m-85.56 383.4-7.82 107.4M-85.56 383.4l166.18-8.97M-85.56 383.4 52.52 496.16M-85.56 383.4 42.21 648.11M-85.56 383.4l18.2 310M-85.56 383.4l327.78 7.2M-93.38 490.8l145.9 5.36M-67.36 693.4l109.57-45.29M-67.36 693.4l-26.02-202.6M-67.36 693.4 52.52 496.16M80.62 374.43l-28.1 121.73M80.62 374.43l161.6 16.17M80.62 374.43l-174 116.37M52.52 496.16 42.21 648.11M42.21 648.11l175.21 60.66M42.21 648.11-93.38 490.8M242.22 390.6l95.47-28.66M242.22 390.6l168.94 133.59M242.22 390.6 52.52 496.16M242.22 390.6l250.54-33.85M242.22 390.6l274.45 121.25M217.42 708.77l142-31.96M217.42 708.77l193.74-184.58M337.69 361.94l155.07-5.19M337.69 361.94l73.47 162.25M337.69 361.94l178.98 149.91M337.69 361.94 80.62 374.43M411.16 524.19l105.51-12.34M411.16 524.19l-51.74 152.62M359.42 676.81l177.14-14.36M359.42 676.81l157.25-164.96M359.42 676.81 242.22 390.6M492.76 356.75l23.91 155.1M492.76 356.75l155.15 54.92M492.76 356.75l-81.6 167.44M492.76 356.75l167.07-120.89M492.76 356.75l154.25 197.3M516.67 511.85l130.34 42.2M536.56 662.45l-19.89-150.6M536.56 662.45l110.45-108.4M536.56 662.45l-125.4-138.26M659.83 235.86l134.93-4.66M659.83 235.86l-11.92 175.81M647.91 411.67l-.9 142.38M647.91 411.67 516.67 511.85M647.91 411.67l148.53 118.62M647.91 411.67l208.99-43.71M647.01 554.05l149.43-23.76M647.01 554.05l147.35 105.62M794.76 231.2l62.14 136.76M794.76 231.2l174.62 21.18M794.76 231.2 647.91 411.67M794.76 231.2l197.43 139.09M794.76 231.2 982.93 53.68M856.9 367.96l135.29 2.33M856.9 367.96l112.48-115.58M856.9 367.96l-60.46 162.33M796.44 530.29l-2.08 129.38M794.36 659.67l180.02 10.62M794.36 659.67l182.69-157.98M794.36 659.67l-257.8 2.78M973.33-40.89l9.6 94.57M973.33-40.89l115.66 134.03M982.93 53.68l106.06 39.46M982.93 53.68l106.23 142.31M982.93 53.68l-13.55 198.7M969.38 252.38l22.81 117.91M992.19 370.29l-15.14 131.4M977.05 501.69l-2.67 168.6M974.38 670.29l117.25-13.9M974.38 670.29l164.54-107.82M974.38 670.29l-177.94-140M1156.86-64.61l117.69 21.87M1156.86-64.61l-67.87 157.75M1156.86-64.61 973.33-40.89M1156.86-64.61 982.93 53.68M1156.86-64.61l153.64 176.39M1088.99 93.14l.17 102.85M1089.16 195.99l-119.78 56.39M1089.16 195.99l57.12 146.2M1089.16 195.99l168.4 56.78M1089.16 195.99l-96.97 174.3M1146.28 342.19l115.19 5.27M1146.28 342.19l111.28-89.42M1146.28 342.19l-154.09 28.1M1146.28 342.19l-176.9-89.81M1146.28 342.19l-7.36 220.28M1138.92 562.47l-47.29 93.92M1138.92 562.47l164.79-19.61M1138.92 562.47l-161.87-60.78M1138.92 562.47l156.35 88.43M1091.63 656.39l-114.58-154.7M1091.63 656.39l203.64-5.49M1274.55-42.74l35.95 154.52M1274.55-42.74l173.03-66M1274.55-42.74l170.11 85.6M1274.55-42.74 1088.99 93.14M1274.55-42.74l-16.99 295.51M1310.5 111.78l-52.94 140.99M1310.5 111.78l134.16-68.92M1310.5 111.78l78.32 131M1257.56 252.77l3.91 94.69M1257.56 252.77l131.26-9.99M1261.47 347.46l127.35-104.68M1261.47 347.46l42.24 195.4M1261.47 347.46l193.6 61.91M1261.47 347.46l-172.31-151.47M1303.71 542.86l-8.44 108.04M1303.71 542.86l114.45-2.9M1303.71 542.86l134.93 121.72M1295.27 650.9l143.37 13.68M1295.27 650.9l122.89-110.94M1447.58-108.74l145.08 8.2M1447.58-108.74l-2.92 151.6M1444.66 42.86 1576.12 47M1388.82 242.78l66.25 166.59M1388.82 242.78l186.75 16.8M1388.82 242.78l168.32 98.79M1455.07 409.37l102.07-67.8M1455.07 409.37l-36.91 130.59M1455.07 409.37l154.09 110.72M1438.64 664.58l-20.48-124.62M1438.64 664.58l167.57 38.61M1592.66-100.54 1576.12 47M1592.66-100.54l-148 143.4M1592.66-100.54l-318.11 57.8M1592.66-100.54 1310.5 111.78M1592.66-100.54l-17.09 360.12M1576.12 47l-128.54-155.74M1575.57 259.58l-18.43 81.99M1609.16 520.09l-2.95 183.1M1609.16 520.09l-52.02-178.52M1609.16 520.09l-191 19.87M1609.16 520.09l-170.52 144.49M1609.16 520.09l-33.59-260.51M1606.21 703.19l-188.05-163.23"
        stroke="rgba(19, 20, 101, 1)"
        strokeWidth={1.5}
      />
      <circle r={5} cx={-85.56} cy={383.4} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={-93.38} cy={490.8} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={-67.36} cy={693.4} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={80.62} cy={374.43} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={52.52} cy={496.16} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={42.21} cy={648.11} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={242.22} cy={390.6} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={217.42} cy={708.77} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={337.69} cy={361.94} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={411.16} cy={524.19} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={359.42} cy={676.81} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={492.76} cy={356.75} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={516.67} cy={511.85} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={536.56} cy={662.45} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={659.83} cy={235.86} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={647.91} cy={411.67} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={647.01} cy={554.05} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={794.76} cy={231.2} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={856.9} cy={367.96} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={796.44} cy={530.29} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={794.36} cy={659.67} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={973.33} cy={-40.89} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={982.93} cy={53.68} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={969.38} cy={252.38} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={992.19} cy={370.29} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={977.05} cy={501.69} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={974.38} cy={670.29} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={1156.86} cy={-64.61} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={1088.99} cy={93.14} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={1089.16} cy={195.99} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={1146.28} cy={342.19} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={1138.92} cy={562.47} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={1091.63} cy={656.39} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={1274.55} cy={-42.74} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={1310.5} cy={111.78} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={1257.56} cy={252.77} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={1261.47} cy={347.46} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={1303.71} cy={542.86} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={1295.27} cy={650.9} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={1447.58} cy={-108.74} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={1444.66} cy={42.86} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={1388.82} cy={242.78} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={1455.07} cy={409.37} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={1418.16} cy={539.96} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={1438.64} cy={664.58} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={1592.66} cy={-100.54} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={1576.12} cy={47} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={1575.57} cy={259.58} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={1557.14} cy={341.57} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={1609.16} cy={520.09} fill="rgba(19, 20, 101, 1)" />
      <circle r={5} cx={1606.21} cy={703.19} fill="rgba(19, 20, 101, 1)" />
      <path
        d="m82.6 506.66 127.36 42.41M82.6 506.66l7.83 153.18M82.6 506.66l-169.57 26.98M82.6 506.66-94.61 653.17M82.6 506.66 258.17 675.3M90.43 659.84l119.53-110.77M90.43 659.84l167.74 15.46M90.43 659.84l-185.04-6.67M90.43 659.84l-177.4-126.2M789.09 393.85l-78.57-31M789.09 393.85l34.27 161.17M789.09 393.85l175.41.21M789.09 393.85l161.43 116.04M789.09 393.85 654.02 560.98M832.72 654.65l-9.36-99.63M832.72 654.65l-130.9 12.09M832.72 654.65l149.38 16.98M832.72 654.65l117.8-144.76M832.72 654.65l-178.7-93.67M832.72 654.65l-43.63-260.8M982.1 671.63l148.28-10.89M1116.13 555.78l14.25 104.96M1116.13 555.78l-12.75-156.39M1116.13 555.78l-165.61-45.89M1116.13 555.78 982.1 671.63M1116.13 555.78l193.81-41.99M1289.1 252.15l-34.74 159.26M1289.1 252.15l-170.78-35.12M1289.1 252.15l10.02-175.9M1289.1 252.15l143.36 118.32M1289.1 252.15l131.02-193.84M1407.14-103.71l-107.42 59.84M1407.14-103.71l12.98 162.02M1407.14-103.71l162.65 29.88M1432.46 370.47l108.11-20.02M1432.46 370.47l-7.75 157M1389.9 660.21l-104.64 35.22M1389.9 660.21l34.81-132.74M1389.9 660.21l-79.96-146.42M-86.97 533.64l-7.64 119.53M-86.97 533.64l296.93 15.43M-86.97 533.64 258.17 675.3M-86.97 533.64l448.41 145.77M-94.61 653.17l304.57-104.1M-94.61 653.17l352.78 22.13M209.96 549.07l48.21 126.23M258.17 675.3l103.27 4.11M258.17 675.3l145.67-186.72M403.84 488.58l-42.4 190.83M403.84 488.58l-193.88 60.49M403.84 488.58l149.66 212.6M361.44 679.41l192.06 21.77M553.5 701.18l148.32-34.44M553.5 701.18l100.52-140.2M553.5 701.18l279.22-46.53M553.5 701.18 258.17 675.3M710.52 362.85l-56.5 198.13M710.52 362.85l112.84 192.17M710.52 362.85l253.98 31.21M654.02 560.98l47.8 105.76M654.02 560.98l169.34-5.96M701.82 666.74l121.54-111.72M701.82 666.74l280.28 4.89M823.36 555.02l127.16-45.13M967.66 249.33l-3.16 144.73M967.66 249.33l150.66-32.3M967.66 249.33l135.72 150.06M967.66 249.33 789.09 393.85M964.5 394.06l-13.98 115.83M964.5 394.06l138.88 5.33M964.5 394.06 823.36 555.02M964.5 394.06l151.63 161.72M1118.32 217.03l-14.94 182.36M1118.32 217.03l180.8-140.78M1103.38 399.39l150.98 12.02M1130.38 660.74l154.88 34.69M1130.38 660.74l179.56-146.95M1299.72-43.87l-.6 120.12M1299.12 76.25l121-17.94M1254.36 411.41l55.58 102.38M1254.36 411.41l178.1-40.94M1309.94 513.79l114.77 13.68M1309.94 513.79l-24.68 181.64M1309.94 513.79l122.52-143.32M1420.12 58.31l-120.4-102.18M1569.79-73.83l26 143.5M1569.79-73.83 1420.12 58.31M1595.79 69.67l14.28 143.09M1595.79 69.67l-175.67-11.36M1595.79 69.67l-188.65-173.38M1540.57 350.45l69.5-137.69M1540.57 350.45l70.59 160.82M1540.57 350.45l-115.86 177.02M1540.57 350.45l-251.47-98.3M1540.57 350.45l-230.63 163.34M1611.16 511.27l-18.1 162.54M1611.16 511.27l-186.45 16.2M1611.16 511.27l-178.7-140.8M1593.06 673.81l-203.16-13.6"
        stroke="hsla(228.5, 77.2%, 51.5%, 0.42)"
        strokeWidth={1.5}
      />
      <circle r={25} cx={82.6} cy={506.66} fill="url(#b)" />
      <circle r={25} cx={90.43} cy={659.84} fill="url(#b)" />
      <circle r={25} cx={789.09} cy={393.85} fill="url(#b)" />
      <circle r={25} cx={832.72} cy={654.65} fill="url(#b)" />
      <circle r={25} cx={982.1} cy={671.63} fill="url(#b)" />
      <circle r={25} cx={1116.13} cy={555.78} fill="url(#b)" />
      <circle r={25} cx={1289.1} cy={252.15} fill="url(#b)" />
      <circle r={25} cx={1407.14} cy={-103.71} fill="url(#b)" />
      <circle r={25} cx={1432.46} cy={370.47} fill="url(#b)" />
      <circle r={25} cx={1389.9} cy={660.21} fill="url(#b)" />
      <circle r={5} cx={-86.97} cy={533.64} fill="rgba(206, 213, 239, 0.71)" />
      <circle r={5} cx={-94.61} cy={653.17} fill="rgba(206, 213, 239, 0.71)" />
      <circle r={5} cx={209.96} cy={549.07} fill="rgba(206, 213, 239, 0.71)" />
      <circle r={5} cx={258.17} cy={675.3} fill="rgba(206, 213, 239, 0.71)" />
      <circle r={5} cx={403.84} cy={488.58} fill="rgba(206, 213, 239, 0.71)" />
      <circle r={5} cx={361.44} cy={679.41} fill="rgba(206, 213, 239, 0.71)" />
      <circle r={5} cx={553.5} cy={701.18} fill="rgba(206, 213, 239, 0.71)" />
      <circle r={5} cx={710.52} cy={362.85} fill="rgba(206, 213, 239, 0.71)" />
      <circle r={5} cx={654.02} cy={560.98} fill="rgba(206, 213, 239, 0.71)" />
      <circle r={5} cx={701.82} cy={666.74} fill="rgba(206, 213, 239, 0.71)" />
      <circle r={5} cx={823.36} cy={555.02} fill="rgba(206, 213, 239, 0.71)" />
      <circle r={5} cx={967.66} cy={249.33} fill="rgba(206, 213, 239, 0.71)" />
      <circle r={5} cx={964.5} cy={394.06} fill="rgba(206, 213, 239, 0.71)" />
      <circle r={5} cx={950.52} cy={509.89} fill="rgba(206, 213, 239, 0.71)" />
      <circle r={5} cx={1118.32} cy={217.03} fill="rgba(206, 213, 239, 0.71)" />
      <circle r={5} cx={1103.38} cy={399.39} fill="rgba(206, 213, 239, 0.71)" />
      <circle r={5} cx={1130.38} cy={660.74} fill="rgba(206, 213, 239, 0.71)" />
      <circle r={5} cx={1299.72} cy={-43.87} fill="rgba(206, 213, 239, 0.71)" />
      <circle r={5} cx={1299.12} cy={76.25} fill="rgba(206, 213, 239, 0.71)" />
      <circle r={5} cx={1254.36} cy={411.41} fill="rgba(206, 213, 239, 0.71)" />
      <circle r={5} cx={1309.94} cy={513.79} fill="rgba(206, 213, 239, 0.71)" />
      <circle r={5} cx={1285.26} cy={695.43} fill="rgba(206, 213, 239, 0.71)" />
      <circle r={5} cx={1420.12} cy={58.31} fill="rgba(206, 213, 239, 0.71)" />
      <circle r={5} cx={1424.71} cy={527.47} fill="rgba(206, 213, 239, 0.71)" />
      <circle r={5} cx={1569.79} cy={-73.83} fill="rgba(206, 213, 239, 0.71)" />
      <circle r={5} cx={1595.79} cy={69.67} fill="rgba(206, 213, 239, 0.71)" />
      <circle r={5} cx={1610.07} cy={212.76} fill="rgba(206, 213, 239, 0.71)" />
      <circle r={5} cx={1540.57} cy={350.45} fill="rgba(206, 213, 239, 0.71)" />
      <circle r={5} cx={1611.16} cy={511.27} fill="rgba(206, 213, 239, 0.71)" />
      <circle r={5} cx={1593.06} cy={673.81} fill="rgba(206, 213, 239, 0.71)" />
    </g>
    <defs>
      <radialGradient id="b">
        <stop stopColor="#fff" offset={0.1} />
        <stop stopColor="rgba(23, 53, 179, 0.42)" offset={0.2} />
        <stop stopColor="rgba(23, 53, 179, 0)" offset={1} />
      </radialGradient>
      <mask id="a">
        <path fill="#fff" d="M0 0h1440v560H0z" />
      </mask>
    </defs>
  </svg>
)

export default SvgComponent
