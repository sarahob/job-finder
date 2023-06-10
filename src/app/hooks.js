import useSWR from "swr";
import { useState, useEffect } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const useJobData = () => {
  const { data, error, isLoading } = useSWR(`/jobs`, fetcher);

  return {
    data: data?.data,
    isLoading,
    isError: error,
  };
};

export const useWindowLayout = () => {
  const MAX_WIDTH = 1000;
  const MAX_HEIGHT = 800;

  const getWidth = () => {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    return width < MAX_WIDTH ? width : MAX_WIDTH;
  };

  const getHeight = () => {
    const height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    return height < MAX_HEIGHT ? height : MAX_HEIGHT;
  };

  const initialWidth = getWidth();
  const initalHeight = getHeight();

  let [layout, setLayout] = useState([initialWidth, initalHeight]);

  useEffect(() => {
    const resizeListener = () => {
      const width = getWidth();
      const height = getHeight();
      setLayout([width, height]);
    };
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return layout;
};
