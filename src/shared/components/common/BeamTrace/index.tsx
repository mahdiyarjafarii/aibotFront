"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"

export const PreviewTracingBeam = () => {
  // Create a state for the SVG height
  const [svgHeight, setSvgHeight] = useState(1000);

  const containerRef = useRef(null);
  const contentRef = useRef(null);
  // Measure the content container's height when the component mounts
  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);
  return (
    <div ref={containerRef} className="h-[40rem] bg-gray-50 overflow-auto">
      <div className="relative w-full max-w-4xl mx-auto h-full">
        <div className="absolute -left-2 top-3">
          <div className="ml-[27px] h-4 w-4 rounded-full border border-netural-200 shadow-sm flex items-center justify-center">
            <motion.div
              style={{
                transition: {
                  duration: 0.2,
                  delay: 0.5,
                },
                animate: {
                  backgroundColor: "white",
                  borderColor: "white",
                },
              }}
              className="h-2 w-2 rounded-full border border-neutral-300 bg-white">
              </motion.div>
          </div>
          <svg
            viewBox={`0 0 20 ${svgHeight}`}
            width="20"
            height={svgHeight} // Set the SVG height
            className=" ml-4 hidden lg:block"
            aria-hidden="true"
          >
            <motion.path
              d={`M 1 0V -36 l 18 24 V ${
                svgHeight * 0.8
              } l -18 24V ${svgHeight}`}
              fill="none"
              stroke="#9091A0"
              strokeOpacity="0.16"
              transition={{
                duration: 10,
              }}
            ></motion.path>
            <path
              d={`M 1 0V -36 l 18 24 V ${
                svgHeight * 0.8
              } l -18 24V ${svgHeight}`}
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="1.25"
              className="motion-reduce:hidden"
            ></path>
            <defs>
              <linearGradient
                id="gradient"
                gradientUnits="userSpaceOnUse"
                x1="0"
                x2="0"
              >
                <stop stopColor="#18CCFC" stopOpacity="0"></stop>
                <stop stopColor="#18CCFC"></stop>
                <stop offset="0.325" stopColor="#6344F5"></stop>
                <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div ref={contentRef}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            libero quis libero euismod sagittis et nec arcu. Nullam ut quam
            vitae mi finibus aliquet. Curabitur ultricies leo non lorem
            molestie, nec cursus sapien tincidunt. In hac habitasse platea
            dictumst. Fusce nec dui dolor. Ut venenatis nunc quis tortor
            hendrerit vestibulum. Nullam pretium nibh nec felis malesuada, eu
            convallis turpis congue. Nullam nec suscipit nisl. Pellentesque sed
            lacinia ex. Morbi tincidunt elit eu lacinia lacinia. Integer
            condimentum lacus ut quam posuere, at blandit mi sollicitudin.
          </p>

          <p>
            Phasellus nec bibendum nulla. Morbi varius sapien sed ipsum posuere,
            vel luctus nulla facilisis. Etiam et dolor massa. Ut eu odio eget
            arcu fermentum hendrerit. Nulla facilisi. Suspendisse ac purus quis
            ipsum suscipit malesuada. Phasellus eleifend nisi ut fermentum
            sodales. Mauris commodo lectus a magna vehicula, id vehicula elit
            suscipit. Fusce euismod ultrices eros, id feugiat odio condimentum
            id. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Nulla pharetra elit sit amet nisl
            placerat, nec dictum justo bibendum. Maecenas convallis libero nec
            feugiat scelerisque. Donec malesuada justo ac mi vehicula, id
            ullamcorper est accumsan. Morbi bibendum, risus ac posuere lacinia,
            est lectus commodo sapien, id rhoncus ex arcu ut arcu. Nam consequat
            nibh at lectus congue, at aliquam lectus dignissim.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            libero quis libero euismod sagittis et nec arcu. Nullam ut quam
            vitae mi finibus aliquet. Curabitur ultricies leo non lorem
            molestie, nec cursus sapien tincidunt. In hac habitasse platea
            dictumst. Fusce nec dui dolor. Ut venenatis nunc quis tortor
            hendrerit vestibulum. Nullam pretium nibh nec felis malesuada, eu
            convallis turpis congue. Nullam nec suscipit nisl. Pellentesque sed
            lacinia ex. Morbi tincidunt elit eu lacinia lacinia. Integer
            condimentum lacus ut quam posuere, at blandit mi sollicitudin.
          </p>

          <p>
            Phasellus nec bibendum nulla. Morbi varius sapien sed ipsum posuere,
            vel luctus nulla facilisis. Etiam et dolor massa. Ut eu odio eget
            arcu fermentum hendrerit. Nulla facilisi. Suspendisse ac purus quis
            ipsum suscipit malesuada. Phasellus eleifend nisi ut fermentum
            sodales. Mauris commodo lectus a magna vehicula, id vehicula elit
            suscipit. Fusce euismod ultrices eros, id feugiat odio condimentum
            id. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Nulla pharetra elit sit amet nisl
            placerat, nec dictum justo bibendum. Maecenas convallis libero nec
            feugiat scelerisque. Donec malesuada justo ac mi vehicula, id
            ullamcorper est accumsan. Morbi bibendum, risus ac posuere lacinia,
            est lectus commodo sapien, id rhoncus ex arcu ut arcu. Nam consequat
            nibh at lectus congue, at aliquam lectus dignissim.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            libero quis libero euismod sagittis et nec arcu. Nullam ut quam
            vitae mi finibus aliquet. Curabitur ultricies leo non lorem
            molestie, nec cursus sapien tincidunt. In hac habitasse platea
            dictumst. Fusce nec dui dolor. Ut venenatis nunc quis tortor
            hendrerit vestibulum. Nullam pretium nibh nec felis malesuada, eu
            convallis turpis congue. Nullam nec suscipit nisl. Pellentesque sed
            lacinia ex. Morbi tincidunt elit eu lacinia lacinia. Integer
            condimentum lacus ut quam posuere, at blandit mi sollicitudin.
          </p>

          <p>
            Phasellus nec bibendum nulla. Morbi varius sapien sed ipsum posuere,
            vel luctus nulla facilisis. Etiam et dolor massa. Ut eu odio eget
            arcu fermentum hendrerit. Nulla facilisi. Suspendisse ac purus quis
            ipsum suscipit malesuada. Phasellus eleifend nisi ut fermentum
            sodales. Mauris commodo lectus a magna vehicula, id vehicula elit
            suscipit. Fusce euismod ultrices eros, id feugiat odio condimentum
            id. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Nulla pharetra elit sit amet nisl
            placerat, nec dictum justo bibendum. Maecenas convallis libero nec
            feugiat scelerisque. Donec malesuada justo ac mi vehicula, id
            ullamcorper est accumsan. Morbi bibendum, risus ac posuere lacinia,
            est lectus commodo sapien, id rhoncus ex arcu ut arcu. Nam consequat
            nibh at lectus congue, at aliquam lectus dignissim.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            libero quis libero euismod sagittis et nec arcu. Nullam ut quam
            vitae mi finibus aliquet. Curabitur ultricies leo non lorem
            molestie, nec cursus sapien tincidunt. In hac habitasse platea
            dictumst. Fusce nec dui dolor. Ut venenatis nunc quis tortor
            hendrerit vestibulum. Nullam pretium nibh nec felis malesuada, eu
            convallis turpis congue. Nullam nec suscipit nisl. Pellentesque sed
            lacinia ex. Morbi tincidunt elit eu lacinia lacinia. Integer
            condimentum lacus ut quam posuere, at blandit mi sollicitudin.
          </p>

          <p>
            Phasellus nec bibendum nulla. Morbi varius sapien sed ipsum posuere,
            vel luctus nulla facilisis. Etiam et dolor massa. Ut eu odio eget
            arcu fermentum hendrerit. Nulla facilisi. Suspendisse ac purus quis
            ipsum suscipit malesuada. Phasellus eleifend nisi ut fermentum
            sodales. Mauris commodo lectus a magna vehicula, id vehicula elit
            suscipit. Fusce euismod ultrices eros, id feugiat odio condimentum
            id. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Nulla pharetra elit sit amet nisl
            placerat, nec dictum justo bibendum. Maecenas convallis libero nec
            feugiat scelerisque. Donec malesuada justo ac mi vehicula, id
            ullamcorper est accumsan. Morbi bibendum, risus ac posuere lacinia,
            est lectus commodo sapien, id rhoncus ex arcu ut arcu. Nam consequat
            nibh at lectus congue, at aliquam lectus dignissim.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            libero quis libero euismod sagittis et nec arcu. Nullam ut quam
            vitae mi finibus aliquet. Curabitur ultricies leo non lorem
            molestie, nec cursus sapien tincidunt. In hac habitasse platea
            dictumst. Fusce nec dui dolor. Ut venenatis nunc quis tortor
            hendrerit vestibulum. Nullam pretium nibh nec felis malesuada, eu
            convallis turpis congue. Nullam nec suscipit nisl. Pellentesque sed
            lacinia ex. Morbi tincidunt elit eu lacinia lacinia. Integer
            condimentum lacus ut quam posuere, at blandit mi sollicitudin.
          </p>

          <p>
            Phasellus nec bibendum nulla. Morbi varius sapien sed ipsum posuere,
            vel luctus nulla facilisis. Etiam et dolor massa. Ut eu odio eget
            arcu fermentum hendrerit. Nulla facilisi. Suspendisse ac purus quis
            ipsum suscipit malesuada. Phasellus eleifend nisi ut fermentum
            sodales. Mauris commodo lectus a magna vehicula, id vehicula elit
            suscipit. Fusce euismod ultrices eros, id feugiat odio condimentum
            id. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Nulla pharetra elit sit amet nisl
            placerat, nec dictum justo bibendum. Maecenas convallis libero nec
            feugiat scelerisque. Donec malesuada justo ac mi vehicula, id
            ullamcorper est accumsan. Morbi bibendum, risus ac posuere lacinia,
            est lectus commodo sapien, id rhoncus ex arcu ut arcu. Nam consequat
            nibh at lectus congue, at aliquam lectus dignissim.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            libero quis libero euismod sagittis et nec arcu. Nullam ut quam
            vitae mi finibus aliquet. Curabitur ultricies leo non lorem
            molestie, nec cursus sapien tincidunt. In hac habitasse platea
            dictumst. Fusce nec dui dolor. Ut venenatis nunc quis tortor
            hendrerit vestibulum. Nullam pretium nibh nec felis malesuada, eu
            convallis turpis congue. Nullam nec suscipit nisl. Pellentesque sed
            lacinia ex. Morbi tincidunt elit eu lacinia lacinia. Integer
            condimentum lacus ut quam posuere, at blandit mi sollicitudin.
          </p>

          <p>
            Phasellus nec bibendum nulla. Morbi varius sapien sed ipsum posuere,
            vel luctus nulla facilisis. Etiam et dolor massa. Ut eu odio eget
            arcu fermentum hendrerit. Nulla facilisi. Suspendisse ac purus quis
            ipsum suscipit malesuada. Phasellus eleifend nisi ut fermentum
            sodales. Mauris commodo lectus a magna vehicula, id vehicula elit
            suscipit. Fusce euismod ultrices eros, id feugiat odio condimentum
            id. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Nulla pharetra elit sit amet nisl
            placerat, nec dictum justo bibendum. Maecenas convallis libero nec
            feugiat scelerisque. Donec malesuada justo ac mi vehicula, id
            ullamcorper est accumsan. Morbi bibendum, risus ac posuere lacinia,
            est lectus commodo sapien, id rhoncus ex arcu ut arcu. Nam consequat
            nibh at lectus congue, at aliquam lectus dignissim.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            libero quis libero euismod sagittis et nec arcu. Nullam ut quam
            vitae mi finibus aliquet. Curabitur ultricies leo non lorem
            molestie, nec cursus sapien tincidunt. In hac habitasse platea
            dictumst. Fusce nec dui dolor. Ut venenatis nunc quis tortor
            hendrerit vestibulum. Nullam pretium nibh nec felis malesuada, eu
            convallis turpis congue. Nullam nec suscipit nisl. Pellentesque sed
            lacinia ex. Morbi tincidunt elit eu lacinia lacinia. Integer
            condimentum lacus ut quam posuere, at blandit mi sollicitudin.
          </p>

          <p>
            Phasellus nec bibendum nulla. Morbi varius sapien sed ipsum posuere,
            vel luctus nulla facilisis. Etiam et dolor massa. Ut eu odio eget
            arcu fermentum hendrerit. Nulla facilisi. Suspendisse ac purus quis
            ipsum suscipit malesuada. Phasellus eleifend nisi ut fermentum
            sodales. Mauris commodo lectus a magna vehicula, id vehicula elit
            suscipit. Fusce euismod ultrices eros, id feugiat odio condimentum
            id. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Nulla pharetra elit sit amet nisl
            placerat, nec dictum justo bibendum. Maecenas convallis libero nec
            feugiat scelerisque. Donec malesuada justo ac mi vehicula, id
            ullamcorper est accumsan. Morbi bibendum, risus ac posuere lacinia,
            est lectus commodo sapien, id rhoncus ex arcu ut arcu. Nam consequat
            nibh at lectus congue, at aliquam lectus dignissim.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            libero quis libero euismod sagittis et nec arcu. Nullam ut quam
            vitae mi finibus aliquet. Curabitur ultricies leo non lorem
            molestie, nec cursus sapien tincidunt. In hac habitasse platea
            dictumst. Fusce nec dui dolor. Ut venenatis nunc quis tortor
            hendrerit vestibulum. Nullam pretium nibh nec felis malesuada, eu
            convallis turpis congue. Nullam nec suscipit nisl. Pellentesque sed
            lacinia ex. Morbi tincidunt elit eu lacinia lacinia. Integer
            condimentum lacus ut quam posuere, at blandit mi sollicitudin.
          </p>

          <p>
            Phasellus nec bibendum nulla. Morbi varius sapien sed ipsum posuere,
            vel luctus nulla facilisis. Etiam et dolor massa. Ut eu odio eget
            arcu fermentum hendrerit. Nulla facilisi. Suspendisse ac purus quis
            ipsum suscipit malesuada. Phasellus eleifend nisi ut fermentum
            sodales. Mauris commodo lectus a magna vehicula, id vehicula elit
            suscipit. Fusce euismod ultrices eros, id feugiat odio condimentum
            id. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Nulla pharetra elit sit amet nisl
            placerat, nec dictum justo bibendum. Maecenas convallis libero nec
            feugiat scelerisque. Donec malesuada justo ac mi vehicula, id
            ullamcorper est accumsan. Morbi bibendum, risus ac posuere lacinia,
            est lectus commodo sapien, id rhoncus ex arcu ut arcu. Nam consequat
            nibh at lectus congue, at aliquam lectus dignissim.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            libero quis libero euismod sagittis et nec arcu. Nullam ut quam
            vitae mi finibus aliquet. Curabitur ultricies leo non lorem
            molestie, nec cursus sapien tincidunt. In hac habitasse platea
            dictumst. Fusce nec dui dolor. Ut venenatis nunc quis tortor
            hendrerit vestibulum. Nullam pretium nibh nec felis malesuada, eu
            convallis turpis congue. Nullam nec suscipit nisl. Pellentesque sed
            lacinia ex. Morbi tincidunt elit eu lacinia lacinia. Integer
            condimentum lacus ut quam posuere, at blandit mi sollicitudin.
          </p>

          <p>
            Phasellus nec bibendum nulla. Morbi varius sapien sed ipsum posuere,
            vel luctus nulla facilisis. Etiam et dolor massa. Ut eu odio eget
            arcu fermentum hendrerit. Nulla facilisi. Suspendisse ac purus quis
            ipsum suscipit malesuada. Phasellus eleifend nisi ut fermentum
            sodales. Mauris commodo lectus a magna vehicula, id vehicula elit
            suscipit. Fusce euismod ultrices eros, id feugiat odio condimentum
            id. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Nulla pharetra elit sit amet nisl
            placerat, nec dictum justo bibendum. Maecenas convallis libero nec
            feugiat scelerisque. Donec malesuada justo ac mi vehicula, id
            ullamcorper est accumsan. Morbi bibendum, risus ac posuere lacinia,
            est lectus commodo sapien, id rhoncus ex arcu ut arcu. Nam consequat
            nibh at lectus congue, at aliquam lectus dignissim.
          </p>
        </div>
      </div>
    </div>
  );
};
