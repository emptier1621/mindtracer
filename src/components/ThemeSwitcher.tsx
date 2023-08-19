import { Switch } from "@nextui-org/react";
import {useTheme} from "next-themes";
import { IoIosSunny, IoIosMoon } from "react-icons/io";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const handleClick = () =>{
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <Switch
      onClick={handleClick}
      size="lg"
      color="secondary"
      startContent={<IoIosSunny />}
      endContent={<IoIosMoon />}
    />
      
  )
};