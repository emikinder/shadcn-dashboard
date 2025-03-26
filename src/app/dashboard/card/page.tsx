import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';

const Page = () => {
  return (
    <Card className="w-min">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter className="gap-1">
        <Button size="sm">Cancel</Button>
        <Button size="sm">Accept</Button>
      </CardFooter>
    </Card>
  );
};

export default Page;
