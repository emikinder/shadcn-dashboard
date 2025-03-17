import { Button } from '@/components/ui/button';
import { LoaderPinwheel, Terminal } from 'lucide-react';

const Page = () => {
  return (
    <div className="grid grid-cols-5 gap-2">
      <Button>Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button disabled>Disabled</Button>
      <Button variant="success">Clic me</Button>
      <Button size="icon">
        <Terminal />
      </Button>
      <Button>
        <Terminal />
        Login
      </Button>
      <Button>
        <LoaderPinwheel className='animate-spin'/>
        Loading
      </Button>
    </div>
  );
};

export default Page;
