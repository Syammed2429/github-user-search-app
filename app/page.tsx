import { ModeToggle } from '@/components/mode-toggler';
import { GithubContainer } from '@/container/github-container/github-container';

export default function Home() {
  return (
    <main className=' min-h-screen flex flex-col  items-center justify-center '>
      <GithubContainer />
    </main>
  );
}
