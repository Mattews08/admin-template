import React from "react";
import Title from "./Title";
import ButtonTheme from "./ButtonTheme";
import useAppData from "../../data/hook/useAppData";
import Link from "next/link";
import useAuth from "../../data/hook/useAuth";
import { type } from "os";

type HeaderProps = {
  title: string;
  subtitle: string;
};

type AvatarProps = {
  className: string;
};

const AvatarUser = (props: AvatarProps) => {
  const { user } = useAuth();

  return (
    <Link href="/profile">
      <img
        src={user?.imgmUrl ?? "/img/avatar.png"}
        alt="avatar"
        className={`h-10 w-10 rounded-full cursor-pointer ${props.className}`}
      />
    </Link>
  );
};

export default function Header(props: HeaderProps) {
  const { theme, altTheme } = useAppData();

  return (
    <div className="flex">
      <Title title={props.title} subtitle={props.subtitle} />
      <div className="flex flex-grow justify-end items-center">
        <ButtonTheme theme={theme} altTheme={altTheme} />
        <AvatarUser className={"ml-3"} />
      </div>
    </div>
  );
}
