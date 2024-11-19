import { ListItem, UnorderedList } from '@chakra-ui/react';

function ProjectTechList() {
  return (
    <UnorderedList
      className="project-tech-list"
      display="flex"
      listStyleType="none"
      mt="25px"
      mb="10px"
      flexWrap="wrap"
      sx={{
        '& > li': {
          mb: '5px',
          mr: '20px',
        },
      }}
    >
      <ListItem>VSCode</ListItem>
      <ListItem>Sublime Text</ListItem>
      <ListItem>iTerm2</ListItem>
      <ListItem>Hyper</ListItem>
    </UnorderedList>
  );
}

export { ProjectTechList };
