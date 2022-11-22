import { Button } from "../Button";
import { Paragraph } from "../Paragraph";
import { Title } from "../Title";
import { Numbers } from "../Numbers";
import { Star } from "../Star";



export function Rating() {
  return (
    <>
      <Star />
      <Title title="How did we do?" align="left"/>
      <Paragraph 
        description="Please let us know how we did with your support request. 
        All feedback is appreciated to help us improve our offering!"
        align="left"
      />
      <Numbers />
      <Button />
    </>
  );
}