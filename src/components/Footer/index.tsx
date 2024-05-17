import { ActionIcon, Container, Group, Image, Text, rem } from "@mantine/core";
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import classes from "./index.module.css";

const contentData: {
  title: string;
  links: { label: string; link: string }[];
}[] = [
  {
    title: "Support",
    links: [{ label: "Docs", link: "/docs" }],
  },
  // {
  //   title: "Project",
  //   links: [
  //     { label: "Contribute", link: "#" },
  //     { label: "Media assets", link: "#" },
  //     { label: "Changelog", link: "#" },
  //     { label: "Releases", link: "#" },
  //   ],
  // },
  {
    title: "Community",
    links: [
      { label: "Join Discord", link: "https://discord.com/invite/wJ3kHtmG6J" },
      { label: "Follow on Twitter", link: "https://twitter.com/realdacloud" },
      { label: "GitHub Discussions", link: "https://github.com/tobycloud" },
    ],
  },
];

const groups = contentData.map((group) => {
  const links = group.links.map((link, index) => (
    <Text key={index} className={classes.link} component={Link} to={link.link}>
      {link.label}
    </Text>
  ));

  return (
    <div className={classes.wrapper} key={group.title}>
      <Text className={classes.title}>{group.title}</Text>
      {links}
    </div>
  );
});

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Group gap="xs" mb="md">
            <Image
              src="/images/dacloud.png"
              alt="DaCloud™"
              h={50}
              w={50}
              style={{ borderRadius: "15%" }}
            />
            <Text size="xl">DaCloud™</Text>
          </Group>
          <Text size="xs" className={classes.description}>
            We delay projects to make them perfect.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text size="sm">
          © {new Date().getFullYear()} DaCloud™. All rights reserved.
        </Text>
        <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component={Link}
            to="https://discord.com/invite/wJ3kHtmG6J"
            target="_blank"
          >
            <IconBrandDiscord
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component={Link}
            to="https://twitter.com/realdacloud"
            target="_blank"
          >
            <IconBrandTwitter
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component={Link}
            to="https://github.com/tobycloud"
            target="_blank"
          >
            <IconBrandGithub
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          {/* <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon> */}
        </Group>
      </Container>
    </footer>
  );
}
