import { Box, Heading, HStack, List, ListItem, Text } from "@chakra-ui/react";

type WorkLogProps = {
  achievements: Array<string>;
  project?: string;
}

export function WorkLog (props: WorkLogProps) {
  const { achievements, project } = props;

  return (
    <Box>
      <Heading as="h3" variant="subheading" lineHeight={1.5}>
        {project}
      </Heading>
      <List spacing={2}>
        {achievements.map((achievement, index) => (
          <ListItem key={index} as={HStack} alignItems="baseline">
            <Box as="span" color="lightteal.700" pr="10px">
                ▹
            </Box>
            <Text>{achievement}</Text>
          </ListItem>
        ))}
      </List>     
    </Box>
  )


}