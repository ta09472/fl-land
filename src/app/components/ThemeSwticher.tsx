"use client";

import { BulbFilled, BulbOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";

interface Props {
  scroll: boolean;
}

export const ThemeSwitcher = ({ scroll }: Props) => {
  const [_theme, setTheme] = useState("light");

  const toogleTheme = () => {
    const root = document.getElementsByTagName("html")[0];
    root.classList.toggle("dark");
    if (root.classList.contains("dark")) {
      setTheme("dark");
      document.cookie = `theme=${"dark"}`;
    } else {
      setTheme("light");
      document.cookie = `theme=${"light"}`;
    }
  };

  return (
    <>
      {_theme === "light" ? (
        <Button
          icon={<BulbFilled />}
          type="text"
          style={{ color: `${scroll ? "black" : "white"}` }}
          onClick={toogleTheme}
        />
      ) : (
        <Button
          icon={<BulbOutlined />}
          type="text"
          style={{ color: `${scroll ? "black" : "white"}` }}
          onClick={toogleTheme}
        />
      )}
    </>
  );
};
